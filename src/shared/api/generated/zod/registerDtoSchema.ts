import { z } from 'zod';

export const registerDtoSchema = z.object({
  userName: z.string(),
  password: z.string(),
  passportRepeat: z.string(),
});
