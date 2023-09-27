import Link from "next/link";
import { Back } from "../buttons";

export default function Deploy() {
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
        <h1 className={`text-6xl font-semibold`}>Deploy</h1>
      </div>

      <div className="flex flex-col w-1/2">
        <div className="m-4 align-center text-lg">
          Now it is time to do it all for yourself.{" "}
          <b>Your final project is to build a personal website.</b> This can be
          a portfolio of your work in and out of class, a blog, photo gallery,
          or something else. There is no step by step guide. The following is a
          list of resources for you to use that will help you on your journey.
          As a professional software developer I can attest that most of your
          time isn&apos;t spent coding and that years into your career you will
          still be Googling{" "}
          <i>&quot;how to do _____ in &lt;programming language&gt;&quot;</i>.
        </div>
        <div className="m-4 align-center text-lg">
          Google does better then Bing for me when it comes to searching for
          programming questions.
        </div>
        <div className="m-4 align-center text-lg">
          StackOverflow is a good tool but you must be careful when using code
          without understanding it. When you see something you don&apos;t know,
          <pre className="inline"> reduce() </pre>in JavaScript for eaxmple,
          searching for &quot;javascript reduce&quot; will likely result in the
          top tow links being W3Schools and MDN. These are both excelent
          resources for how to use HTML, CSS, JavaScript. W3S is typically more
          succient and beginner friendly which contrasts with MDN providing
          extensive details and edge cases.
        </div>
        <div className="m-4 align-center text-lg">
          If you are using a backend like NextJS, GatsbyJS, or Express; the
          official documentation on the project&apos;s website is your best
          friend. There will at least be &quot;Installation&quot; and
          &quot;Getting Started&quot; guides in addition to documentation for
          all the library/framework features.
        </div>
        <div className="m-4 align-center text-lg">
          If you want to deploy your code online for free once it&apos;s done, I
          reccomend the following:{" "}
          <u>
            <Link href="https://education.github.com/benefits?type=student">
              create a free account with Github,{" "}
            </Link>
          </u>
          <u>
            <Link href="https://app.netlify.com/signup/email">
              create a free account with Netlify,{" "}
            </Link>
          </u>
          <u>
            <Link href="https://docs.github.com/en/get-started/quickstart/hello-world">
              learn how to use GitHub,{" "}
            </Link>
          </u>
          <u>
            <Link href="https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop">
              the desktop app is great for visual people,{" "}
            </Link>
          </u>
          <u>
            <Link href="https://docs.netlify.com/get-started/">
              and learn how to deploy an app with Netlify.
            </Link>
          </u>
        </div>
      </div>
    </main>
  );
}
