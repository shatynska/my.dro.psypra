import {
  FirstNameForm,
  IsPublicForm,
  LastNameForm,
} from '~/entities/core-data';

import { useMainPage } from '../lib';

export function MainPage() {
  const { data, specialist } = useMainPage();

  return (
    <div className="flex flex-col gap-12">
      <h1>Основне</h1>
      {data && (
        <>
          <IsPublicForm specialist={specialist} />
          <FirstNameForm specialist={specialist} />
          <LastNameForm specialist={specialist} />
        </>
      )}
    </div>
  );
}
