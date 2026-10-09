import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ---------- المشاريع ----------
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['app', 'graduation']).default('app'),
    role: z.string(),
    date: z.coerce.date(),
    description: z.string().max(240),
    techStack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    demoVideo: z.string().url().optional(),        // رابط YouTube
    featuredImage: z.string().optional(),          // مثال: /images/my-app.png
    architectureImage: z.string().optional(),      // صورة مخطط المعمارية
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// ---------- أرشيف التعلم ----------
const learning = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/learning' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['course', 'lesson', 'daily-task']),
    summary: z.string().max(240),
    tags: z.array(z.string()).default([]),
    videoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, learning };
