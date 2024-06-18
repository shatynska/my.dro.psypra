import { AddEmailRequestBody } from '../AddEmailRequestBody';

export type AddEmailControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type AddEmailControllerHandle201 = any;

export type AddEmailControllerHandle401 = any;

export type AddEmailControllerHandle403 = any;

export type AddEmailControllerHandleMutationRequest = AddEmailRequestBody;

export type AddEmailControllerHandleMutationResponse = any;

export type AddEmailControllerHandleMutation = {
  Response: AddEmailControllerHandleMutationResponse;
  Request: AddEmailControllerHandleMutationRequest;
  PathParams: AddEmailControllerHandlePathParams;
  Errors: AddEmailControllerHandle401 | AddEmailControllerHandle403;
};
