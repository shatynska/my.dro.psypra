import { Link, Navigate, useRouteError } from 'react-router-dom';

import { useAppSelector } from '~/shared/model/use-app-selector';

import { userModel } from '~/entities/user';

export function ErrorPage() {
  const error = useRouteError() as Error;

  const authorizedUser = useAppSelector(userModel.selectUser);

  if (!authorizedUser) {
    return <Navigate to="/login" replace />;
  }

  // TODO Refine ErrorPage
  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center gap-4">
      <h1>Помилка</h1>
      <p>{error.message}</p>
      <p>
        <Link to={`/${authorizedUser.userName}/main`}>Перейти на головну</Link>
      </p>
    </div>
  );
}
