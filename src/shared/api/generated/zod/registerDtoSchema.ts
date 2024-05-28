import { z } from 'zod';

export const registerDtoSchema = z.object({
  userName: z.string().min(4),
  password: z.string().min(6),
  passportRepeat: z.string().min(6),
});
