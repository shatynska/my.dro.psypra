import { z } from 'zod';

export const getFirstNameResponseSchema = z.object({
  firstName: z.string().min(2).max(40),
});
