import { RemoveContactRequestBody } from '../RemoveContactRequestBody';

export type RemoveContactControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type RemoveContactControllerHandle200 = any;

export type RemoveContactControllerHandle401 = any;

export type RemoveContactControllerHandle403 = any;

export type RemoveContactControllerHandleMutationRequest =
  RemoveContactRequestBody;

export type RemoveContactControllerHandleMutationResponse = any;

export type RemoveContactControllerHandleMutation = {
  Response: RemoveContactControllerHandleMutationResponse;
  Request: RemoveContactControllerHandleMutationRequest;
  PathParams: RemoveContactControllerHandlePathParams;
  Errors: RemoveContactControllerHandle401 | RemoveContactControllerHandle403;
};
