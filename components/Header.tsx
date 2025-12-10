import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { Button } from './ui/Button';
import { CURRENT_USER } from '../constants';
import { useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Dashboard';
      case '/pipeline': return 'Pipeline';
      case '/leads': return 'Leads';
      case '/billing': return 'Billing';
      case '/settings': return 'Settings';
      default: return 'GlassCRM';
    }
  };

  return (
    <header className="h-18 sticky top-0 bg-[#F9FAFB] border-b border-gray-200 z-20 px-8 flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <h1 className="text-base font-medium text-gray-500">
          Workspace <span className="mx-2 text-gray-300">/</span> <span className="text-gray-900">{getPageTitle()}</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block group mr-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-10 pl-10 pr-4 bg-white border border-gray-200 rounded-md text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 w-72 transition-all"
          />
        </div>

        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell size={20} />
        </button>

        <Button size="sm" icon={<Plus size={16}/>} className="hidden sm:flex h-9 text-sm">
          New
        </Button>

        <div className="h-9 w-9 rounded-full bg-gray-200 ring-2 ring-white cursor-pointer overflow-hidden ml-2">
             <img src={CURRENT_USER.avatarUrl} alt={CURRENT_USER.name} className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
      </div>
    </header>
  );
};