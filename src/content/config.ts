// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const projectCollection = defineCollection({
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    role: z.string(),
    color: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'project': projectCollection,
};
