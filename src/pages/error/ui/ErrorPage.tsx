import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as Error;

  // TODO Refine ErrorPage
  return (
    <>
      <h1>Помилка</h1>
      <p>{error.message}</p>
      <Link to="/">На головну</Link>
    </>
  );
}
