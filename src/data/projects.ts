export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'slowapi',
    description:
      'A lightweight WSGI-based Python web framework inspired by FastAPI. Built to understand what really happens between a request coming in and a response going out.',
    tags: ['Python', 'WSGI', 'Web'],
    repo: 'https://github.com/AhmedKhairy22/slowapi',
    featured: true,
  },
  {
    title: 'badshell',
    description:
      "A proudly bad implementation of a shell's most basic features in C. Written to learn how a shell actually runs your commands.",
    tags: ['C', 'Systems', 'Linux'],
    repo: 'https://github.com/AhmedKhairy22/badshell',
    featured: true,
  },
  {
    title: 'Alien Invasion',
    description: 'A simple 2D arcade shooter built with Python and Pygame. Aliens descend, you shoot, chaos follows.',
    tags: ['Python', 'Pygame', 'Game'],
    repo: 'https://github.com/AhmedKhairy22/alien_invasion_game',
    featured: true,
  },
  {
    title: 'Netflix Clone',
    description: 'A simple Netflix clone built with React and Vite, using the TMDB API for movie data.',
    tags: ['React', 'JavaScript', 'TMDB API'],
    repo: 'https://github.com/AhmedKhairy22/Netflix_Clone',
    featured: true,
  },
];