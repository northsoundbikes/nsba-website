// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const events = defineCollection({
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    active: z.boolean(),
    startDate: z.date(),
    endDate: z.date().optional(),
    pointOfContact: z.string().optional(),
  }),
});

export const collections = {
  events
};