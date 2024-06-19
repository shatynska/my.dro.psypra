import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '~/shared/ui';

import { useLogout } from '../lib';

export function LogoutButton() {
  const { handleLogout } = useLogout();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Вийти</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Ви дійсно хочете вийти?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Відмінити</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleLogout()}>
            Вийти
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
