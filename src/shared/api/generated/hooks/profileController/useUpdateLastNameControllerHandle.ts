import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  UpdateLastNameControllerHandleMutationRequest,
  UpdateLastNameControllerHandleMutationResponse,
  UpdateLastNameControllerHandlePathParams,
  UpdateLastNameControllerHandle401,
  UpdateLastNameControllerHandle403,
} from '../../models/profileController/UpdateLastNameControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type UpdateLastNameControllerHandleClient = typeof client<
  UpdateLastNameControllerHandleMutationResponse,
  UpdateLastNameControllerHandle401 | UpdateLastNameControllerHandle403,
  UpdateLastNameControllerHandleMutationRequest
>;
type UpdateLastNameControllerHandle = {
  data: UpdateLastNameControllerHandleMutationResponse;
  error: UpdateLastNameControllerHandle401 | UpdateLastNameControllerHandle403;
  request: UpdateLastNameControllerHandleMutationRequest;
  pathParams: UpdateLastNameControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: UpdateLastNameControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<UpdateLastNameControllerHandleClient>[0]>;
    return: Awaited<ReturnType<UpdateLastNameControllerHandleClient>>;
  };
};
/**
 * @summary Update last name
 * @link /api/profile/:specialist/core/last-name
 */
export function useUpdateLastNameControllerHandle(
  specialist: UpdateLastNameControllerHandlePathParams['specialist'],
  options: {
    mutation?: UseMutationOptions<
      UpdateLastNameControllerHandle['response'],
      UpdateLastNameControllerHandle['error'],
      UpdateLastNameControllerHandle['request']
    >;
    client?: UpdateLastNameControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        UpdateLastNameControllerHandle['data'],
        UpdateLastNameControllerHandle['error'],
        UpdateLastNameControllerHandle['request']
      >({
        method: 'patch',
        url: `/api/profile/${specialist}/core/last-name`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
