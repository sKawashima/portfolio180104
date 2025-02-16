import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    genres: z.array(z.object({
      name: z.string(),
      type: z.enum(['web', 'proposal', 'movie', 'music', 'art', 'graphic'])
    })),
    activity: z.string(),
    memberCount: z.string(),
    role: z.string(),
    period: z.string(),
    date: z.string(),
    sortDate: z.string().transform(str => new Date(str).getTime()),
    technologies: z.string(),
    thumbnail: z.string().optional(),
    youtubeId: z.string().optional(),
    link: z.string().optional(),
  })
});

export const collections = {
  works
};
