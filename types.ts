
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  category: 'Infrastructure' | 'Cloud' | 'Security' | 'Connectivity' | 'Communication';
  longDescription: string;
}

export interface BusinessNeed {
  companySize: string;
  industry: string;
  primaryConcern: string;
}

export interface AIRecommendation {
  recommendedServices: string[];
  rationale: string;
  suggestedRoadmap: string[];
}
