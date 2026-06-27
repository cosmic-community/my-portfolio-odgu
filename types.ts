// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image structure from Cosmic file metafields
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Skill object type
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    category?: string;
    proficiency?: string;
    icon?: CosmicImage;
  };
}

// Project object type
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title?: string;
    short_description?: string;
    description?: string;
    featured_image?: CosmicImage;
    screenshots?: CosmicImage[];
    tech_stack?: string[];
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

// Work experience object type
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company?: string;
    role?: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    current_job?: boolean;
    description?: string;
    company_logo?: CosmicImage;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}