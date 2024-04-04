import { z } from 'zod';
import { userResponseDtoSchema } from '../userResponseDtoSchema';

export const usersControllerFindOnePathParamsSchema = z.object({
  identifier: z.string(),
});

export const usersControllerFindOne200Schema = z.lazy(
  () => userResponseDtoSchema,
);

export const usersControllerFindOneQueryResponseSchema = z.lazy(
  () => userResponseDtoSchema,
);
