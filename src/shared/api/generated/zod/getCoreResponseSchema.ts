import { z } from 'zod';

export const getCoreResponseSchema = z.object({
  isPublic: z.boolean(),
  firstName: z.string().min(2).max(40),
  lastName: z.string().min(2).max(40),
});
