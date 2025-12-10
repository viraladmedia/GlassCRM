import React from 'react';
import { MOCK_LEADS } from '../constants';
import { Card } from '../components/ui/Card';
import { Mail, MoreHorizontal, Filter, Download } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Leads: React.FC = () => {
  const getStatusStyle = (status: string) => {
     switch(status) {
         case 'New': return 'text-blue-600 bg-blue-50 border-blue-100';
         case 'Qualified': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
         case 'Contacted': return 'text-purple-600 bg-purple-50 border-purple-100';
         default: return 'text-gray-600 bg-gray-100 border-gray-200';
     }
  }

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
           <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Leads</h2>
           <p className="text-lg text-gray-500 mt-2">Manage and track your potential customers.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="md" icon={<Filter size={16}/>}>Filter</Button>
          <Button variant="secondary" size="md" icon={<Download size={16}/>}>Export</Button>
        </div>
      </div>

      <Card noPadding className="overflow-hidden shadow-sm border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm font-medium text-gray-500 bg-gray-50/50">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Value</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_LEADS.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                        {lead.name.charAt(0)}
                      </div>
                      <span className="text-base font-medium text-gray-900">{lead.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-base text-gray-600">{lead.company}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-medium ${getStatusStyle(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-base text-gray-600 font-medium">
                    {lead.value ? `$${lead.value.toLocaleString()}` : '-'}
                  </td>
                  <td className="px-6 py-4 text-base text-gray-500">
                      {lead.email}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-300 hover:text-gray-900 p-1.5 rounded transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};