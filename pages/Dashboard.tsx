import React from 'react';
import { Card } from '../components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { CHART_DATA_REVENUE, CHART_DATA_PIPELINE } from '../constants';

const MetricCard: React.FC<{ 
  label: string; 
  value: string; 
  trend: string; 
  positive?: boolean;
}> = ({ label, value, trend, positive = true }) => (
  <Card className="flex flex-col justify-between h-40">
    <div className="flex flex-col h-full justify-between">
      <div className="flex justify-between items-start">
         <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{label}</h3>
         <span className={`flex items-center text-sm font-medium px-2 py-0.5 rounded ${positive ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'}`}>
            {positive ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
            {trend}
          </span>
      </div>
      <div>
        <p className="text-5xl font-semibold text-gray-900 tracking-tight">{value}</p>
      </div>
    </div>
  </Card>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-500">
      
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Overview</h2>
        <p className="text-lg text-gray-500 mt-2">Performance metrics for the last 30 days.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          label="Total Revenue" 
          value="$124.5k" 
          trend="12.5%" 
        />
        <MetricCard 
          label="Active Leads" 
          value="148" 
          trend="8.2%" 
        />
        <MetricCard 
          label="Open Deals" 
          value="45" 
          trend="2.4%" 
          positive={false}
        />
        <MetricCard 
          label="Win Rate" 
          value="32%" 
          trend="4.1%" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 h-[500px] flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
             <div className="flex gap-2">
                <button className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1.5 rounded">12M</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded">30D</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded">7D</button>
             </div>
          </div>
          <div className="flex-1 w-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA_REVENUE}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#18181b" stopOpacity={0.05}/>
                    <stop offset="95%" stopColor="#18181b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#9CA3AF', fontSize: 13, fontFamily: 'Inter'}} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#9CA3AF', fontSize: 13, fontFamily: 'Inter'}} 
                  tickFormatter={(value) => `$${value}`} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', color: '#fff', borderRadius: '4px', border: 'none', fontSize: '14px' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ stroke: '#E5E7EB', strokeWidth: 1 }}
                />
                <Area type="monotone" dataKey="value" stroke="#18181b" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="h-[500px] flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">Pipeline Volume</h3>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA_PIPELINE} layout="vertical" barSize={40} margin={{ left: 0, right: 0, bottom: 0, top: 0 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={100} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#6B7280', fontSize: 14, fontWeight: 500, fontFamily: 'Inter'}} 
                />
                <Tooltip 
                  cursor={{fill: '#F3F4F6'}}
                  contentStyle={{ backgroundColor: '#18181b', color: '#fff', borderRadius: '4px', border: 'none', fontSize: '14px' }}
                />
                <Bar dataKey="value" fill="#E5E7EB" radius={[4, 4, 4, 4]} activeBar={{ fill: '#18181b' }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};