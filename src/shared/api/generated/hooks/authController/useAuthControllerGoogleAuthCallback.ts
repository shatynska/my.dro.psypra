import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type { AuthControllerGoogleAuthCallbackQueryResponse } from '../../models/authController/AuthControllerGoogleAuthCallback';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerGoogleAuthCallbackClient = typeof client<
  AuthControllerGoogleAuthCallbackQueryResponse,
  never,
  never
>;
type AuthControllerGoogleAuthCallback = {
  data: AuthControllerGoogleAuthCallbackQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerGoogleAuthCallbackQueryResponse;
  client: {
    parameters: Partial<Parameters<AuthControllerGoogleAuthCallbackClient>[0]>;
    return: Awaited<ReturnType<AuthControllerGoogleAuthCallbackClient>>;
  };
};
export const authControllerGoogleAuthCallbackQueryKey = () =>
  [{ url: '/api/auth/google/callback' }] as const;
export type AuthControllerGoogleAuthCallbackQueryKey = ReturnType<
  typeof authControllerGoogleAuthCallbackQueryKey
>;
export function authControllerGoogleAuthCallbackQueryOptions(
  options: AuthControllerGoogleAuthCallback['client']['parameters'] = {},
) {
  const queryKey = authControllerGoogleAuthCallbackQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerGoogleAuthCallback['data'],
        AuthControllerGoogleAuthCallback['error']
      >({
        method: 'get',
        url: `/api/auth/google/callback`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/google/callback
 */
export function useAuthControllerGoogleAuthCallback<
  TData = AuthControllerGoogleAuthCallback['response'],
  TQueryData = AuthControllerGoogleAuthCallback['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthCallbackQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuthControllerGoogleAuthCallback['response'],
        AuthControllerGoogleAuthCallback['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AuthControllerGoogleAuthCallback['client']['parameters'];
  } = {},
): UseQueryResult<TData, AuthControllerGoogleAuthCallback['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerGoogleAuthCallbackQueryKey();
  const query = useQuery({
    ...(authControllerGoogleAuthCallbackQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, AuthControllerGoogleAuthCallback['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const authControllerGoogleAuthCallbackSuspenseQueryKey = () =>
  [{ url: '/api/auth/google/callback' }] as const;
export type AuthControllerGoogleAuthCallbackSuspenseQueryKey = ReturnType<
  typeof authControllerGoogleAuthCallbackSuspenseQueryKey
>;
export function authControllerGoogleAuthCallbackSuspenseQueryOptions(
  options: AuthControllerGoogleAuthCallback['client']['parameters'] = {},
) {
  const queryKey = authControllerGoogleAuthCallbackSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerGoogleAuthCallback['data'],
        AuthControllerGoogleAuthCallback['error']
      >({
        method: 'get',
        url: `/api/auth/google/callback`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/google/callback
 */
export function useAuthControllerGoogleAuthCallbackSuspense<
  TData = AuthControllerGoogleAuthCallback['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthCallbackSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AuthControllerGoogleAuthCallback['response'],
        AuthControllerGoogleAuthCallback['error'],
        TData,
        TQueryKey
      >
    >;
    client?: AuthControllerGoogleAuthCallback['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, AuthControllerGoogleAuthCallback['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    authControllerGoogleAuthCallbackSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(authControllerGoogleAuthCallbackSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<
    TData,
    AuthControllerGoogleAuthCallback['error']
  > & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
