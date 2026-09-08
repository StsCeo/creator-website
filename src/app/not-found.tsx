import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not in this prototype</h1>
      <p className="mt-3 text-sm text-muted">
        That route is not part of the mock marketplace.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold underline">
        Back to discovery
      </Link>
    </div>
  );
}
