import { z } from 'zod';

export const addWebsiteRequestBodySchema = z.object({
  contact: z.string().url(),
});
