// كل بياناتك الشخصية في مكان واحد — عدّلها فقط
export const site = {
  name: 'Ahmed Hassan',
  role: 'Software Engineer, Computer Science graduate',
  tagline: 'I build reliable software and keep a public record of what I learn.',
  bio: 'Computer science graduate focused on mobile and backend development. This site holds my projects, graduation work, and a daily archive of courses, lessons, and tasks.',
  email: 'you@example.com',
  location: 'Egypt',
  // اذهب إلى formspree.io، أنشئ نموذجاً، وضع الـ ID هنا (اختياري)
  formspreeId: '',
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-username' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-username' },
    { label: 'Email', url: 'mailto:you@example.com' },
  ],
  skills: [
    { group: 'Languages', items: ['TypeScript', 'Python', 'Dart', 'Java', 'SQL'] },
    { group: 'Frameworks', items: ['Flutter', 'React', 'Node.js', 'FastAPI'] },
    { group: 'Tools', items: ['Git', 'Docker', 'Firebase', 'PostgreSQL', 'Linux'] },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Learning', href: '/learning' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const categoryLabels: Record<string, string> = {
  course: 'Course',
  lesson: 'Lesson',
  'daily-task': 'Daily task',
};
