import Link from "next/link";
import { Back } from "../buttons";
import { FaReadme, FaYoutube } from "react-icons/fa";

export default function Learn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="fixed left-0 top-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/">
              <Back />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex place-items-center">
        <h1 className={`text-6xl font-semibold`}>Learn</h1>
      </div>

      <div className="flex flex-col p-5">
        <div className="m-4 align-center text-lg">
          1.
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work">
            <FaReadme className="inline mr-1 ml-1" />
            How does the internet work?
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          2.
          <Link href="https://www.youtube.com/watch?v=h8K49dD52WA">
            <FaYoutube className="inline mr-1 ml-1" />A brief history of the
            internet
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          3.
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines">
            <FaReadme className="inline mr-1 ml-1" />
            What is a website? A web app?
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          4.
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works">
            <FaReadme className="inline mr-1 ml-1" />
            How the web works
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          5.
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server">
            <FaReadme className="inline mr-1 ml-1" />
            What is a web server?
          </Link>
        </div>
      </div>
    </main>
  );
}
