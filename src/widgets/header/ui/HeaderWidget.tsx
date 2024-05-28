import { useAppSelector } from '~/shared/model/use-app-selector';

import { userModel } from '~/entities/user';

import { LogoutButton } from '~/features/authorization/logout';

export function HeaderWidget() {
  const user = useAppSelector(userModel.selectUser);

  return (
    <header className="flex h-12 items-center justify-between p-8">
      <div>My.Dro.PsyPra</div>
      <div className="flex items-center gap-8">
        {user?.userName}
        <LogoutButton />
      </div>
    </header>
  );
}
