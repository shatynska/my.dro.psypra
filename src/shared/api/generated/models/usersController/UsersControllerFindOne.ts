import type { UserResponseDto } from '../UserResponseDto';

export type UsersControllerFindOnePathParams = {
  /**
   * @type string
   */
  identifier: string;
};

export type UsersControllerFindOne200 = UserResponseDto;

export type UsersControllerFindOneQueryResponse = UserResponseDto;

export type UsersControllerFindOneQuery = {
  Response: UsersControllerFindOneQueryResponse;
  PathParams: UsersControllerFindOnePathParams;
};
