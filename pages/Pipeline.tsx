import React, { useState } from 'react';
import { MOCK_DEALS, STAGES } from '../constants';
import { Deal, StageId } from '../types';
import { MoreHorizontal } from 'lucide-react';

export const Pipeline: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>(MOCK_DEALS);
  const [draggedDealId, setDraggedDealId] = useState<string | null>(null);

  // Drag handlers
  const onDragStart = (e: React.DragEvent, dealId: string) => {
    setDraggedDealId(dealId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (e: React.DragEvent, stageId: StageId) => {
    e.preventDefault();
    if (!draggedDealId) return;

    setDeals((prev) => 
      prev.map((deal) => 
        deal.id === draggedDealId ? { ...deal, stageId } : deal
      )
    );
    setDraggedDealId(null);
  };

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(val);

  return (
    <div className="h-[calc(100vh-4.5rem)] p-8 overflow-x-auto overflow-y-hidden">
      <div className="flex h-full gap-8 min-w-[1400px]">
        {STAGES.map((stage) => {
          const stageDeals = deals.filter((d) => d.stageId === stage.id);
          const totalValue = stageDeals.reduce((acc, curr) => acc + curr.value, 0);

          return (
            <div 
              key={stage.id} 
              className="flex-shrink-0 w-80 flex flex-col h-full"
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, stage.id)}
            >
              {/* Column Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-base text-gray-900">{stage.name}</h3>
                  <span className="text-sm text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
                    {stageDeals.length}
                  </span>
                </div>
              </div>

              {/* Drop Zone / Deal List */}
              <div className="flex-1 space-y-4 pb-4">
                {stageDeals.map((deal) => (
                  <div
                    key={deal.id}
                    draggable
                    onDragStart={(e) => onDragStart(e, deal.id)}
                    className="group relative bg-white rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-300 cursor-grab active:cursor-grabbing transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-base font-medium text-gray-900 leading-tight">
                        {deal.title}
                      </h4>
                      <button className="text-gray-300 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-5">
                      <span className="text-sm font-medium text-gray-600">
                        {formatCurrency(deal.value)}
                      </span>
                      {deal.probability > 0 && (
                        <div className="flex items-center gap-2">
                             <div className="h-2 w-10 bg-gray-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-gray-900" style={{ width: `${deal.probability}%` }}></div>
                             </div>
                             <span className="text-xs text-gray-400 font-medium">{deal.probability}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {stageDeals.length === 0 && (
                  <div className="h-32 border border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                    Empty
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};