import { z } from 'zod';

export const updateLastNameRequestBodySchema = z.object({
  lastName: z.string().min(2).max(40),
});
