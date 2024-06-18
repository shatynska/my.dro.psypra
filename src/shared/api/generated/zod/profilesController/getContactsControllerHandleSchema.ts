import { z } from 'zod';
import { getContactsResponseSchema } from '../getContactsResponseSchema';

export const getContactsControllerHandlePathParamsSchema = z.object({
  specialist: z.string(),
});

export const getContactsControllerHandle200Schema = z.lazy(
  () => getContactsResponseSchema,
).schema;

export const getContactsControllerHandle401Schema = z.any();

export const getContactsControllerHandle403Schema = z.any();

export const getContactsControllerHandleQueryResponseSchema = z.lazy(
  () => getContactsResponseSchema,
).schema;
