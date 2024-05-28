import { z } from 'zod';

export const jwtPayloadDtoSchema = z.object({
  id: z.string(),
  userName: z.string(),
  email: z.string(),
  phone: z.string(),
  roles: z.array(z.object({})),
});
