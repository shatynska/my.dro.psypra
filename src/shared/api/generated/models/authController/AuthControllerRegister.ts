import { RegisterDto } from '../RegisterDto';
import type { UserResponseDto } from '../UserResponseDto';

export type AuthControllerRegister201 = UserResponseDto;

export type AuthControllerRegister400 = undefined;

export type AuthControllerRegister409 = undefined;

export type AuthControllerRegisterMutationRequest = RegisterDto;

export type AuthControllerRegisterMutationResponse = UserResponseDto;

export type AuthControllerRegisterMutation = {
  Response: AuthControllerRegisterMutationResponse;
  Request: AuthControllerRegisterMutationRequest;
  Errors: AuthControllerRegister400 | AuthControllerRegister409;
};
