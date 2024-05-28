import { z } from 'zod';

export const updateFirstNameRequestBodySchema = z.object({
  firstName: z.string().min(2).max(40),
});
