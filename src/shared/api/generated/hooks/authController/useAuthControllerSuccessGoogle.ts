import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  AuthControllerSuccessGoogleQueryResponse,
  AuthControllerSuccessGoogleQueryParams,
} from '../../models/authController/AuthControllerSuccessGoogle';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerSuccessGoogleClient = typeof client<
  AuthControllerSuccessGoogleQueryResponse,
  never,
  never
>;
type AuthControllerSuccessGoogle = {
  data: AuthControllerSuccessGoogleQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: AuthControllerSuccessGoogleQueryParams;
  headerParams: never;
  response: AuthControllerSuccessGoogleQueryResponse;
  client: {
    parameters: Partial<Parameters<AuthControllerSuccessGoogleClient>[0]>;
    return: Awaited<ReturnType<AuthControllerSuccessGoogleClient>>;
  };
};
export const authControllerSuccessGoogleQueryKey = (
  params: AuthControllerSuccessGoogle['queryParams'],
) =>
  [{ url: '/api/auth/success-google' }, ...(params ? [params] : [])] as const;
export type AuthControllerSuccessGoogleQueryKey = ReturnType<
  typeof authControllerSuccessGoogleQueryKey
>;
export function authControllerSuccessGoogleQueryOptions(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: AuthControllerSuccessGoogle['client']['parameters'] = {},
) {
  const queryKey = authControllerSuccessGoogleQueryKey(params);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerSuccessGoogle['data'],
        AuthControllerSuccessGoogle['error']
      >({
        method: 'get',
        url: `/api/auth/success-google`,
        params,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/success-google
 */
export function useAuthControllerSuccessGoogle<
  TData = AuthControllerSuccessGoogle['response'],
  TQueryData = AuthControllerSuccessGoogle['response'],
  TQueryKey extends QueryKey = AuthControllerSuccessGoogleQueryKey,
>(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuthControllerSuccessGoogle['response'],
        AuthControllerSuccessGoogle['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AuthControllerSuccessGoogle['client']['parameters'];
  } = {},
): UseQueryResult<TData, AuthControllerSuccessGoogle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerSuccessGoogleQueryKey(params);
  const query = useQuery({
    ...(authControllerSuccessGoogleQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, AuthControllerSuccessGoogle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const authControllerSuccessGoogleSuspenseQueryKey = (
  params: AuthControllerSuccessGoogle['queryParams'],
) =>
  [{ url: '/api/auth/success-google' }, ...(params ? [params] : [])] as const;
export type AuthControllerSuccessGoogleSuspenseQueryKey = ReturnType<
  typeof authControllerSuccessGoogleSuspenseQueryKey
>;
export function authControllerSuccessGoogleSuspenseQueryOptions(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: AuthControllerSuccessGoogle['client']['parameters'] = {},
) {
  const queryKey = authControllerSuccessGoogleSuspenseQueryKey(params);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AuthControllerSuccessGoogle['data'],
        AuthControllerSuccessGoogle['error']
      >({
        method: 'get',
        url: `/api/auth/success-google`,
        params,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/auth/success-google
 */
export function useAuthControllerSuccessGoogleSuspense<
  TData = AuthControllerSuccessGoogle['response'],
  TQueryKey extends QueryKey = AuthControllerSuccessGoogleSuspenseQueryKey,
>(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AuthControllerSuccessGoogle['response'],
        AuthControllerSuccessGoogle['error'],
        TData,
        TQueryKey
      >
    >;
    client?: AuthControllerSuccessGoogle['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, AuthControllerSuccessGoogle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    authControllerSuccessGoogleSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(authControllerSuccessGoogleSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, AuthControllerSuccessGoogle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
