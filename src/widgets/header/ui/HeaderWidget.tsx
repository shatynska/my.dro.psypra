import { useAppSelector } from '~/shared/lib';

import { userModel } from '~/entities/user';

import { LogoutButtonWithAlertDialog } from '~/features/authorization/logout';

export function HeaderWidget() {
  const userName = useAppSelector(userModel.selectUserName);

  return (
    <header className="flex h-12 items-center justify-between p-8">
      <div>My.Dro.PsyPra</div>
      <div className="flex items-center gap-8">
        {userName}
        <LogoutButtonWithAlertDialog />
      </div>
    </header>
  );
}
