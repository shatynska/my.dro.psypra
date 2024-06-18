import type { GetContactsResponse } from '../GetContactsResponse';

export type GetContactsControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type GetContactsControllerHandle200 = GetContactsResponse;

export type GetContactsControllerHandle401 = any;

export type GetContactsControllerHandle403 = any;

export type GetContactsControllerHandleQueryResponse = GetContactsResponse;

export type GetContactsControllerHandleQuery = {
  Response: GetContactsControllerHandleQueryResponse;
  PathParams: GetContactsControllerHandlePathParams;
  Errors: GetContactsControllerHandle401 | GetContactsControllerHandle403;
};
