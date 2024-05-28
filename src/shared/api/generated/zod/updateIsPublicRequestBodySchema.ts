import { z } from 'zod';

export const updateIsPublicRequestBodySchema = z.object({
  isPublic: z.boolean(),
});
