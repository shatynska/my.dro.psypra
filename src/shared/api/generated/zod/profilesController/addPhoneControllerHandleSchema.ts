import { z } from 'zod';
import { addPhoneRequestBodySchema } from '../addPhoneRequestBodySchema';

export const addPhoneControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const addPhoneControllerHandle201Schema = z.any();

export const addPhoneControllerHandle401Schema = z.any();

export const addPhoneControllerHandle403Schema = z.any();

export const addPhoneControllerHandleMutationRequestSchema = z.lazy(
  () => addPhoneRequestBodySchema,
).schema;

export const addPhoneControllerHandleMutationResponseSchema = z.any();
