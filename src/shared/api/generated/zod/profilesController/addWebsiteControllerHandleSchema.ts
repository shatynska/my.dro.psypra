import { z } from 'zod';
import { addWebsiteRequestBodySchema } from '../addWebsiteRequestBodySchema';

export const addWebsiteControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const addWebsiteControllerHandle201Schema = z.any();

export const addWebsiteControllerHandle401Schema = z.any();

export const addWebsiteControllerHandle403Schema = z.any();

export const addWebsiteControllerHandleMutationRequestSchema = z.lazy(
  () => addWebsiteRequestBodySchema,
).schema;

export const addWebsiteControllerHandleMutationResponseSchema = z.any();
