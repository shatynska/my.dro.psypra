export type GetContactsResponse = {
  /**
   * @type array
   */
  phones: {
    /**
     * @type string, uuid
     */
    id: string;
    /**
     * @type string
     */
    value: string;
  }[];
  /**
   * @type array
   */
  emails: {
    /**
     * @type string, uuid
     */
    id: string;
    /**
     * @type string, email
     */
    value: string;
  }[];
  /**
   * @type array
   */
  websites: {
    /**
     * @type string, uuid
     */
    id: string;
    /**
     * @type string, uri
     */
    value: string;
  }[];
};
