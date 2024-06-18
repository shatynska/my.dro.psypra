import { z } from 'zod';

export const removeContactRequestBodySchema = z.object({ id: z.string() });
