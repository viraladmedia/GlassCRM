export type StageId = 'new' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Unqualified';
  value?: number;
  ownerId: string;
  createdAt: string;
}

export interface Deal {
  id: string;
  leadId: string;
  title: string;
  value: number;
  stageId: StageId;
  ownerId: string;
  probability: number;
  createdAt: string;
  updatedAt: string;
}

export interface Stage {
  id: StageId;
  name: string;
  color: string;
}

export interface PipelineColumn {
  id: StageId;
  title: string;
  deals: Deal[];
}

export interface AnalyticsMetric {
  label: string;
  value: string | number;
  change?: number; // percentage
  trend: 'up' | 'down' | 'neutral';
}