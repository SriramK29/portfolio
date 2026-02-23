
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  grade: string;
  details: string;
}
