import { z } from 'zod';
import { loginResponseDtoSchema } from '../loginResponseDtoSchema';
import { loginDtoSchema } from '../loginDtoSchema';

export const authControllerLogin201Schema = z.lazy(
  () => loginResponseDtoSchema,
).schema;

export const authControllerLogin400Schema = z.any();

export const authControllerLoginMutationRequestSchema = z.lazy(
  () => loginDtoSchema,
).schema;

export const authControllerLoginMutationResponseSchema = z.lazy(
  () => loginResponseDtoSchema,
).schema;
