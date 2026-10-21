export interface ToolEntry {
  id: string;
  name: string;
  description: string;
  student: string;
  path: string;
  category: 'Daily Life' | 'Finance' | 'Food & Life' | 'Utility' | 'Health & Math';
  tags: string[];
  features: string[];
  htmlCode?: string;
  cssCode?: string;
  jsCode?: string;
}

export interface ValidationIssue {
  type: 'error' | 'warning' | 'success';
  message: string;
  field?: string;
  entryIndex?: number;
}
