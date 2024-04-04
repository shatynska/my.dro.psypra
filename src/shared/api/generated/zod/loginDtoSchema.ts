import { z } from 'zod';

export const loginDtoSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
