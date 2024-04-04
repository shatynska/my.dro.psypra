import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  UsersControllerFindOneQueryResponse,
  UsersControllerFindOnePathParams,
} from '../../models/usersController/UsersControllerFindOne';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type UsersControllerFindOneClient = typeof client<
  UsersControllerFindOneQueryResponse,
  never,
  never
>;
type UsersControllerFindOne = {
  data: UsersControllerFindOneQueryResponse;
  error: never;
  request: never;
  pathParams: UsersControllerFindOnePathParams;
  queryParams: never;
  headerParams: never;
  response: UsersControllerFindOneQueryResponse;
  client: {
    parameters: Partial<Parameters<UsersControllerFindOneClient>[0]>;
    return: Awaited<ReturnType<UsersControllerFindOneClient>>;
  };
};
export const usersControllerFindOneQueryKey = (
  identifier: UsersControllerFindOnePathParams['identifier'],
) =>
  [
    { url: '/api/users/:identifier', params: { identifier: identifier } },
  ] as const;
export type UsersControllerFindOneQueryKey = ReturnType<
  typeof usersControllerFindOneQueryKey
>;
export function usersControllerFindOneQueryOptions(
  identifier: UsersControllerFindOnePathParams['identifier'],
  options: UsersControllerFindOne['client']['parameters'] = {},
) {
  const queryKey = usersControllerFindOneQueryKey(identifier);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        UsersControllerFindOne['data'],
        UsersControllerFindOne['error']
      >({
        method: 'get',
        url: `/api/users/${identifier}`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/users/:identifier
 */
export function useUsersControllerFindOne<
  TData = UsersControllerFindOne['response'],
  TQueryData = UsersControllerFindOne['response'],
  TQueryKey extends QueryKey = UsersControllerFindOneQueryKey,
>(
  identifier: UsersControllerFindOnePathParams['identifier'],
  options: {
    query?: Partial<
      QueryObserverOptions<
        UsersControllerFindOne['response'],
        UsersControllerFindOne['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: UsersControllerFindOne['client']['parameters'];
  } = {},
): UseQueryResult<TData, UsersControllerFindOne['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? usersControllerFindOneQueryKey(identifier);
  const query = useQuery({
    ...(usersControllerFindOneQueryOptions(
      identifier,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, UsersControllerFindOne['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const usersControllerFindOneSuspenseQueryKey = (
  identifier: UsersControllerFindOnePathParams['identifier'],
) =>
  [
    { url: '/api/users/:identifier', params: { identifier: identifier } },
  ] as const;
export type UsersControllerFindOneSuspenseQueryKey = ReturnType<
  typeof usersControllerFindOneSuspenseQueryKey
>;
export function usersControllerFindOneSuspenseQueryOptions(
  identifier: UsersControllerFindOnePathParams['identifier'],
  options: UsersControllerFindOne['client']['parameters'] = {},
) {
  const queryKey = usersControllerFindOneSuspenseQueryKey(identifier);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        UsersControllerFindOne['data'],
        UsersControllerFindOne['error']
      >({
        method: 'get',
        url: `/api/users/${identifier}`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/users/:identifier
 */
export function useUsersControllerFindOneSuspense<
  TData = UsersControllerFindOne['response'],
  TQueryKey extends QueryKey = UsersControllerFindOneSuspenseQueryKey,
>(
  identifier: UsersControllerFindOnePathParams['identifier'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        UsersControllerFindOne['response'],
        UsersControllerFindOne['error'],
        TData,
        TQueryKey
      >
    >;
    client?: UsersControllerFindOne['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, UsersControllerFindOne['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    usersControllerFindOneSuspenseQueryKey(identifier);
  const query = useSuspenseQuery({
    ...(usersControllerFindOneSuspenseQueryOptions(
      identifier,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, UsersControllerFindOne['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
