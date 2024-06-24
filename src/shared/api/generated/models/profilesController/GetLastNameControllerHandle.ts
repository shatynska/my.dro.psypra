import type { GetLastNameResponse } from '../GetLastNameResponse';

export type GetLastNameControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type GetLastNameControllerHandle200 = GetLastNameResponse;

export type GetLastNameControllerHandle401 = any;

export type GetLastNameControllerHandle403 = any;

export type GetLastNameControllerHandleQueryResponse = GetLastNameResponse;

export type GetLastNameControllerHandleQuery = {
  Response: GetLastNameControllerHandleQueryResponse;
  PathParams: GetLastNameControllerHandlePathParams;
  Errors: GetLastNameControllerHandle401 | GetLastNameControllerHandle403;
};
