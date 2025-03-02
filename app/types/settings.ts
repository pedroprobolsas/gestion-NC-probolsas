export interface GeneralSettings {
  companyName: string;
  email: string;
  phone: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  dailyDigest: boolean;
  criticalAlerts: boolean;
}

export interface WorkflowSettings {
  requireApproval: boolean;
  autoCloseAfterDays: number;
  defaultPriority: 'low' | 'medium' | 'high';
}

export interface Settings {
  general: GeneralSettings;
  notifications: NotificationSettings;
  workflow: WorkflowSettings;
}
