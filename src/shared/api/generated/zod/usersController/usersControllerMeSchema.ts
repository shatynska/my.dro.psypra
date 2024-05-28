import { z } from 'zod';
import { jwtPayloadDtoSchema } from '../jwtPayloadDtoSchema';

export const usersControllerMe200Schema = z.lazy(
  () => jwtPayloadDtoSchema,
).schema;

export const usersControllerMeQueryResponseSchema = z.lazy(
  () => jwtPayloadDtoSchema,
).schema;
