import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  GetLastNameControllerHandleQueryResponse,
  GetLastNameControllerHandlePathParams,
  GetLastNameControllerHandle401,
  GetLastNameControllerHandle403,
} from '../../models/profilesController/GetLastNameControllerHandle';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type GetLastNameControllerHandleClient = typeof client<
  GetLastNameControllerHandleQueryResponse,
  GetLastNameControllerHandle401 | GetLastNameControllerHandle403,
  never
>;
type GetLastNameControllerHandle = {
  data: GetLastNameControllerHandleQueryResponse;
  error: GetLastNameControllerHandle401 | GetLastNameControllerHandle403;
  request: never;
  pathParams: GetLastNameControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: GetLastNameControllerHandleQueryResponse;
  client: {
    parameters: Partial<Parameters<GetLastNameControllerHandleClient>[0]>;
    return: Awaited<ReturnType<GetLastNameControllerHandleClient>>;
  };
};
export const getLastNameControllerHandleQueryKey = (
  specialist: GetLastNameControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/core/last-name',
      params: { specialist: specialist },
    },
  ] as const;
export type GetLastNameControllerHandleQueryKey = ReturnType<
  typeof getLastNameControllerHandleQueryKey
>;
export function getLastNameControllerHandleQueryOptions(
  specialist: GetLastNameControllerHandlePathParams['specialist'],
  options: GetLastNameControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getLastNameControllerHandleQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetLastNameControllerHandle['data'],
        GetLastNameControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/core/last-name`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/core/last-name
 */
export function useGetLastNameControllerHandle<
  TData = GetLastNameControllerHandle['response'],
  TQueryData = GetLastNameControllerHandle['response'],
  TQueryKey extends QueryKey = GetLastNameControllerHandleQueryKey,
>(
  specialist: GetLastNameControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetLastNameControllerHandle['response'],
        GetLastNameControllerHandle['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetLastNameControllerHandle['client']['parameters'];
  } = {},
): UseQueryResult<TData, GetLastNameControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getLastNameControllerHandleQueryKey(specialist);
  const query = useQuery({
    ...(getLastNameControllerHandleQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, GetLastNameControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getLastNameControllerHandleSuspenseQueryKey = (
  specialist: GetLastNameControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/core/last-name',
      params: { specialist: specialist },
    },
  ] as const;
export type GetLastNameControllerHandleSuspenseQueryKey = ReturnType<
  typeof getLastNameControllerHandleSuspenseQueryKey
>;
export function getLastNameControllerHandleSuspenseQueryOptions(
  specialist: GetLastNameControllerHandlePathParams['specialist'],
  options: GetLastNameControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getLastNameControllerHandleSuspenseQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetLastNameControllerHandle['data'],
        GetLastNameControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/core/last-name`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/core/last-name
 */
export function useGetLastNameControllerHandleSuspense<
  TData = GetLastNameControllerHandle['response'],
  TQueryKey extends QueryKey = GetLastNameControllerHandleSuspenseQueryKey,
>(
  specialist: GetLastNameControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetLastNameControllerHandle['response'],
        GetLastNameControllerHandle['error'],
        TData,
        TQueryKey
      >
    >;
    client?: GetLastNameControllerHandle['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, GetLastNameControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getLastNameControllerHandleSuspenseQueryKey(specialist);
  const query = useSuspenseQuery({
    ...(getLastNameControllerHandleSuspenseQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, GetLastNameControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
