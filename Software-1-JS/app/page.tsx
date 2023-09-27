import Image from "next/image";
import Link from "next/link";
import { Forward } from "./buttons";

// Yes, this is the default template for Next.js and I definitely kept all the styling.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="fixed left-0 top-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h3>ITIN 8000</h3>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h3>Josh Bowen</h3>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/javascript.png"
          alt="JavaScript Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className={`ml-3 mb-3 text-6xl font-semibold`}>Software Level 1</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Link href="/learn">
            <Forward text="Learn" />
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn the fundamentals of creating software for the web and how
              the internet works.
            </p>
          </Link>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Link href="/try">
            <Forward text="Try" />
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Walk through the steps of setting up a development environment and
              running code.
            </p>
          </Link>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Link href="/practice">
            <Forward text="Practice" />
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Everything you need to become a professional software developer is
              already online.
            </p>
          </Link>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Link href="/deploy">
            <Forward text="Deploy" />
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Your final project, how to create and host a personal website for
              free.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
