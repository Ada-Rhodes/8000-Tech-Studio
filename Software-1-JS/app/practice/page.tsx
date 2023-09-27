import Link from "next/link";
import { Back } from "../buttons";

export default function Practice() {
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
        <h1 className={`text-6xl font-semibold`}>Practice</h1>
      </div>

      <div className="flex flex-col w-1/2">
        <div className="m-4 align-center text-lg">
          FreeCodeCamp is an amazing resource for learning how to develop
          websites and webapps. The following assignments will cover the basic
          concepts you need to get started.
        </div>
        <div className="m-4 align-center text-lg">
          Each link takes you directly to the first challenge in a series. To
          see the full series click the name of the assignment in the top right.
          I reccommend creating an account to save your progress.
        </div>
        <div className="m-4 align-center text-lg">
          1.{" "}
          <Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1">
            Learn HTML by Building a Cat Photo App
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          2.{" "}
          <Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1">
            Learn Basic CSS by Building a Cafe Menu
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          3.{" "}
          <Link href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code">
            Learn Basic JavaScript
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          4.{" "}
          <Link href="https://www.freecodecamp.org/learn/back-end-development-and-apis/managing-packages-with-npm/how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package">
            Learn how to Manage Packages with NPM
          </Link>
        </div>
        <div className="m-4 align-center text-lg">
          5.{" "}
          <Link href="https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/meet-the-node-console">
            Learn Basic Node and Express
          </Link>
        </div>
      </div>
    </main>
  );
}
