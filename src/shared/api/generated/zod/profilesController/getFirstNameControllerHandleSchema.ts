import { z } from 'zod';
import { getFirstNameResponseSchema } from '../getFirstNameResponseSchema';

export const getFirstNameControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const getFirstNameControllerHandle200Schema = z.lazy(
  () => getFirstNameResponseSchema,
).schema;

export const getFirstNameControllerHandle401Schema = z.any();

export const getFirstNameControllerHandle403Schema = z.any();

export const getFirstNameControllerHandleQueryResponseSchema = z.lazy(
  () => getFirstNameResponseSchema,
).schema;
