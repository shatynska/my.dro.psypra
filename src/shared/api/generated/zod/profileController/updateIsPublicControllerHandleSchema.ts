import { z } from 'zod';
import { updateIsPublicRequestBodySchema } from '../updateIsPublicRequestBodySchema';

export const updateIsPublicControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const updateIsPublicControllerHandle200Schema = z.any();

export const updateIsPublicControllerHandle401Schema = z.any();

export const updateIsPublicControllerHandle403Schema = z.any();

export const updateIsPublicControllerHandleMutationRequestSchema = z.lazy(
  () => updateIsPublicRequestBodySchema,
).schema;

export const updateIsPublicControllerHandleMutationResponseSchema = z.any();
