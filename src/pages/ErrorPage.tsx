import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! 😵</h1>
      <p className="mb-2 text-gray-700">
        {error?.statusText || error?.message || "Something went wrong."}
      </p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
