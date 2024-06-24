import { z } from 'zod';

export const getIsPublicResponseSchema = z.object({ isPublic: z.boolean() });
