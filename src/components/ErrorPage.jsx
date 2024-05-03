import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col gap-4 justify-center items-center min-h-screen"
    >
      <h1 className="font-ojuju text-2xl uppercase font-bold">Oops!</h1>
      <p className="">
        {error.status} | {error.statusText}
      </p>
      <button className="bg-primary px-4 py-2 rounded font-bold capitalize">
        <a href="/">back home</a>
      </button>
    </div>
  );
}
