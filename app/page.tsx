import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-row gap-4 text-sm text-gray-500 text-center">
        <Link href="/about">About</Link>
        <a>Projects</a>
      </div>
      <h1 className="font-bold text-8xl">Jaime Alonso</h1>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">Creating captivating audio experiences.</li>
        <li>
          Currently working at{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            undefined
          </code>
        </li>
      </ol>
    </main>
  );
}