import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
          <li className="mt-2">
            <a href="/week-3" className="text-blue-600 hover:underline">
              Week 3 Assignment: Shopping List App
            </a>
          </li>
          <li className="mt-2">
            <a href="/week-4" className="text-blue-600 hover:underline">
              Week 4 Assignment: Quantity Increment and Decrement
            </a>
          </li>
          <li className="mt-2">
            <a href="/week-5" className="text-blue-600 hover:underline">
              Week 5 Assignment: Add New Item Form
            </a>
          </li>
          <li className="mt-2">
            <a href="/week-6" className="text-blue-600 hover:underline">
              Week 6 Assignment: Advanced Features
            </a>
          </li>
          <li className="mt-2">
            <a href="/week-7" className="text-blue-600 hover:underline">
              Week 7 Assignment: New Functionalities
            </a>
          </li>
          <li className="mt-2">
            <a href="/week-8" className="text-blue-600 hover:underline">
              Week 8 Assignment: Additional Improvements
            </a>
          </li>
          <li className="mt-2">
            <a href="/week-9" className="text-blue-600 hover:underline">
              Week 9 Assignment: outh app
            </a>
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
