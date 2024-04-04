import { z } from 'zod';

export const usersControllerRemovePathParamsSchema = z.object({
  id: z.string(),
});

export const usersControllerRemove200Schema = z.any();

export const usersControllerRemoveMutationResponseSchema = z.any();
