import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center font-sans">
      <main className="flex w-full max-w-4xl flex-col items-start gap-6 px-6 py-16">
        <div>
          <h1 className="text-foreground text-3xl font-semibold tracking-tight">
            Inventory Dashboard
          </h1>
          <p className="text-muted mt-2 text-base">
            This is the main dashboard where inventory statistics will be
            displayed.
          </p>
        </div>
        <Link
          href="/inventory/product"
          className="bg-primary text-surface hover:bg-accent inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
        >
          Go to Products
        </Link>
      </main>
    </div>
  );
}
