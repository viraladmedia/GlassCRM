import { Deal, Lead, Stage, User } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Alex Founder',
  avatarUrl: 'https://i.pravatar.cc/150?u=u1',
};

export const STAGES: Stage[] = [
  { id: 'new', name: 'New', color: 'bg-slate-500' },
  { id: 'qualified', name: 'Qualified', color: 'bg-blue-500' },
  { id: 'proposal', name: 'Proposal', color: 'bg-indigo-500' },
  { id: 'negotiation', name: 'Negotiation', color: 'bg-purple-500' },
  { id: 'won', name: 'Won', color: 'bg-emerald-500' },
];

export const MOCK_LEADS: Lead[] = [
  { id: 'l1', name: 'Sarah Miller', company: 'Acme Corp', email: 'sarah@acme.com', status: 'New', value: 12000, ownerId: 'u1', createdAt: '2023-10-01' },
  { id: 'l2', name: 'John Doe', company: 'Globex Inc', email: 'john@globex.com', status: 'Qualified', value: 8500, ownerId: 'u1', createdAt: '2023-10-05' },
  { id: 'l3', name: 'Emma Wilson', company: 'TechFlow', email: 'emma@techflow.io', status: 'Contacted', value: 24000, ownerId: 'u1', createdAt: '2023-10-10' },
  { id: 'l4', name: 'Michael Chen', company: 'Stark Ind', email: 'm.chen@stark.com', status: 'New', value: 50000, ownerId: 'u1', createdAt: '2023-10-12' },
  { id: 'l5', name: 'Lisa Wang', company: 'Umbrella Corp', email: 'lisa@umbrella.com', status: 'Unqualified', value: 0, ownerId: 'u1', createdAt: '2023-10-15' },
];

export const MOCK_DEALS: Deal[] = [
  { id: 'd1', leadId: 'l1', title: 'Acme Corp Q4 License', value: 12000, stageId: 'new', ownerId: 'u1', probability: 20, createdAt: '2023-10-01', updatedAt: '2023-10-01' },
  { id: 'd2', leadId: 'l2', title: 'Globex Pilot Program', value: 8500, stageId: 'qualified', ownerId: 'u1', probability: 40, createdAt: '2023-10-05', updatedAt: '2023-10-06' },
  { id: 'd3', leadId: 'l3', title: 'TechFlow Enterprise', value: 24000, stageId: 'proposal', ownerId: 'u1', probability: 60, createdAt: '2023-10-10', updatedAt: '2023-10-11' },
  { id: 'd4', leadId: 'l4', title: 'Stark Defense Contract', value: 50000, stageId: 'negotiation', ownerId: 'u1', probability: 80, createdAt: '2023-10-12', updatedAt: '2023-10-14' },
];

export const CHART_DATA_REVENUE = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Aug', value: 4200 },
  { name: 'Sep', value: 5100 },
  { name: 'Oct', value: 6200 },
];

export const CHART_DATA_PIPELINE = [
  { name: 'New', value: 1 },
  { name: 'Qualified', value: 3 },
  { name: 'Proposal', value: 2 },
  { name: 'Negotiation', value: 1 },
  { name: 'Won', value: 8 },
];
