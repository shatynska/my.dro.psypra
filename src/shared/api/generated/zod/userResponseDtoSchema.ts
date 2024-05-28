import { z } from 'zod';

export const userResponseDtoSchema = z.object({
  id: z.string(),
  userName: z.string(),
  email: z.string().nullable().nullish(),
  phone: z.string().nullable().nullish(),
  roles: z.enum(['ADMIN', 'USER']),
});
