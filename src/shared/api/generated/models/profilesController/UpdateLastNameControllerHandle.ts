import { UpdateLastNameRequestBody } from '../UpdateLastNameRequestBody';

export type UpdateLastNameControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type UpdateLastNameControllerHandle200 = any;

export type UpdateLastNameControllerHandle401 = any;

export type UpdateLastNameControllerHandle403 = any;

export type UpdateLastNameControllerHandleMutationRequest =
  UpdateLastNameRequestBody;

export type UpdateLastNameControllerHandleMutationResponse = any;

export type UpdateLastNameControllerHandleMutation = {
  Response: UpdateLastNameControllerHandleMutationResponse;
  Request: UpdateLastNameControllerHandleMutationRequest;
  PathParams: UpdateLastNameControllerHandlePathParams;
  Errors: UpdateLastNameControllerHandle401 | UpdateLastNameControllerHandle403;
};
