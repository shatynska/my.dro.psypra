import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as Error;

  // TODO Refine ErrorPage
  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center gap-4">
      <h1>Помилка</h1>
      <p>{error.message}</p>
      <p>
        <Link to="/">Перейти на головну</Link>
      </p>
    </div>
  );
}
