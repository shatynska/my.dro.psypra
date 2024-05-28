import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '~/shared/model/use-app-selector';

import { userModel } from '~/entities/user';

import { HeaderWidget } from '~/widgets/header';

export function ProtectedLayout() {
  const authorizedUser = useAppSelector(userModel.selectUser);

  if (!authorizedUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <HeaderWidget />
      <div className="flex">
        <main className="w-full bg-muted p-8">
          <Outlet />
        </main>
      </div>
    </>
  );
}
