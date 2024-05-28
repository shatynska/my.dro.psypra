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
   * @type string
   */
  email: string | null;
  /**
   * @type string
   */
  phone: string | null;
  /**
   * @type string
   */
  roles: UserResponseDtoRoles;
};
