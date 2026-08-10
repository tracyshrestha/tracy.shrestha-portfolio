import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong";
  let detail = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Page not found" : `Error ${error.status}`;
    detail =
      error.statusText ||
      (typeof error.data === "string" ? error.data : detail);
  } else if (error instanceof Error) {
    detail = error.message;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-6 text-center text-white">
      <div className="w-full max-w-md rounded-lg border border-[#46376d]/30 bg-[#46376d]/20 p-8 shadow-xl backdrop-blur-md">
        <p className="mb-2 text-sm font-medium tracking-wide text-[#c9b8e8]">
          Oops
        </p>
        <h1 className="mb-3 text-3xl font-semibold text-white">{title}</h1>
        <p className="mb-8 text-lg leading-relaxed text-white/70">{detail}</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#46376d] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#372b56]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
