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
} from './authController/authControllerLoginSchema';
import { authControllerLogoutQueryResponseSchema } from './authController/authControllerLogoutSchema';
import { authControllerRefreshTokensQueryResponseSchema } from './authController/authControllerRefreshTokensSchema';
import { authControllerGoogleAuthQueryResponseSchema } from './authController/authControllerGoogleAuthSchema';
import { authControllerGoogleAuthCallbackQueryResponseSchema } from './authController/authControllerGoogleAuthCallbackSchema';
import {
  authControllerSuccessGoogleQueryResponseSchema,
  authControllerSuccessGoogleQueryParamsSchema,
} from './authController/authControllerSuccessGoogleSchema';
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
  getCoreControllerHandleQueryResponseSchema,
  getCoreControllerHandle401Schema,
  getCoreControllerHandle403Schema,
  getCoreControllerHandlePathParamsSchema,
} from './profilesController/getCoreControllerHandleSchema';
import {
  updateFirstNameControllerHandleMutationRequestSchema,
  updateFirstNameControllerHandleMutationResponseSchema,
  updateFirstNameControllerHandle401Schema,
  updateFirstNameControllerHandle403Schema,
  updateFirstNameControllerHandlePathParamsSchema,
} from './profilesController/updateFirstNameControllerHandleSchema';
import {
  updateIsPublicControllerHandleMutationRequestSchema,
  updateIsPublicControllerHandleMutationResponseSchema,
  updateIsPublicControllerHandle401Schema,
  updateIsPublicControllerHandle403Schema,
  updateIsPublicControllerHandlePathParamsSchema,
} from './profilesController/updateIsPublicControllerHandleSchema';
import {
  updateLastNameControllerHandleMutationRequestSchema,
  updateLastNameControllerHandleMutationResponseSchema,
  updateLastNameControllerHandle401Schema,
  updateLastNameControllerHandle403Schema,
  updateLastNameControllerHandlePathParamsSchema,
} from './profilesController/updateLastNameControllerHandleSchema';
import {
  removeContactControllerHandleMutationRequestSchema,
  removeContactControllerHandleMutationResponseSchema,
  removeContactControllerHandle401Schema,
  removeContactControllerHandle403Schema,
  removeContactControllerHandlePathParamsSchema,
} from './profilesController/removeContactControllerHandleSchema';
import {
  getContactsControllerHandleQueryResponseSchema,
  getContactsControllerHandle401Schema,
  getContactsControllerHandle403Schema,
  getContactsControllerHandlePathParamsSchema,
} from './profilesController/getContactsControllerHandleSchema';
import {
  addPhoneControllerHandleMutationRequestSchema,
  addPhoneControllerHandleMutationResponseSchema,
  addPhoneControllerHandle401Schema,
  addPhoneControllerHandle403Schema,
  addPhoneControllerHandlePathParamsSchema,
} from './profilesController/addPhoneControllerHandleSchema';
import {
  addEmailControllerHandleMutationRequestSchema,
  addEmailControllerHandleMutationResponseSchema,
  addEmailControllerHandle401Schema,
  addEmailControllerHandle403Schema,
  addEmailControllerHandlePathParamsSchema,
} from './profilesController/addEmailControllerHandleSchema';
import {
  addWebsiteControllerHandleMutationRequestSchema,
  addWebsiteControllerHandleMutationResponseSchema,
  addWebsiteControllerHandle401Schema,
  addWebsiteControllerHandle403Schema,
  addWebsiteControllerHandlePathParamsSchema,
} from './profilesController/addWebsiteControllerHandleSchema';

export const operations = {
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
  GetCoreController_handle: {
    request: undefined,
    parameters: {
      path: getCoreControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: getCoreControllerHandleQueryResponseSchema,
      401: getCoreControllerHandle401Schema,
      403: getCoreControllerHandle403Schema,
    },
  },
  UpdateFirstNameController_handle: {
    request: updateFirstNameControllerHandleMutationRequestSchema,
    parameters: {
      path: updateFirstNameControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: updateFirstNameControllerHandleMutationResponseSchema,
      401: updateFirstNameControllerHandle401Schema,
      403: updateFirstNameControllerHandle403Schema,
    },
  },
  UpdateIsPublicController_handle: {
    request: updateIsPublicControllerHandleMutationRequestSchema,
    parameters: {
      path: updateIsPublicControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: updateIsPublicControllerHandleMutationResponseSchema,
      401: updateIsPublicControllerHandle401Schema,
      403: updateIsPublicControllerHandle403Schema,
    },
  },
  UpdateLastNameController_handle: {
    request: updateLastNameControllerHandleMutationRequestSchema,
    parameters: {
      path: updateLastNameControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: updateLastNameControllerHandleMutationResponseSchema,
      401: updateLastNameControllerHandle401Schema,
      403: updateLastNameControllerHandle403Schema,
    },
  },
  RemoveContactController_handle: {
    request: removeContactControllerHandleMutationRequestSchema,
    parameters: {
      path: removeContactControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: removeContactControllerHandleMutationResponseSchema,
      401: removeContactControllerHandle401Schema,
      403: removeContactControllerHandle403Schema,
    },
  },
  GetContactsController_handle: {
    request: undefined,
    parameters: {
      path: getContactsControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: getContactsControllerHandleQueryResponseSchema,
      401: getContactsControllerHandle401Schema,
      403: getContactsControllerHandle403Schema,
    },
  },
  AddPhoneController_handle: {
    request: addPhoneControllerHandleMutationRequestSchema,
    parameters: {
      path: addPhoneControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      201: addPhoneControllerHandleMutationResponseSchema,
      401: addPhoneControllerHandle401Schema,
      403: addPhoneControllerHandle403Schema,
    },
  },
  AddEmailController_handle: {
    request: addEmailControllerHandleMutationRequestSchema,
    parameters: {
      path: addEmailControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      201: addEmailControllerHandleMutationResponseSchema,
      401: addEmailControllerHandle401Schema,
      403: addEmailControllerHandle403Schema,
    },
  },
  AddWebsiteController_handle: {
    request: addWebsiteControllerHandleMutationRequestSchema,
    parameters: {
      path: addWebsiteControllerHandlePathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      201: addWebsiteControllerHandleMutationResponseSchema,
      401: addWebsiteControllerHandle401Schema,
      403: addWebsiteControllerHandle403Schema,
    },
  },
} as const;
export const paths = {
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
  '/api/profiles/{specialist}/core': {
    get: operations['GetCoreController_handle'],
  },
  '/api/profiles/{specialist}/core/first-name': {
    patch: operations['UpdateFirstNameController_handle'],
  },
  '/api/profiles/{specialist}/core/is-public': {
    patch: operations['UpdateIsPublicController_handle'],
  },
  '/api/profiles/{specialist}/core/last-name': {
    patch: operations['UpdateLastNameController_handle'],
  },
  '/api/profiles/{specialist}/contacts': {
    delete: operations['RemoveContactController_handle'],
    get: operations['GetContactsController_handle'],
  },
  '/api/profiles/{specialist}/contacts/phones': {
    post: operations['AddPhoneController_handle'],
  },
  '/api/profiles/{specialist}/contacts/emails': {
    post: operations['AddEmailController_handle'],
  },
  '/api/profiles/{specialist}/contacts/websites': {
    post: operations['AddWebsiteController_handle'],
  },
} as const;
