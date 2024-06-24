import type { GetFirstNameResponse } from '../GetFirstNameResponse';

export type GetFirstNameControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type GetFirstNameControllerHandle200 = GetFirstNameResponse;

export type GetFirstNameControllerHandle401 = any;

export type GetFirstNameControllerHandle403 = any;

export type GetFirstNameControllerHandleQueryResponse = GetFirstNameResponse;

export type GetFirstNameControllerHandleQuery = {
  Response: GetFirstNameControllerHandleQueryResponse;
  PathParams: GetFirstNameControllerHandlePathParams;
  Errors: GetFirstNameControllerHandle401 | GetFirstNameControllerHandle403;
};
