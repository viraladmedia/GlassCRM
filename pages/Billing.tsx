import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';

export const Billing: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Simple Pricing</h2>
        <p className="text-xl text-gray-500">Transparent fees for teams of all sizes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <Card className="flex flex-col relative border-gray-200 p-8">
           <div className="p-2">
             <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
             <div className="mt-6 flex items-baseline gap-1">
               <span className="text-5xl font-bold text-gray-900 tracking-tight">$0</span>
               <span className="text-gray-500 text-lg">/mo</span>
             </div>
             <p className="mt-4 text-base text-gray-500 leading-relaxed">Perfect for side projects and solo founders getting started.</p>
           </div>
           <div className="flex-1 mt-10 space-y-4">
             {['Up to 500 leads', '1 Pipeline', 'Basic Analytics', 'Community Support'].map(feat => (
               <div key={feat} className="flex items-center gap-3 text-base text-gray-700">
                 <div className="text-gray-900"><Check size={18} strokeWidth={3} /></div>
                 {feat}
               </div>
             ))}
           </div>
           <Button variant="secondary" size="lg" className="mt-10 w-full">Current Plan</Button>
        </Card>

        {/* Pro Plan */}
        <Card className="flex flex-col relative border-gray-900 ring-1 ring-gray-900/5 p-8">
           <div className="p-2">
             <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
                <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-bold uppercase tracking-wide">Popular</span>
             </div>
             <div className="mt-6 flex items-baseline gap-1">
               <span className="text-5xl font-bold text-gray-900 tracking-tight">$29</span>
               <span className="text-gray-500 text-lg">/mo</span>
             </div>
             <p className="mt-4 text-base text-gray-500 leading-relaxed">For growing teams that need more power and flexibility.</p>
           </div>
           <div className="flex-1 mt-10 space-y-4">
             {['Unlimited leads', 'Unlimited Pipelines', 'Advanced Analytics', 'Email Integration', 'Priority Support'].map(feat => (
               <div key={feat} className="flex items-center gap-3 text-base text-gray-700">
                 <div className="text-gray-900"><Check size={18} strokeWidth={3} /></div>
                 {feat}
               </div>
             ))}
           </div>
           <Button variant="primary" size="lg" className="mt-10 w-full">Upgrade to Pro</Button>
        </Card>

        {/* Enterprise Plan */}
        <Card className="flex flex-col relative border-gray-200 p-8">
           <div className="p-2">
             <h3 className="text-lg font-semibold text-gray-900">Business</h3>
             <div className="mt-6 flex items-baseline gap-1">
               <span className="text-5xl font-bold text-gray-900 tracking-tight">$79</span>
               <span className="text-gray-500 text-lg">/mo</span>
             </div>
             <p className="mt-4 text-base text-gray-500 leading-relaxed">Advanced security and control for large organizations.</p>
           </div>
           <div className="flex-1 mt-10 space-y-4">
             {['Everything in Pro', 'SSO & SAML', 'Audit Logs', 'Dedicated Success Manager', 'SLA'].map(feat => (
               <div key={feat} className="flex items-center gap-3 text-base text-gray-700">
                 <div className="text-gray-900"><Check size={18} strokeWidth={3} /></div>
                 {feat}
               </div>
             ))}
           </div>
           <Button variant="secondary" size="lg" className="mt-10 w-full">Contact Sales</Button>
        </Card>
      </div>
    </div>
  );
};