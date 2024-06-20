import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';
import { Button } from './button';

type Parameters = {
  alertDialogActionTitle: string;
  alertDialogTitle: string;
  handleClick: () => void;
};

export function ButtonWithAlertDialog({
  alertDialogActionTitle,
  alertDialogTitle,
  handleClick,
}: Parameters) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{alertDialogActionTitle}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Відмінити</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleClick()}>
            {alertDialogActionTitle}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
