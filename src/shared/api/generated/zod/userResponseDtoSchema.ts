import { z } from 'zod';

export const userResponseDtoSchema = z.object({
  id: z.string(),
  userName: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  roles: z.enum(['ADMIN', 'USER']),
});
