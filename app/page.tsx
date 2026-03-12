import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex w-full max-w-4xl flex-col items-start gap-6 px-6 py-16">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Inventory Dashboard
          </h1>
          <p className="mt-2 text-base text-zinc-600">
            This is the main dashboard where inventory statistics will be
            displayed.
          </p>
        </div>
        <Link
          href="/inventory/product"
          className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Go to Products
        </Link>
      </main>
    </div>
  );
}
