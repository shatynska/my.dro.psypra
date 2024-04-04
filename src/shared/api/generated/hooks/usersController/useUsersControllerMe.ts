import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type { UsersControllerMeQueryResponse } from '../../models/usersController/UsersControllerMe';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type UsersControllerMeClient = typeof client<
  UsersControllerMeQueryResponse,
  never,
  never
>;
type UsersControllerMe = {
  data: UsersControllerMeQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: UsersControllerMeQueryResponse;
  client: {
    parameters: Partial<Parameters<UsersControllerMeClient>[0]>;
    return: Awaited<ReturnType<UsersControllerMeClient>>;
  };
};
export const usersControllerMeQueryKey = () => [{ url: '/api/users' }] as const;
export type UsersControllerMeQueryKey = ReturnType<
  typeof usersControllerMeQueryKey
>;
export function usersControllerMeQueryOptions(
  options: UsersControllerMe['client']['parameters'] = {},
) {
  const queryKey = usersControllerMeQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        UsersControllerMe['data'],
        UsersControllerMe['error']
      >({
        method: 'get',
        url: `/api/users`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/users
 */
export function useUsersControllerMe<
  TData = UsersControllerMe['response'],
  TQueryData = UsersControllerMe['response'],
  TQueryKey extends QueryKey = UsersControllerMeQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        UsersControllerMe['response'],
        UsersControllerMe['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: UsersControllerMe['client']['parameters'];
  } = {},
): UseQueryResult<TData, UsersControllerMe['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersControllerMeQueryKey();
  const query = useQuery({
    ...(usersControllerMeQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, UsersControllerMe['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const usersControllerMeSuspenseQueryKey = () =>
  [{ url: '/api/users' }] as const;
export type UsersControllerMeSuspenseQueryKey = ReturnType<
  typeof usersControllerMeSuspenseQueryKey
>;
export function usersControllerMeSuspenseQueryOptions(
  options: UsersControllerMe['client']['parameters'] = {},
) {
  const queryKey = usersControllerMeSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        UsersControllerMe['data'],
        UsersControllerMe['error']
      >({
        method: 'get',
        url: `/api/users`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/users
 */
export function useUsersControllerMeSuspense<
  TData = UsersControllerMe['response'],
  TQueryKey extends QueryKey = UsersControllerMeSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        UsersControllerMe['response'],
        UsersControllerMe['error'],
        TData,
        TQueryKey
      >
    >;
    client?: UsersControllerMe['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, UsersControllerMe['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? usersControllerMeSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(usersControllerMeSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, UsersControllerMe['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
