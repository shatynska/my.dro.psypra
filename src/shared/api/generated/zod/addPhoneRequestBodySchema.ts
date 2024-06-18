import { z } from 'zod';

export const addPhoneRequestBodySchema = z.object({ contact: z.string() });
