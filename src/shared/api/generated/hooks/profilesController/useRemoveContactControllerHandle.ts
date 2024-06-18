import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  RemoveContactControllerHandleMutationRequest,
  RemoveContactControllerHandleMutationResponse,
  RemoveContactControllerHandlePathParams,
  RemoveContactControllerHandle401,
  RemoveContactControllerHandle403,
} from '../../models/profilesController/RemoveContactControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type RemoveContactControllerHandleClient = typeof client<
  RemoveContactControllerHandleMutationResponse,
  RemoveContactControllerHandle401 | RemoveContactControllerHandle403,
  RemoveContactControllerHandleMutationRequest
>;
type RemoveContactControllerHandle = {
  data: RemoveContactControllerHandleMutationResponse;
  error: RemoveContactControllerHandle401 | RemoveContactControllerHandle403;
  request: RemoveContactControllerHandleMutationRequest;
  pathParams: RemoveContactControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: RemoveContactControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<RemoveContactControllerHandleClient>[0]>;
    return: Awaited<ReturnType<RemoveContactControllerHandleClient>>;
  };
};
/**
 * @summary Remove contact
 * @link /api/profiles/:specialist/contacts
 */
export function useRemoveContactControllerHandle(
  specialist: RemoveContactControllerHandlePathParams['specialist'],
  options: {
    mutation?: UseMutationOptions<
      RemoveContactControllerHandle['response'],
      RemoveContactControllerHandle['error'],
      RemoveContactControllerHandle['request']
    >;
    client?: RemoveContactControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        RemoveContactControllerHandle['data'],
        RemoveContactControllerHandle['error'],
        RemoveContactControllerHandle['request']
      >({
        method: 'delete',
        url: `/api/profiles/${specialist}/contacts`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
