import Link from "next/link";
import { Back } from "../buttons";
import tools from "./tools.mp4";
import hello from "./hello.mp4";

const code = `const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
`;

export default function Try() {
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
        <h1 className={`text-6xl font-semibold`}>Try</h1>
      </div>

      <div className="flex flex-col w-1/2">
        <h2 className="text-xl mb-2">How to "Hello, World!"</h2>
        <div className="mb-2">
          <p>
            The purpose of "Hello, World!" is to set up your computer to read,
            write, edit, and execute code. By simply displaying that text on the
            screen we have evidence that our coding environment is set up and
            ready (enough) to move forward.
          </p>
        </div>
        <div>
          1. Install VSCode. Or don't, it's full of Microsoft trackers that are
          enabled by default. Thanks to the miracle of FOSS (Free and Open
          Source Software), there is a fork that has all the trackers removed.{" "}
          <Link href="https://vscodium.com/">
            Download and install it from https://vscodium.com/
          </Link>
        </div>
        <div>
          2. Install NodeJS. The front-end web is JavaScript so why not use it
          for your back-end too?{" "}
          <Link href="https://nodejs.org/en">
            Download and install the "LTS release" from https://nodejs.org/en
          </Link>
        </div>
        <div>
          3. Install some helpful tools. Prettier is a code formatter, it helps
          keep your code visually consistant for easier reading and sharing.
          ESLint is a static code analysis tool that will help you fix problems
          in your code before you even run it.
          <video controls src={tools} />
        </div>
        <div>
          6. Hello, World! <video controls src={hello} />
          <pre className="bg-slate-200 m-2">{code}</pre>
        </div>
        <div>Congratulations, you've created a web app with JavaScript!</div>
      </div>
    </main>
  );
}
