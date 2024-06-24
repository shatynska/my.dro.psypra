import { z } from 'zod';
import { getIsPublicResponseSchema } from '../getIsPublicResponseSchema';

export const getIsPublicControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const getIsPublicControllerHandle200Schema = z.lazy(
  () => getIsPublicResponseSchema,
).schema;

export const getIsPublicControllerHandle401Schema = z.any();

export const getIsPublicControllerHandle403Schema = z.any();

export const getIsPublicControllerHandleQueryResponseSchema = z.lazy(
  () => getIsPublicResponseSchema,
).schema;
