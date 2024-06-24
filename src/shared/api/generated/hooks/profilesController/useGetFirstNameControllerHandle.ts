import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  GetFirstNameControllerHandleQueryResponse,
  GetFirstNameControllerHandlePathParams,
  GetFirstNameControllerHandle401,
  GetFirstNameControllerHandle403,
} from '../../models/profilesController/GetFirstNameControllerHandle';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type GetFirstNameControllerHandleClient = typeof client<
  GetFirstNameControllerHandleQueryResponse,
  GetFirstNameControllerHandle401 | GetFirstNameControllerHandle403,
  never
>;
type GetFirstNameControllerHandle = {
  data: GetFirstNameControllerHandleQueryResponse;
  error: GetFirstNameControllerHandle401 | GetFirstNameControllerHandle403;
  request: never;
  pathParams: GetFirstNameControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: GetFirstNameControllerHandleQueryResponse;
  client: {
    parameters: Partial<Parameters<GetFirstNameControllerHandleClient>[0]>;
    return: Awaited<ReturnType<GetFirstNameControllerHandleClient>>;
  };
};
export const getFirstNameControllerHandleQueryKey = (
  specialist: GetFirstNameControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/core/first-name',
      params: { specialist: specialist },
    },
  ] as const;
export type GetFirstNameControllerHandleQueryKey = ReturnType<
  typeof getFirstNameControllerHandleQueryKey
>;
export function getFirstNameControllerHandleQueryOptions(
  specialist: GetFirstNameControllerHandlePathParams['specialist'],
  options: GetFirstNameControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getFirstNameControllerHandleQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetFirstNameControllerHandle['data'],
        GetFirstNameControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/core/first-name`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/core/first-name
 */
export function useGetFirstNameControllerHandle<
  TData = GetFirstNameControllerHandle['response'],
  TQueryData = GetFirstNameControllerHandle['response'],
  TQueryKey extends QueryKey = GetFirstNameControllerHandleQueryKey,
>(
  specialist: GetFirstNameControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetFirstNameControllerHandle['response'],
        GetFirstNameControllerHandle['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetFirstNameControllerHandle['client']['parameters'];
  } = {},
): UseQueryResult<TData, GetFirstNameControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getFirstNameControllerHandleQueryKey(specialist);
  const query = useQuery({
    ...(getFirstNameControllerHandleQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, GetFirstNameControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getFirstNameControllerHandleSuspenseQueryKey = (
  specialist: GetFirstNameControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/core/first-name',
      params: { specialist: specialist },
    },
  ] as const;
export type GetFirstNameControllerHandleSuspenseQueryKey = ReturnType<
  typeof getFirstNameControllerHandleSuspenseQueryKey
>;
export function getFirstNameControllerHandleSuspenseQueryOptions(
  specialist: GetFirstNameControllerHandlePathParams['specialist'],
  options: GetFirstNameControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getFirstNameControllerHandleSuspenseQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetFirstNameControllerHandle['data'],
        GetFirstNameControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/core/first-name`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/core/first-name
 */
export function useGetFirstNameControllerHandleSuspense<
  TData = GetFirstNameControllerHandle['response'],
  TQueryKey extends QueryKey = GetFirstNameControllerHandleSuspenseQueryKey,
>(
  specialist: GetFirstNameControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetFirstNameControllerHandle['response'],
        GetFirstNameControllerHandle['error'],
        TData,
        TQueryKey
      >
    >;
    client?: GetFirstNameControllerHandle['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, GetFirstNameControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getFirstNameControllerHandleSuspenseQueryKey(specialist);
  const query = useSuspenseQuery({
    ...(getFirstNameControllerHandleSuspenseQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, GetFirstNameControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
