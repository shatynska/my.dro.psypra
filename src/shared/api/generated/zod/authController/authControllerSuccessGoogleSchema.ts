import { z } from 'zod';

export const authControllerSuccessGoogleQueryParamsSchema = z.object({
  token: z.string(),
});

export const authControllerSuccessGoogle200Schema = z.any();

export const authControllerSuccessGoogleQueryResponseSchema = z.any();
