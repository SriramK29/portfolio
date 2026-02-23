
import { Project, Skill, Education } from './types';

export const SKILLS: Skill[] = [
  { name: 'Java', level: 90, category: 'technical' },
  { name: 'Python', level: 85, category: 'technical' },
  { name: 'JavaScript', level: 80, category: 'technical' },
  { name: 'HTML/CSS', level: 95, category: 'technical' },
  { name: 'React', level: 75, category: 'technical' },
  { name: 'C Language', level: 80, category: 'technical' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Adaptability', level: 85, category: 'soft' },
  { name: 'Time Management', level: 88, category: 'soft' },
  { name: 'Motivation', level: 95, category: 'soft' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Retinal–Brain Health Cross Mapping',
    category: 'Machine Learning / Python',
    description: 'A revolutionary health analysis system that connects retinal images with brain health indicators using advanced image processing and feature extraction.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Library Management System',
    category: 'Software Development / Java',
    description: 'Comprehensive system for managing books, members, issues, and returns. Features automated workflows and structured data handling for educational institutions.',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Interactive Quiz Platform',
    category: 'Web Development',
    description: 'Modern, responsive MCQ quiz system with real-time score calculation, results display, and sleek UI/UX design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800',
  },
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: 'B.E Computer Science and Engineering',
    school: 'M. Kumarasamy College of Engineering, Karur',
    duration: '2023 – 2027',
    grade: 'CGPA: 7.5',
    details: 'Currently pursuing degree with a focus on core engineering principles and advanced software architectures.',
  },
];

export const CERTIFICATIONS = [
  'Industrial Internet of Things 4.0 – NPTEL',
  'Responsible & Safe AI – NPTEL'
];
