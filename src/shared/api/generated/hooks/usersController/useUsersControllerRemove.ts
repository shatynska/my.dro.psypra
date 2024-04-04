import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  UsersControllerRemoveMutationResponse,
  UsersControllerRemovePathParams,
} from '../../models/usersController/UsersControllerRemove';
import type { UseMutationOptions } from '@tanstack/react-query';

type UsersControllerRemoveClient = typeof client<
  UsersControllerRemoveMutationResponse,
  never,
  never
>;
type UsersControllerRemove = {
  data: UsersControllerRemoveMutationResponse;
  error: never;
  request: never;
  pathParams: UsersControllerRemovePathParams;
  queryParams: never;
  headerParams: never;
  response: UsersControllerRemoveMutationResponse;
  client: {
    parameters: Partial<Parameters<UsersControllerRemoveClient>[0]>;
    return: Awaited<ReturnType<UsersControllerRemoveClient>>;
  };
};
/**
 * @link /api/users/:id
 */
export function useUsersControllerRemove(
  id: UsersControllerRemovePathParams['id'],
  options: {
    mutation?: UseMutationOptions<
      UsersControllerRemove['response'],
      UsersControllerRemove['error'],
      UsersControllerRemove['request']
    >;
    client?: UsersControllerRemove['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        UsersControllerRemove['data'],
        UsersControllerRemove['error'],
        UsersControllerRemove['request']
      >({
        method: 'delete',
        url: `/api/users/${id}`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
