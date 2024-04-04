import { LoginDto } from '../LoginDto';
import type { LoginResponseDto } from '../LoginResponseDto';

export type AuthControllerLogin201 = LoginResponseDto;

export type AuthControllerLogin400 = undefined;

export type AuthControllerLogin401 = undefined;

export type AuthControllerLoginMutationRequest = LoginDto;

export type AuthControllerLoginMutationResponse = LoginResponseDto;

export type AuthControllerLoginMutation = {
  Response: AuthControllerLoginMutationResponse;
  Request: AuthControllerLoginMutationRequest;
  Errors: AuthControllerLogin400 | AuthControllerLogin401;
};
