export const LoginResponseDtoUserRoles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;
export type LoginResponseDtoUserRoles =
  (typeof LoginResponseDtoUserRoles)[keyof typeof LoginResponseDtoUserRoles];
export type LoginResponseDto = {
  /**
   * @type string
   */
  accessToken: string;
  /**
   * @type object
   */
  user: {
    /**
     * @type string
     */
    userName: string;
    /**
     * @type array
     */
    roles: LoginResponseDtoUserRoles[];
  } | null;
};
