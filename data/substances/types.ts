export type SubstanceCategory =
  | 'stimulants'
  | 'depressants'
  | 'hallucinogens'
  | 'dissociatives'
  | 'empathogens'
  | 'cannabinoids'
  | 'opioids'
  | 'deliriants'
  | 'nootropics'
  | 'other';

export interface RouteDosageDuration {
  dosage: {
    threshold: string;
    light: string;
    common: string;
    strong: string;
    heavy: string;
  };
  duration: {
    onset: string;
    comeup: string;
    peak: string;
    offset: string;
    total: string;
    afterglow: string;
  };
  notes?: string;
}

export interface Interactions {
  dangerous: string[];
  unsafe: string[];
  uncertain: string[];
  crossTolerances: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  substances: string[];
}

export interface Substance {
  id: string;
  name: string;
  commonNames: string[];
  categories: SubstanceCategory[];
  defaultUnit?: string;
  class: string;
  description: string;
  dosage?: {};
  effects: {
    positive: string[];
    neutral: string[];
    negative: string[];
  };
  routeData?: Record<string, RouteDosageDuration>;
  interactions: Interactions;
  harmReduction: string[];
  legality: string;
  chemistry: {
    formula: string;
    molecularWeight: string;
    class: string;
  };
  history: string;
  routes?: string[];
  afterEffects: string;
  riskLevel: 'low' | 'moderate' | 'high' | 'very-high';
  aliases: string[];
  psychonautWikiUrl: string;
}
