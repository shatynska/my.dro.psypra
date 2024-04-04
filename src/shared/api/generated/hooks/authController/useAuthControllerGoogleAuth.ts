import type {
  QueryKey,
  QueryObserverOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';
import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import client from '../../../client';
import type { AuthControllerGoogleAuthQueryResponse } from '../../models/authController/AuthControllerGoogleAuth';

type AuthControllerGoogleAuthClient = typeof client<
  AuthControllerGoogleAuthQueryResponse,
  never,
  never
>;
type AuthControllerGoogleAuth = {
  data: AuthControllerGoogleAuthQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerGoogleAuthQueryResponse;
  client: {
    parameters: Partial<Parameters<AuthControllerGoogleAuthClient>[0]>;
    return: Awaited<ReturnType<AuthControllerGoogleAuthClient>>;
  };
};
export const authControllerGoogleAuthQueryKey = () =>
  [{ url: '/api/auth/google' }] as const;
export type AuthControllerGoogleAuthQueryKey = ReturnType<
  typeof authControllerGoogleAuthQueryKey
>;
export function authControllerGoogleAuthQueryOptions(
  options: AuthControllerGoogleAuth['client']['parameters'] = {},
) {
  const queryKey = authControllerGoogleAuthQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerGoogleAuth['data'],
        AuthControllerGoogleAuth['error']
      >({
        method: 'get',
        url: `/api/auth/google`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/google
 */
export function useAuthControllerGoogleAuth<
  TData = AuthControllerGoogleAuth['response'],
  TQueryData = AuthControllerGoogleAuth['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuthControllerGoogleAuth['response'],
        AuthControllerGoogleAuth['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AuthControllerGoogleAuth['client']['parameters'];
  } = {},
): UseQueryResult<TData, AuthControllerGoogleAuth['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerGoogleAuthQueryKey();
  const query = useQuery({
    ...(authControllerGoogleAuthQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, AuthControllerGoogleAuth['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const authControllerGoogleAuthSuspenseQueryKey = () =>
  [{ url: '/api/auth/google' }] as const;
export type AuthControllerGoogleAuthSuspenseQueryKey = ReturnType<
  typeof authControllerGoogleAuthSuspenseQueryKey
>;
export function authControllerGoogleAuthSuspenseQueryOptions(
  options: AuthControllerGoogleAuth['client']['parameters'] = {},
) {
  const queryKey = authControllerGoogleAuthSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerGoogleAuth['data'],
        AuthControllerGoogleAuth['error']
      >({
        method: 'get',
        url: `/api/auth/google`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/google
 */
export function useAuthControllerGoogleAuthSuspense<
  TData = AuthControllerGoogleAuth['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AuthControllerGoogleAuth['response'],
        AuthControllerGoogleAuth['error'],
        TData,
        TQueryKey
      >
    >;
    client?: AuthControllerGoogleAuth['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, AuthControllerGoogleAuth['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerGoogleAuthSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(authControllerGoogleAuthSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, AuthControllerGoogleAuth['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
