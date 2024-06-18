import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  AddPhoneControllerHandleMutationRequest,
  AddPhoneControllerHandleMutationResponse,
  AddPhoneControllerHandlePathParams,
  AddPhoneControllerHandle401,
  AddPhoneControllerHandle403,
} from '../../models/profilesController/AddPhoneControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type AddPhoneControllerHandleClient = typeof client<
  AddPhoneControllerHandleMutationResponse,
  AddPhoneControllerHandle401 | AddPhoneControllerHandle403,
  AddPhoneControllerHandleMutationRequest
>;
type AddPhoneControllerHandle = {
  data: AddPhoneControllerHandleMutationResponse;
  error: AddPhoneControllerHandle401 | AddPhoneControllerHandle403;
  request: AddPhoneControllerHandleMutationRequest;
  pathParams: AddPhoneControllerHandlePathParams;
  queryParams: never;
  headerParams: never;
  response: AddPhoneControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<AddPhoneControllerHandleClient>[0]>;
    return: Awaited<ReturnType<AddPhoneControllerHandleClient>>;
  };
};
/**
 * @summary Add phone number
 * @link /api/profiles/:specialist/contacts/phones
 */
export function useAddPhoneControllerHandle(
  specialist: AddPhoneControllerHandlePathParams['specialist'],
  options: {
    mutation?: UseMutationOptions<
      AddPhoneControllerHandle['response'],
      AddPhoneControllerHandle['error'],
      AddPhoneControllerHandle['request']
    >;
    client?: AddPhoneControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AddPhoneControllerHandle['data'],
        AddPhoneControllerHandle['error'],
        AddPhoneControllerHandle['request']
      >({
        method: 'post',
        url: `/api/profiles/${specialist}/contacts/phones`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
