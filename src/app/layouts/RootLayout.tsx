import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export function RootLayout() {
  return (
    <div className="m-auto flex max-w-screen-lg flex-col justify-center">
      <Outlet />
      <Toaster position="top-center" richColors />
    </div>
  );
}
