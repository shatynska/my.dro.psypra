import { z } from 'zod';

export const getContactsResponseSchema = z.object({
  phones: z.array(z.object({ id: z.string().uuid(), value: z.string() })),
  emails: z.array(
    z.object({ id: z.string().uuid(), value: z.string().email() }),
  ),
  websites: z.array(
    z.object({ id: z.string().uuid(), value: z.string().url() }),
  ),
});
