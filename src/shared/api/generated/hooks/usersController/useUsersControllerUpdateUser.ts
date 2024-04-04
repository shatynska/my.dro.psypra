import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type { UsersControllerUpdateUserMutationResponse } from '../../models/usersController/UsersControllerUpdateUser';
import type { UseMutationOptions } from '@tanstack/react-query';

type UsersControllerUpdateUserClient = typeof client<
  UsersControllerUpdateUserMutationResponse,
  never,
  never
>;
type UsersControllerUpdateUser = {
  data: UsersControllerUpdateUserMutationResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: UsersControllerUpdateUserMutationResponse;
  client: {
    parameters: Partial<Parameters<UsersControllerUpdateUserClient>[0]>;
    return: Awaited<ReturnType<UsersControllerUpdateUserClient>>;
  };
};
/**
 * @link /api/users
 */
export function useUsersControllerUpdateUser(
  options: {
    mutation?: UseMutationOptions<
      UsersControllerUpdateUser['response'],
      UsersControllerUpdateUser['error'],
      UsersControllerUpdateUser['request']
    >;
    client?: UsersControllerUpdateUser['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        UsersControllerUpdateUser['data'],
        UsersControllerUpdateUser['error'],
        UsersControllerUpdateUser['request']
      >({
        method: 'put',
        url: `/api/users`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
