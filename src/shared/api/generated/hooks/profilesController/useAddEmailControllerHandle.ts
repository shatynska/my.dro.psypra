import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  AddEmailControllerHandleMutationRequest,
  AddEmailControllerHandleMutationResponse,
  AddEmailControllerHandlePathParams,
  AddEmailControllerHandle401,
  AddEmailControllerHandle403,
} from '../../models/profilesController/AddEmailControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type AddEmailControllerHandleClient = typeof client<
  AddEmailControllerHandleMutationResponse,
  AddEmailControllerHandle401 | AddEmailControllerHandle403,
  AddEmailControllerHandleMutationRequest
>;
type AddEmailControllerHandle = {
  data: AddEmailControllerHandleMutationResponse;
  error: AddEmailControllerHandle401 | AddEmailControllerHandle403;
  request: AddEmailControllerHandleMutationRequest;
  pathParams: AddEmailControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: AddEmailControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<AddEmailControllerHandleClient>[0]>;
    return: Awaited<ReturnType<AddEmailControllerHandleClient>>;
  };
};
/**
 * @summary Add email
 * @link /api/profiles/:specialist/contacts/emails
 */
export function useAddEmailControllerHandle(
  specialist: AddEmailControllerHandlePathParams['specialist'],
  options: {
    mutation?: UseMutationOptions<
      AddEmailControllerHandle['response'],
      AddEmailControllerHandle['error'],
      AddEmailControllerHandle['request']
    >;
    client?: AddEmailControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AddEmailControllerHandle['data'],
        AddEmailControllerHandle['error'],
        AddEmailControllerHandle['request']
      >({
        method: 'post',
        url: `/api/profiles/${specialist}/contacts/emails`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
