import { Navigate } from 'react-router-dom';

import { useAppSelector } from '~/shared/lib';

import { userModel } from '~/entities/user';

import { LoginForm } from '~/features/authorization/login';

export function LoginPage() {
  const authorizedUser = useAppSelector(userModel.selectUser);

  if (authorizedUser !== null && authorizedUser.userName) {
    return <Navigate to={`/${authorizedUser.userName}/main`} replace />;
  }

  return (
    <section className="w-full">
      <div className="flex h-screen items-center justify-center">
        <LoginForm />
      </div>
    </section>
  );
}
