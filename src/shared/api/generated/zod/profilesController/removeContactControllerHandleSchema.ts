import { z } from 'zod';
import { removeContactRequestBodySchema } from '../removeContactRequestBodySchema';

export const removeContactControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const removeContactControllerHandle200Schema = z.any();

export const removeContactControllerHandle401Schema = z.any();

export const removeContactControllerHandle403Schema = z.any();

export const removeContactControllerHandleMutationRequestSchema = z.lazy(
  () => removeContactRequestBodySchema,
).schema;

export const removeContactControllerHandleMutationResponseSchema = z.any();
