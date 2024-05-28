import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  UpdateIsPublicControllerHandleMutationRequest,
  UpdateIsPublicControllerHandleMutationResponse,
  UpdateIsPublicControllerHandlePathParams,
  UpdateIsPublicControllerHandle401,
  UpdateIsPublicControllerHandle403,
} from '../../models/profileController/UpdateIsPublicControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type UpdateIsPublicControllerHandleClient = typeof client<
  UpdateIsPublicControllerHandleMutationResponse,
  UpdateIsPublicControllerHandle401 | UpdateIsPublicControllerHandle403,
  UpdateIsPublicControllerHandleMutationRequest
>;
type UpdateIsPublicControllerHandle = {
  data: UpdateIsPublicControllerHandleMutationResponse;
  error: UpdateIsPublicControllerHandle401 | UpdateIsPublicControllerHandle403;
  request: UpdateIsPublicControllerHandleMutationRequest;
  pathParams: UpdateIsPublicControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: UpdateIsPublicControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<UpdateIsPublicControllerHandleClient>[0]>;
    return: Awaited<ReturnType<UpdateIsPublicControllerHandleClient>>;
  };
};
/**
 * @summary Update isPublic field
 * @link /api/profile/:specialist/core/is-public
 */
export function useUpdateIsPublicControllerHandle(
  specialist: UpdateIsPublicControllerHandlePathParams['specialist'],
  options: {
    mutation?: UseMutationOptions<
      UpdateIsPublicControllerHandle['response'],
      UpdateIsPublicControllerHandle['error'],
      UpdateIsPublicControllerHandle['request']
    >;
    client?: UpdateIsPublicControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        UpdateIsPublicControllerHandle['data'],
        UpdateIsPublicControllerHandle['error'],
        UpdateIsPublicControllerHandle['request']
      >({
        method: 'patch',
        url: `/api/profile/${specialist}/core/is-public`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
