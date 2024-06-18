export type Contact = {
  id?: string;
  value: string;
};

export type Contacts = {
  phones: Contact[];
  emails: Contact[];
  websites: Contact[];
};

export type ContactsSliceState = {
  contacts: Contacts;
};
