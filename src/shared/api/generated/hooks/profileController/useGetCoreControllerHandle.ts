import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  GetCoreControllerHandleQueryResponse,
  GetCoreControllerHandlePathParams,
  GetCoreControllerHandle401,
  GetCoreControllerHandle403,
} from '../../models/profileController/GetCoreControllerHandle';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type GetCoreControllerHandleClient = typeof client<
  GetCoreControllerHandleQueryResponse,
  GetCoreControllerHandle401 | GetCoreControllerHandle403,
  never
>;
type GetCoreControllerHandle = {
  data: GetCoreControllerHandleQueryResponse;
  error: GetCoreControllerHandle401 | GetCoreControllerHandle403;
  request: never;
  pathParams: GetCoreControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: GetCoreControllerHandleQueryResponse;
  client: {
    parameters: Partial<Parameters<GetCoreControllerHandleClient>[0]>;
    return: Awaited<ReturnType<GetCoreControllerHandleClient>>;
  };
};
export const getCoreControllerHandleQueryKey = (
  specialist: GetCoreControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profile/:specialist/core',
      params: { specialist: specialist },
    },
  ] as const;
export type GetCoreControllerHandleQueryKey = ReturnType<
  typeof getCoreControllerHandleQueryKey
>;
export function getCoreControllerHandleQueryOptions(
  specialist: GetCoreControllerHandlePathParams['specialist'],
  options: GetCoreControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getCoreControllerHandleQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetCoreControllerHandle['data'],
        GetCoreControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profile/${specialist}/core`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profile/:specialist/core
 */
export function useGetCoreControllerHandle<
  TData = GetCoreControllerHandle['response'],
  TQueryData = GetCoreControllerHandle['response'],
  TQueryKey extends QueryKey = GetCoreControllerHandleQueryKey,
>(
  specialist: GetCoreControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetCoreControllerHandle['response'],
        GetCoreControllerHandle['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetCoreControllerHandle['client']['parameters'];
  } = {},
): UseQueryResult<TData, GetCoreControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCoreControllerHandleQueryKey(specialist);
  const query = useQuery({
    ...(getCoreControllerHandleQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, GetCoreControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getCoreControllerHandleSuspenseQueryKey = (
  specialist: GetCoreControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profile/:specialist/core',
      params: { specialist: specialist },
    },
  ] as const;
export type GetCoreControllerHandleSuspenseQueryKey = ReturnType<
  typeof getCoreControllerHandleSuspenseQueryKey
>;
export function getCoreControllerHandleSuspenseQueryOptions(
  specialist: GetCoreControllerHandlePathParams['specialist'],
  options: GetCoreControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getCoreControllerHandleSuspenseQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetCoreControllerHandle['data'],
        GetCoreControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profile/${specialist}/core`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profile/:specialist/core
 */
export function useGetCoreControllerHandleSuspense<
  TData = GetCoreControllerHandle['response'],
  TQueryKey extends QueryKey = GetCoreControllerHandleSuspenseQueryKey,
>(
  specialist: GetCoreControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetCoreControllerHandle['response'],
        GetCoreControllerHandle['error'],
        TData,
        TQueryKey
      >
    >;
    client?: GetCoreControllerHandle['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, GetCoreControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getCoreControllerHandleSuspenseQueryKey(specialist);
  const query = useSuspenseQuery({
    ...(getCoreControllerHandleSuspenseQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, GetCoreControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
