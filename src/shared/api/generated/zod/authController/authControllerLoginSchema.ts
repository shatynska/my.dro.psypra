import { z } from 'zod';

import { loginDtoSchema } from '../loginDtoSchema';
import { loginResponseDtoSchema } from '../loginResponseDtoSchema';

export const authControllerLogin201Schema = z.lazy(
  () => loginResponseDtoSchema,
);

export const authControllerLogin400Schema = z.any();

export const authControllerLogin401Schema = z.any();

export const authControllerLoginMutationRequestSchema = z.lazy(
  () => loginDtoSchema,
);

export const authControllerLoginMutationResponseSchema = z.lazy(
  () => loginResponseDtoSchema,
);
