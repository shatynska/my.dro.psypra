import client from '../../../client';
import {
  useQuery,
  queryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  GetContactsControllerHandleQueryResponse,
  GetContactsControllerHandlePathParams,
  GetContactsControllerHandle401,
  GetContactsControllerHandle403,
} from '../../models/profilesController/GetContactsControllerHandle';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type GetContactsControllerHandleClient = typeof client<
  GetContactsControllerHandleQueryResponse,
  GetContactsControllerHandle401 | GetContactsControllerHandle403,
  never
>;
type GetContactsControllerHandle = {
  data: GetContactsControllerHandleQueryResponse;
  error: GetContactsControllerHandle401 | GetContactsControllerHandle403;
  request: never;
  pathParams: GetContactsControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: GetContactsControllerHandleQueryResponse;
  client: {
    parameters: Partial<Parameters<GetContactsControllerHandleClient>[0]>;
    return: Awaited<ReturnType<GetContactsControllerHandleClient>>;
  };
};
export const getContactsControllerHandleQueryKey = (
  specialist: GetContactsControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/contacts',
      params: { specialist: specialist },
    },
  ] as const;
export type GetContactsControllerHandleQueryKey = ReturnType<
  typeof getContactsControllerHandleQueryKey
>;
export function getContactsControllerHandleQueryOptions(
  specialist: GetContactsControllerHandlePathParams['specialist'],
  options: GetContactsControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getContactsControllerHandleQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetContactsControllerHandle['data'],
        GetContactsControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/contacts`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/contacts
 */
export function useGetContactsControllerHandle<
  TData = GetContactsControllerHandle['response'],
  TQueryData = GetContactsControllerHandle['response'],
  TQueryKey extends QueryKey = GetContactsControllerHandleQueryKey,
>(
  specialist: GetContactsControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetContactsControllerHandle['response'],
        GetContactsControllerHandle['error'],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetContactsControllerHandle['client']['parameters'];
  } = {},
): UseQueryResult<TData, GetContactsControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getContactsControllerHandleQueryKey(specialist);
  const query = useQuery({
    ...(getContactsControllerHandleQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, GetContactsControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getContactsControllerHandleSuspenseQueryKey = (
  specialist: GetContactsControllerHandlePathParams['specialist'],
) =>
  [
    {
      url: '/api/profiles/:specialist/contacts',
      params: { specialist: specialist },
    },
  ] as const;
export type GetContactsControllerHandleSuspenseQueryKey = ReturnType<
  typeof getContactsControllerHandleSuspenseQueryKey
>;
export function getContactsControllerHandleSuspenseQueryOptions(
  specialist: GetContactsControllerHandlePathParams['specialist'],
  options: GetContactsControllerHandle['client']['parameters'] = {},
) {
  const queryKey = getContactsControllerHandleSuspenseQueryKey(specialist);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetContactsControllerHandle['data'],
        GetContactsControllerHandle['error']
      >({
        method: 'get',
        url: `/api/profiles/${specialist}/contacts`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /api/profiles/:specialist/contacts
 */
export function useGetContactsControllerHandleSuspense<
  TData = GetContactsControllerHandle['response'],
  TQueryKey extends QueryKey = GetContactsControllerHandleSuspenseQueryKey,
>(
  specialist: GetContactsControllerHandlePathParams['specialist'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetContactsControllerHandle['response'],
        GetContactsControllerHandle['error'],
        TData,
        TQueryKey
      >
    >;
    client?: GetContactsControllerHandle['client']['parameters'];
  } = {},
): UseSuspenseQueryResult<TData, GetContactsControllerHandle['error']> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getContactsControllerHandleSuspenseQueryKey(specialist);
  const query = useSuspenseQuery({
    ...(getContactsControllerHandleSuspenseQueryOptions(
      specialist,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, GetContactsControllerHandle['error']> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
