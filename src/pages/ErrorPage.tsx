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
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-surface px-6 text-center text-ink">
      <div className="w-full max-w-md rounded-lg border border-[#9F438A]/30 bg-[#9F438A]/20 p-8 shadow-xl backdrop-blur-md">
        <p className="mb-2 text-sm font-medium tracking-wide text-brand-300">
          Oops
        </p>
        <h1 className="mb-3 text-3xl font-semibold text-ink">{title}</h1>
        <p className="mb-8 text-lg leading-relaxed text-ink/70">{detail}</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#9F438A] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#8A3878]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
