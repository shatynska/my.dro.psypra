import { LoginForm } from '~/features/authorization/login';

export function LoginPage() {
  return (
    <section className="w-full">
      <div className="flex h-screen items-center justify-center">
        <LoginForm />
      </div>
    </section>
  );
}
