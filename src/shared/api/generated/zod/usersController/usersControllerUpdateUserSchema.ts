import { z } from 'zod';
import { userResponseDtoSchema } from '../userResponseDtoSchema';

export const usersControllerUpdateUser200Schema = z.lazy(
  () => userResponseDtoSchema,
).schema;

export const usersControllerUpdateUserMutationResponseSchema = z.lazy(
  () => userResponseDtoSchema,
).schema;
