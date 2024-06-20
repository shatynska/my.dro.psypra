import { ButtonWithAlertDialog } from '~/shared/ui';

import { useLogout } from '../lib';

export function LogoutButtonWithAlertDialog() {
  const { handleLogout } = useLogout();

  return (
    <ButtonWithAlertDialog
      alertDialogActionTitle="Вийти"
      alertDialogTitle="Ви дійсно хочете вийти?"
      handleClick={handleLogout}
    />
  );
}
