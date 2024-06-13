import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '~/shared/lib';
import { Skeleton } from '~/shared/ui/skeleton';

import { userModel } from '~/entities/user';

import { HeaderWidget } from '~/widgets/header';
import { SidebarWidget } from '~/widgets/sidebar';

export function ProtectedLayout() {
  const authorizedUser = useAppSelector(userModel.selectUser);

  if (!authorizedUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <HeaderWidget />
      <div className="flex">
        <SidebarWidget />
        <main className="w-full bg-muted p-8">
          <Suspense fallback={<Skeleton />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
}
