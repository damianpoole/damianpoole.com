import type { Project } from '@/lib/types';

export const projectsData: Project[] = [
  {
    id: 'personal-website-v2',
    title: 'Personal Website (This Site)',
    description: 
      'A complete rebuild of my personal website and blog using Next.js 15, Tailwind CSS 4, and TypeScript. '
      + 'Focuses on a modern design, performance, and ease of content management for showcasing projects and thoughts.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX (for blog)', 'Vercel'],
    imageUrl: '/images/projects/site-redesign.png',
    sourceUrl: 'https://github.com/damianpoole/damianpoole.com',
    category: 'Web Development',
  },
  {
    id: 'lwc-2048',
    title: '2048 Game in Lightning Web Components',
    description: 
      'A 2048 game built in Lightning Web Components. '
      + 'The project involved a small team and was completed over three months.',
    technologies: ['Lightning Web Components', 'Salesforce', 'Apex', 'JavaScript'],
    imageUrl: '/images/projects/lwc-2048.png',
    liveUrl: 'https://super-cool-site-by-damianpoole.netlify.app/',
    sourceUrl: 'https://github.com/damianpoole/lwc-2048',
    category: 'Full-stack Development',
  },
];