import { z } from 'zod';
import { updateLastNameRequestBodySchema } from '../updateLastNameRequestBodySchema';

export const updateLastNameControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const updateLastNameControllerHandle200Schema = z.any();

export const updateLastNameControllerHandle401Schema = z.any();

export const updateLastNameControllerHandle403Schema = z.any();

export const updateLastNameControllerHandleMutationRequestSchema = z.lazy(
  () => updateLastNameRequestBodySchema,
).schema;

export const updateLastNameControllerHandleMutationResponseSchema = z.any();
