import type { GetCoreResponse } from '../GetCoreResponse';

export type GetCoreControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type GetCoreControllerHandle200 = GetCoreResponse;

export type GetCoreControllerHandle401 = any;

export type GetCoreControllerHandle403 = any;

export type GetCoreControllerHandleQueryResponse = GetCoreResponse;

export type GetCoreControllerHandleQuery = {
  Response: GetCoreControllerHandleQueryResponse;
  PathParams: GetCoreControllerHandlePathParams;
  Errors: GetCoreControllerHandle401 | GetCoreControllerHandle403;
};
