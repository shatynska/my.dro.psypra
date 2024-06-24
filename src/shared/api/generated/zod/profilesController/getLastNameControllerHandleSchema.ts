import { z } from 'zod';
import { getLastNameResponseSchema } from '../getLastNameResponseSchema';

export const getLastNameControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const getLastNameControllerHandle200Schema = z.lazy(
  () => getLastNameResponseSchema,
).schema;

export const getLastNameControllerHandle401Schema = z.any();

export const getLastNameControllerHandle403Schema = z.any();

export const getLastNameControllerHandleQueryResponseSchema = z.lazy(
  () => getLastNameResponseSchema,
).schema;
