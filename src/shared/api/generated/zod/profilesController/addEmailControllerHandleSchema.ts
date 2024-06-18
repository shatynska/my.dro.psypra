import { z } from 'zod';
import { addEmailRequestBodySchema } from '../addEmailRequestBodySchema';

export const addEmailControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const addEmailControllerHandle201Schema = z.any();

export const addEmailControllerHandle401Schema = z.any();

export const addEmailControllerHandle403Schema = z.any();

export const addEmailControllerHandleMutationRequestSchema = z.lazy(
  () => addEmailRequestBodySchema,
).schema;

export const addEmailControllerHandleMutationResponseSchema = z.any();
