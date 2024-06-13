import { UpdateFirstNameRequestBody } from '../UpdateFirstNameRequestBody';

export type UpdateFirstNameControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type UpdateFirstNameControllerHandle200 = any;

export type UpdateFirstNameControllerHandle401 = any;

export type UpdateFirstNameControllerHandle403 = any;

export type UpdateFirstNameControllerHandleMutationRequest =
  UpdateFirstNameRequestBody;

export type UpdateFirstNameControllerHandleMutationResponse = any;

export type UpdateFirstNameControllerHandleMutation = {
  Response: UpdateFirstNameControllerHandleMutationResponse;
  Request: UpdateFirstNameControllerHandleMutationRequest;
  PathParams: UpdateFirstNameControllerHandlePathParams;
  Errors:
    | UpdateFirstNameControllerHandle401
    | UpdateFirstNameControllerHandle403;
};
