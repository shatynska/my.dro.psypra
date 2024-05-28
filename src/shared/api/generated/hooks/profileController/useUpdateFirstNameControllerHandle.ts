import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  UpdateFirstNameControllerHandleMutationRequest,
  UpdateFirstNameControllerHandleMutationResponse,
  UpdateFirstNameControllerHandlePathParams,
  UpdateFirstNameControllerHandle401,
  UpdateFirstNameControllerHandle403,
} from '../../models/profileController/UpdateFirstNameControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type UpdateFirstNameControllerHandleClient = typeof client<
  UpdateFirstNameControllerHandleMutationResponse,
  UpdateFirstNameControllerHandle401 | UpdateFirstNameControllerHandle403,
  UpdateFirstNameControllerHandleMutationRequest
>;
type UpdateFirstNameControllerHandle = {
  data: UpdateFirstNameControllerHandleMutationResponse;
  error:
    | UpdateFirstNameControllerHandle401
    | UpdateFirstNameControllerHandle403;
  request: UpdateFirstNameControllerHandleMutationRequest;
  pathParams: UpdateFirstNameControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: UpdateFirstNameControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<UpdateFirstNameControllerHandleClient>[0]>;
    return: Awaited<ReturnType<UpdateFirstNameControllerHandleClient>>;
  };
};
/**
 * @summary Update first name
 * @link /api/profile/:specialist/core/first-name
 */
export function useUpdateFirstNameControllerHandle(
  specialist: UpdateFirstNameControllerHandlePathParams['specialist'],
  options: {
    mutation?: UseMutationOptions<
      UpdateFirstNameControllerHandle['response'],
      UpdateFirstNameControllerHandle['error'],
      UpdateFirstNameControllerHandle['request']
    >;
    client?: UpdateFirstNameControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        UpdateFirstNameControllerHandle['data'],
        UpdateFirstNameControllerHandle['error'],
        UpdateFirstNameControllerHandle['request']
      >({
        method: 'patch',
        url: `/api/profile/${specialist}/core/first-name`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
