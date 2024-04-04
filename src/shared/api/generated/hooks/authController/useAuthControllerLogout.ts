import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type { AuthControllerLogoutQueryResponse } from '../../models/authController/AuthControllerLogout';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerLogoutClient = typeof client<
  AuthControllerLogoutQueryResponse,
  never,
  never
>;
type AuthControllerLogout = {
  data: AuthControllerLogoutQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerLogoutQueryResponse;
  client: {
    parameters: Partial<Parameters<AuthControllerLogoutClient>[0]>;
    return: Awaited<ReturnType<AuthControllerLogoutClient>>;
  };
};
export const authControllerLogoutQueryKey = () =>
  [{ url: '/api/auth/logout' }] as const;
export type AuthControllerLogoutQueryKey = ReturnType<
  typeof authControllerLogoutQueryKey
>;
export function authControllerLogoutQueryOptions(
  options: AuthControllerLogout['client']['parameters'] = {},
) {
  const queryKey = authControllerLogoutQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerLogout['data'],
        AuthControllerLogout['error']
      >({
        method: 'get',
        url: `/api/auth/logout`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @summary Logout user
 * @link /api/auth/logout
 */
export function useAuthControllerLogout<
  TData = AuthControllerLogout['response'],
  TQueryData = AuthControllerLogout['response'],
  TQueryKey extends QueryKey = AuthControllerLogoutQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuthControllerLogout['response'],
        AuthControllerLogout['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AuthControllerLogout['client']['parameters'];
  } = {},
): UseQueryResult<TData, AuthControllerLogout['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerLogoutQueryKey();
  const query = useQuery({
    ...(authControllerLogoutQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, AuthControllerLogout['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const authControllerLogoutSuspenseQueryKey = () =>
  [{ url: '/api/auth/logout' }] as const;
export type AuthControllerLogoutSuspenseQueryKey = ReturnType<
  typeof authControllerLogoutSuspenseQueryKey
>;
export function authControllerLogoutSuspenseQueryOptions(
  options: AuthControllerLogout['client']['parameters'] = {},
) {
  const queryKey = authControllerLogoutSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerLogout['data'],
        AuthControllerLogout['error']
      >({
        method: 'get',
        url: `/api/auth/logout`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @summary Logout user
 * @link /api/auth/logout
 */
export function useAuthControllerLogoutSuspense<
  TData = AuthControllerLogout['response'],
  TQueryKey extends QueryKey = AuthControllerLogoutSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AuthControllerLogout['response'],
        AuthControllerLogout['error'],
        TData,
        TQueryKey
      >
    >;
    client?: AuthControllerLogout['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, AuthControllerLogout['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerLogoutSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(authControllerLogoutSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, AuthControllerLogout['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
