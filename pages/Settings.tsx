import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Settings: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Settings</h2>
          <p className="text-base text-gray-500 mt-1">Manage workspace preferences</p>
        </div>
        <Button size="md">Save Changes</Button>
      </div>

      <div className="space-y-10">
        <section>
          <h3 className="text-base font-medium text-gray-900 mb-5 uppercase tracking-wider">General</h3>
          <Card className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-700">Workspace Name</label>
                <input type="text" defaultValue="Default Workspace" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-base focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all placeholder-gray-400" />
              </div>
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-700">Support Email</label>
                <input type="email" defaultValue="support@company.com" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-base focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all placeholder-gray-400" />
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h3 className="text-base font-medium text-gray-900 mb-5 uppercase tracking-wider">Appearance</h3>
          <Card>
             <div className="flex items-center gap-6">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
                  <div className="w-5 h-5 rounded-full border border-gray-900 bg-gray-900"></div>
                  <span className="text-base text-gray-900 font-medium">Light</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
                  <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                  <span className="text-base text-gray-500">Dark</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
                  <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                  <span className="text-base text-gray-500">System</span>
                </label>
              </div>
          </Card>
        </section>

        <section>
           <h3 className="text-base font-medium text-gray-900 mb-5 uppercase tracking-wider">Notifications</h3>
           <Card className="space-y-0 divide-y divide-gray-100">
             <label className="flex items-center justify-between py-4 cursor-pointer">
               <span className="text-base text-gray-700">Email me when a deal is won</span>
               <input type="checkbox" defaultChecked className="accent-gray-900 w-5 h-5 rounded border-gray-300" />
             </label>
             <label className="flex items-center justify-between py-4 cursor-pointer">
               <span className="text-base text-gray-700">Daily pipeline summary</span>
               <input type="checkbox" className="accent-gray-900 w-5 h-5 rounded border-gray-300" />
             </label>
           </Card>
        </section>
      </div>
    </div>
  );
};