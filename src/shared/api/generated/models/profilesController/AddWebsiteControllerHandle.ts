import { AddWebsiteRequestBody } from '../AddWebsiteRequestBody';

export type AddWebsiteControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type AddWebsiteControllerHandle201 = any;

export type AddWebsiteControllerHandle401 = any;

export type AddWebsiteControllerHandle403 = any;

export type AddWebsiteControllerHandleMutationRequest = AddWebsiteRequestBody;

export type AddWebsiteControllerHandleMutationResponse = any;

export type AddWebsiteControllerHandleMutation = {
  Response: AddWebsiteControllerHandleMutationResponse;
  Request: AddWebsiteControllerHandleMutationRequest;
  PathParams: AddWebsiteControllerHandlePathParams;
  Errors: AddWebsiteControllerHandle401 | AddWebsiteControllerHandle403;
};
