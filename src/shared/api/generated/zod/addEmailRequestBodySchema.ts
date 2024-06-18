import { z } from 'zod';

export const addEmailRequestBodySchema = z.object({
  contact: z.string().email(),
});
