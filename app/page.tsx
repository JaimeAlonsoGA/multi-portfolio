import Title from "@/components/ui/title";
import { CODE_TEXT } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-row gap-4 text-sm text-gray-500 text-center">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
      <Title title="Jaime Alonso" />
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">Creating captivating audio experiences.
          <code className={CODE_TEXT}>
            interactive media
          </code></li>
        <li className="mb-2">Developing cutting-edge cross-platform applications.
          <code className={"bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"}>
            software
          </code>
        </li>
      </ol>
    </main>
  );
}

{/* <li>
  Currently working at{" "}
  <code className={CODE_TEXT}>
    undefined
  </code>
</li> */}