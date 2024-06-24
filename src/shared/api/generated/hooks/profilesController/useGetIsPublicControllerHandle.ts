import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  GetIsPublicControllerHandleQueryResponse,
  GetIsPublicControllerHandlePathParams,
  GetIsPublicControllerHandle401,
  GetIsPublicControllerHandle403,
} from '../../models/profilesController/GetIsPublicControllerHandle';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type GetIsPublicControllerHandleClient = typeof client<
  GetIsPublicControllerHandleQueryResponse,
  GetIsPublicControllerHandle401 | GetIsPublicControllerHandle403,
  never
>;
type GetIsPublicControllerHandle = {
  data: GetIsPublicControllerHandleQueryResponse;
  error: GetIsPublicControllerHandle401 | GetIsPublicControllerHandle403;
  request: never;
  pathParams: GetIsPublicControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: GetIsPublicControllerHandleQueryResponse;
  client: {
    parameters: Partial<Parameters<GetIsPublicControllerHandleClient>[0]>;
    return: Awaited<ReturnType<GetIsPublicControllerHandleClient>>;
  };
};
export const getIsPublicControllerHandleQueryKey = (
  specialist: GetIsPublicControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/core/is-public',
      params: { specialist: specialist },
    },
  ] as const;
export type GetIsPublicControllerHandleQueryKey = ReturnType<
  typeof getIsPublicControllerHandleQueryKey
>;
export function getIsPublicControllerHandleQueryOptions(
  specialist: GetIsPublicControllerHandlePathParams['specialist'],
  options: GetIsPublicControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getIsPublicControllerHandleQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetIsPublicControllerHandle['data'],
        GetIsPublicControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/core/is-public`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/core/is-public
 */
export function useGetIsPublicControllerHandle<
  TData = GetIsPublicControllerHandle['response'],
  TQueryData = GetIsPublicControllerHandle['response'],
  TQueryKey extends QueryKey = GetIsPublicControllerHandleQueryKey,
>(
  specialist: GetIsPublicControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetIsPublicControllerHandle['response'],
        GetIsPublicControllerHandle['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetIsPublicControllerHandle['client']['parameters'];
  } = {},
): UseQueryResult<TData, GetIsPublicControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getIsPublicControllerHandleQueryKey(specialist);
  const query = useQuery({
    ...(getIsPublicControllerHandleQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, GetIsPublicControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getIsPublicControllerHandleSuspenseQueryKey = (
  specialist: GetIsPublicControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/core/is-public',
      params: { specialist: specialist },
    },
  ] as const;
export type GetIsPublicControllerHandleSuspenseQueryKey = ReturnType<
  typeof getIsPublicControllerHandleSuspenseQueryKey
>;
export function getIsPublicControllerHandleSuspenseQueryOptions(
  specialist: GetIsPublicControllerHandlePathParams['specialist'],
  options: GetIsPublicControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getIsPublicControllerHandleSuspenseQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetIsPublicControllerHandle['data'],
        GetIsPublicControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/core/is-public`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/core/is-public
 */
export function useGetIsPublicControllerHandleSuspense<
  TData = GetIsPublicControllerHandle['response'],
  TQueryKey extends QueryKey = GetIsPublicControllerHandleSuspenseQueryKey,
>(
  specialist: GetIsPublicControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetIsPublicControllerHandle['response'],
        GetIsPublicControllerHandle['error'],
        TData,
        TQueryKey
      >
    >;
    client?: GetIsPublicControllerHandle['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, GetIsPublicControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getIsPublicControllerHandleSuspenseQueryKey(specialist);
  const query = useSuspenseQuery({
    ...(getIsPublicControllerHandleSuspenseQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, GetIsPublicControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
