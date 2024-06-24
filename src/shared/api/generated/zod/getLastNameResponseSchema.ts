import { z } from 'zod';

export const getLastNameResponseSchema = z.object({
  lastName: z.string().min(2).max(40),
});
