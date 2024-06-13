import { z } from 'zod';
import { updateFirstNameRequestBodySchema } from '../updateFirstNameRequestBodySchema';

export const updateFirstNameControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const updateFirstNameControllerHandle200Schema = z.any();

export const updateFirstNameControllerHandle401Schema = z.any();

export const updateFirstNameControllerHandle403Schema = z.any();

export const updateFirstNameControllerHandleMutationRequestSchema = z.lazy(
  () => updateFirstNameRequestBodySchema,
).schema;

export const updateFirstNameControllerHandleMutationResponseSchema = z.any();
