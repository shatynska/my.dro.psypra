import {
  usersControllerFindOneQueryResponseSchema,
  usersControllerFindOnePathParamsSchema,
} from './usersController/usersControllerFindOneSchema';
import {
  usersControllerRemoveMutationResponseSchema,
  usersControllerRemovePathParamsSchema,
} from './usersController/usersControllerRemoveSchema';
import { usersControllerMeQueryResponseSchema } from './usersController/usersControllerMeSchema';
import { usersControllerUpdateUserMutationResponseSchema } from './usersController/usersControllerUpdateUserSchema';
import {
  authControllerRegisterMutationRequestSchema,
  authControllerRegisterMutationResponseSchema,
  authControllerRegister400Schema,
  authControllerRegister409Schema,
} from './authController/authControllerRegisterSchema';
import {
  authControllerLoginMutationRequestSchema,
  authControllerLoginMutationResponseSchema,
  authControllerLogin400Schema,
  authControllerLogin401Schema,
} from './authController/authControllerLoginSchema';
import { authControllerLogoutQueryResponseSchema } from './authController/authControllerLogoutSchema';
import { authControllerRefreshTokensQueryResponseSchema } from './authController/authControllerRefreshTokensSchema';
import { authControllerGoogleAuthQueryResponseSchema } from './authController/authControllerGoogleAuthSchema';
import { authControllerGoogleAuthCallbackQueryResponseSchema } from './authController/authControllerGoogleAuthCallbackSchema';
import {
  authControllerSuccessGoogleQueryResponseSchema,
  authControllerSuccessGoogleQueryParamsSchema,
} from './authController/authControllerSuccessGoogleSchema';

export const operations = {
  UsersController_findOne: {
    request: undefined,
    parameters: {
      path: usersControllerFindOnePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: usersControllerFindOneQueryResponseSchema,
    },
  },
  UsersController_remove: {
    request: undefined,
    parameters: {
      path: usersControllerRemovePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: usersControllerRemoveMutationResponseSchema,
    },
  },
  UsersController_me: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: usersControllerMeQueryResponseSchema,
    },
  },
  UsersController_updateUser: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: usersControllerUpdateUserMutationResponseSchema,
    },
  },
  AuthController_register: {
    request: authControllerRegisterMutationRequestSchema,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      201: authControllerRegisterMutationResponseSchema,
      400: authControllerRegister400Schema,
      409: authControllerRegister409Schema,
    },
  },
  AuthController_login: {
    request: authControllerLoginMutationRequestSchema,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      201: authControllerLoginMutationResponseSchema,
      400: authControllerLogin400Schema,
      401: authControllerLogin401Schema,
    },
  },
  AuthController_logout: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: authControllerLogoutQueryResponseSchema,
    },
  },
  AuthController_refreshTokens: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: authControllerRefreshTokensQueryResponseSchema,
    },
  },
  AuthController_googleAuth: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: authControllerGoogleAuthQueryResponseSchema,
    },
  },
  AuthController_googleAuthCallback: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: authControllerGoogleAuthCallbackQueryResponseSchema,
    },
  },
  AuthController_successGoogle: {
    request: undefined,
    parameters: {
      path: undefined,
      query: authControllerSuccessGoogleQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: authControllerSuccessGoogleQueryResponseSchema,
    },
  },
} as const;
export const paths = {
  '/api/users/{identifier}': {
    get: operations['UsersController_findOne'],
  },
  '/api/users/{id}': {
    delete: operations['UsersController_remove'],
  },
  '/api/users': {
    get: operations['UsersController_me'],
    put: operations['UsersController_updateUser'],
  },
  '/api/auth/register': {
    post: operations['AuthController_register'],
  },
  '/api/auth/login': {
    post: operations['AuthController_login'],
  },
  '/api/auth/logout': {
    get: operations['AuthController_logout'],
  },
  '/api/auth/refresh-tokens': {
    get: operations['AuthController_refreshTokens'],
  },
  '/api/auth/google': {
    get: operations['AuthController_googleAuth'],
  },
  '/api/auth/google/callback': {
    get: operations['AuthController_googleAuthCallback'],
  },
  '/api/auth/success-google': {
    get: operations['AuthController_successGoogle'],
  },
} as const;
