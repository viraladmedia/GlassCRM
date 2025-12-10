import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Kanban, Users, Settings, CreditCard, LogOut, Command } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/' },
    { label: 'Pipeline', icon: <Kanban size={18} />, path: '/pipeline' },
    { label: 'Leads', icon: <Users size={18} />, path: '/leads' },
    { label: 'Billing', icon: <CreditCard size={18} />, path: '/billing' },
    { label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#F9FAFB] border-r border-gray-200 z-30 flex flex-col">
      <div className="p-6 flex items-center gap-3 mb-4">
        <div className="w-7 h-7 bg-gray-900 rounded-md flex items-center justify-center text-white">
          <Command size={16} />
        </div>
        <span className="font-semibold text-lg tracking-tight text-gray-900">GlassCRM</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="px-3 mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Workspace
        </div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-md text-base transition-all duration-200 ${
                isActive 
                  ? 'bg-gray-100 text-gray-900 font-medium' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              <span className={isActive ? 'text-gray-900' : 'text-gray-400'}>
                {item.icon}
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-5 border-t border-gray-200">
        <button className="flex items-center gap-3.5 w-full px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};