import { z, defineCollection } from "astro:content";
const faqCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isactive: z.boolean().optional(),
  }),
});

export const collections = {
  faq: faqCollection,
};
