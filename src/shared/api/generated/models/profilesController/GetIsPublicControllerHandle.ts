import type { GetIsPublicResponse } from '../GetIsPublicResponse';

export type GetIsPublicControllerHandlePathParams = {
  /**
   * @type string
   */
  specialist: string;
};

export type GetIsPublicControllerHandle200 = GetIsPublicResponse;

export type GetIsPublicControllerHandle401 = any;

export type GetIsPublicControllerHandle403 = any;

export type GetIsPublicControllerHandleQueryResponse = GetIsPublicResponse;

export type GetIsPublicControllerHandleQuery = {
  Response: GetIsPublicControllerHandleQueryResponse;
  PathParams: GetIsPublicControllerHandlePathParams;
  Errors: GetIsPublicControllerHandle401 | GetIsPublicControllerHandle403;
};
