import { z } from 'zod';

export const loginResponseDtoSchema = z.object({
  accessToken: z.string(),
  user: z
    .object({
      userName: z.string().min(2).max(40),
      roles: z.array(z.enum(['ADMIN', 'USER'])),
    })
    .nullable(),
});
