import { z } from 'zod';

import { registerDtoSchema } from '../registerDtoSchema';
import { userResponseDtoSchema } from '../userResponseDtoSchema';

export const authControllerRegister201Schema = z.lazy(
  () => userResponseDtoSchema,
);

export const authControllerRegister400Schema = z.any();

export const authControllerRegister409Schema = z.any();

export const authControllerRegisterMutationRequestSchema = z.lazy(
  () => registerDtoSchema,
);

export const authControllerRegisterMutationResponseSchema = z.lazy(
  () => userResponseDtoSchema,
);
