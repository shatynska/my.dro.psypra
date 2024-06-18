import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  AddWebsiteControllerHandleMutationRequest,
  AddWebsiteControllerHandleMutationResponse,
  AddWebsiteControllerHandlePathParams,
  AddWebsiteControllerHandle401,
  AddWebsiteControllerHandle403,
} from '../../models/profilesController/AddWebsiteControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type AddWebsiteControllerHandleClient = typeof client<
  AddWebsiteControllerHandleMutationResponse,
  AddWebsiteControllerHandle401 | AddWebsiteControllerHandle403,
  AddWebsiteControllerHandleMutationRequest
>;
type AddWebsiteControllerHandle = {
  data: AddWebsiteControllerHandleMutationResponse;
  error: AddWebsiteControllerHandle401 | AddWebsiteControllerHandle403;
  request: AddWebsiteControllerHandleMutationRequest;
  pathParams: AddWebsiteControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: AddWebsiteControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<AddWebsiteControllerHandleClient>[0]>;
    return: Awaited<ReturnType<AddWebsiteControllerHandleClient>>;
  };
};
/**
 * @summary Add website
 * @link /api/profiles/:specialist/contacts/websites
 */
export function useAddWebsiteControllerHandle(
  specialist: AddWebsiteControllerHandlePathParams['specialist'],
  options: {
    mutation?: UseMutationOptions<
      AddWebsiteControllerHandle['response'],
      AddWebsiteControllerHandle['error'],
      AddWebsiteControllerHandle['request']
    >;
    client?: AddWebsiteControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AddWebsiteControllerHandle['data'],
        AddWebsiteControllerHandle['error'],
        AddWebsiteControllerHandle['request']
      >({
        method: 'post',
        url: `/api/profiles/${specialist}/contacts/websites`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
