export type CaseStatus = "open" | "in_progress" | "resolved" | "closed";
export type CaseType = "non_conformity" | "complaint" | "improvement";
export type CasePriority = "high" | "medium" | "low";
export type CaseArea = "produccion" | "calidad" | "ventas" | "despachos" | "gerencia" | "contabilidad" | "marketing" | "talento humano" | "cliente";

export interface Case {
  id: string;
  title: string;
  type: CaseType;
  status: CaseStatus;
  priority: CasePriority;
  area: CaseArea;
  client: string;
  productionOrder?: string;
  productCode?: string;
  reportedBy: string;
  reporterEmail: string;
  description: string;
  evidence?: string[];
  createdAt: string;
  updatedAt: string;
  assignedTo: string;
}

export const estadosCaso: Record<CaseStatus, string> = {
  open: "ABIERTO",
  in_progress: "EN PROCESO",
  resolved: "RESUELTO",
  closed: "CERRADO"
};

export const tiposCaso: Record<CaseType, string> = {
  non_conformity: "NO CONFORMIDAD",
  complaint: "RECLAMO",
  improvement: "MEJORA"
};

export const prioridadesCaso: Record<CasePriority, string> = {
  high: "ALTA",
  medium: "MEDIA",
  low: "BAJA"
};

export const areasCaso: Record<CaseArea, string> = {
  produccion: "PRODUCCIÓN",
  calidad: "CALIDAD",
  ventas: "VENTAS",
  despachos: "DESPACHOS",
  gerencia: "GERENCIA",
  contabilidad: "CONTABILIDAD",
  marketing: "MARKETING",
  "talento humano": "TALENTO HUMANO",
  cliente: "CLIENTE"
};
