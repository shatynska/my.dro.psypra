import { z } from 'zod';
import { getCoreResponseSchema } from '../getCoreResponseSchema';

export const getCoreControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const getCoreControllerHandle200Schema = z.lazy(
  () => getCoreResponseSchema,
).schema;

export const getCoreControllerHandle401Schema = z.any();

export const getCoreControllerHandle403Schema = z.any();

export const getCoreControllerHandleQueryResponseSchema = z.lazy(
  () => getCoreResponseSchema,
).schema;
