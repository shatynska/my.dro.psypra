import { useContactsPage } from '../lib';

export function ContactsPage() {
  const { data, specialist } = useContactsPage();

  return (
    <div className="flex flex-col gap-12">
      <h1>Контакти</h1>
    </div>
  );
}
