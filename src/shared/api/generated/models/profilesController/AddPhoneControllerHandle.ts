import { AddPhoneRequestBody } from '../AddPhoneRequestBody';

export type AddPhoneControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type AddPhoneControllerHandle201 = any;

export type AddPhoneControllerHandle401 = any;

export type AddPhoneControllerHandle403 = any;

export type AddPhoneControllerHandleMutationRequest = AddPhoneRequestBody;

export type AddPhoneControllerHandleMutationResponse = any;

export type AddPhoneControllerHandleMutation = {
  Response: AddPhoneControllerHandleMutationResponse;
  Request: AddPhoneControllerHandleMutationRequest;
  PathParams: AddPhoneControllerHandlePathParams;
  Errors: AddPhoneControllerHandle401 | AddPhoneControllerHandle403;
};
