import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type { AuthControllerRefreshTokensQueryResponse } from '../../models/authController/AuthControllerRefreshTokens';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerRefreshTokensClient = typeof client<
  AuthControllerRefreshTokensQueryResponse,
  never,
  never
>;
type AuthControllerRefreshTokens = {
  data: AuthControllerRefreshTokensQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerRefreshTokensQueryResponse;
  client: {
    parameters: Partial<Parameters<AuthControllerRefreshTokensClient>[0]>;
    return: Awaited<ReturnType<AuthControllerRefreshTokensClient>>;
  };
};
export const authControllerRefreshTokensQueryKey = () =>
  [{ url: '/api/auth/refresh-tokens' }] as const;
export type AuthControllerRefreshTokensQueryKey = ReturnType<
  typeof authControllerRefreshTokensQueryKey
>;
export function authControllerRefreshTokensQueryOptions(
  options: AuthControllerRefreshTokens['client']['parameters'] = {},
) {
  const queryKey = authControllerRefreshTokensQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerRefreshTokens['data'],
        AuthControllerRefreshTokens['error']
      >({
        method: 'get',
        url: `/api/auth/refresh-tokens`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/refresh-tokens
 */
export function useAuthControllerRefreshTokens<
  TData = AuthControllerRefreshTokens['response'],
  TQueryData = AuthControllerRefreshTokens['response'],
  TQueryKey extends QueryKey = AuthControllerRefreshTokensQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuthControllerRefreshTokens['response'],
        AuthControllerRefreshTokens['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AuthControllerRefreshTokens['client']['parameters'];
  } = {},
): UseQueryResult<TData, AuthControllerRefreshTokens['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerRefreshTokensQueryKey();
  const query = useQuery({
    ...(authControllerRefreshTokensQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, AuthControllerRefreshTokens['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const authControllerRefreshTokensSuspenseQueryKey = () =>
  [{ url: '/api/auth/refresh-tokens' }] as const;
export type AuthControllerRefreshTokensSuspenseQueryKey = ReturnType<
  typeof authControllerRefreshTokensSuspenseQueryKey
>;
export function authControllerRefreshTokensSuspenseQueryOptions(
  options: AuthControllerRefreshTokens['client']['parameters'] = {},
) {
  const queryKey = authControllerRefreshTokensSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerRefreshTokens['data'],
        AuthControllerRefreshTokens['error']
      >({
        method: 'get',
        url: `/api/auth/refresh-tokens`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/refresh-tokens
 */
export function useAuthControllerRefreshTokensSuspense<
  TData = AuthControllerRefreshTokens['response'],
  TQueryKey extends QueryKey = AuthControllerRefreshTokensSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AuthControllerRefreshTokens['response'],
        AuthControllerRefreshTokens['error'],
        TData,
        TQueryKey
      >
    >;
    client?: AuthControllerRefreshTokens['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, AuthControllerRefreshTokens['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerRefreshTokensSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(authControllerRefreshTokensSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, AuthControllerRefreshTokens['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
