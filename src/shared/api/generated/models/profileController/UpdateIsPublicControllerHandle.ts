import { UpdateIsPublicRequestBody } from '../UpdateIsPublicRequestBody';

export type UpdateIsPublicControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type UpdateIsPublicControllerHandle200 = any;

export type UpdateIsPublicControllerHandle401 = any;

export type UpdateIsPublicControllerHandle403 = any;

export type UpdateIsPublicControllerHandleMutationRequest =
  UpdateIsPublicRequestBody;

export type UpdateIsPublicControllerHandleMutationResponse = any;

export type UpdateIsPublicControllerHandleMutation = {
  Response: UpdateIsPublicControllerHandleMutationResponse;
  Request: UpdateIsPublicControllerHandleMutationRequest;
  PathParams: UpdateIsPublicControllerHandlePathParams;
  Errors: UpdateIsPublicControllerHandle401 | UpdateIsPublicControllerHandle403;
};
