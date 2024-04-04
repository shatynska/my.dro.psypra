export const UserResponseDtoRoles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;
export type UserResponseDtoRoles =
  (typeof UserResponseDtoRoles)[keyof typeof UserResponseDtoRoles];
export type UserResponseDto = {
  /**
   * @type string
   */
  id: string;
  /**
   * @type string
   */
  userName: string;
  /**
   * @type string | undefined
   */
  email?: string;
  /**
   * @type string | undefined
   */
  phone?: string;
  /**
   * @type string
   */
  roles: UserResponseDtoRoles;
};
