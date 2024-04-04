import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../../client';
import type {
  AuthControllerLogin400,
  AuthControllerLogin401,
  AuthControllerLoginMutationRequest,
  AuthControllerLoginMutationResponse,
} from '../../models/authController/AuthControllerLogin';

type AuthControllerLoginClient = typeof client<
  AuthControllerLoginMutationResponse,
  AuthControllerLogin400 | AuthControllerLogin401,
  AuthControllerLoginMutationRequest
>;
type AuthControllerLogin = {
  data: AuthControllerLoginMutationResponse;
  error: AuthControllerLogin400 | AuthControllerLogin401;
  request: AuthControllerLoginMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerLoginMutationResponse;
  client: {
    parameters: Partial<Parameters<AuthControllerLoginClient>[0]>;
    return: Awaited<ReturnType<AuthControllerLoginClient>>;
  };
};
/**
 * @summary Login user
 * @link /api/auth/login
 */
export function useAuthControllerLogin(
  options: {
    mutation?: UseMutationOptions<
      AuthControllerLogin['response'],
      AuthControllerLogin['error'],
      AuthControllerLogin['request']
    >;
    client?: AuthControllerLogin['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AuthControllerLogin['data'],
        AuthControllerLogin['error'],
        AuthControllerLogin['request']
      >({
        method: 'post',
        url: `/api/auth/login`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
