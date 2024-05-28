import { z } from 'zod';

export const getCoreResponseSchema = z.object({
  firstName: z.string().min(2).max(40),
  lastName: z.string().min(2).max(40),
  isPublic: z.boolean(),
});
