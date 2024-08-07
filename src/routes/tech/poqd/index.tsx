import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./poqd.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1 class="responseTextLight">What is the POQD stack?</h1>
        <p>
          This website is built using next-generation JavaScript software in a
          group (or 'stack') I like to call 'POQD'
        </p>
        <p>
          I first learned professional web development using a software stack
          known as MERN, which stands for 'MongoDB, Express, React, and
          Node.js'. The POQD stack is a similar concept using newer technology
          and stands for 'PostgreSQL, Oak, Qwik, and Deno'
        </p>
        <h1>Comparing MERN and POQD</h1>
        <table>
          <tbody>
            <tr>
              <td></td>
              <th>MERN</th>
              <th>POQD</th>
            </tr>
            <tr>
              <th>Database</th>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://www.mongodb.com/"
                >
                  MongoDB
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://www.postgresql.org/"
                >
                  PostgreSQL
                </a>
              </td>
            </tr>
            <tr>
              <th>Server</th>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://expressjs.com/"
                >
                  Express
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://oakserver.github.io/oak/"
                >
                  Oak
                </a>
              </td>
            </tr>
            <tr>
              <th>Frontend</th>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://react.dev/"
                >
                  React
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://qwik.builder.io/"
                >
                  Qwik
                </a>
              </td>
            </tr>
            <tr>
              <th>Runtime</th>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://nodejs.org/en"
                >
                  Node.js
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  href="https://deno.land/"
                >
                  Deno
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 id="database">Database</h2>
        <div class="flex">
          <div>
            <h3>MongoDB</h3>
            <p>Non-Relational (NoSQL) Database</p>
          </div>
          <div>
            <h3>PostgreSQL</h3>
            <p>Relational (SQL) Database</p>
          </div>
        </div>
        <h3 class="responseTextLight">Why PostgreSQL?</h3>
        <p>
          I'm a functional programmer. I like defining structure and
          having it to lean on. I'm just more comfortable with relational
          databases
        </p>
        <p>
          Posgres is free, open-source, runs on practically everything, and
          does everything I need it to do. Plus I like elephants
        </p>
        <h2 id="server">Server</h2>
        <div class="flex">
          <div>
            <h3>Express</h3>
            <p>Middleware framework for Node.js</p>
          </div>
          <div>
            <h3>Oak</h3>
            <p>Middleware framework for Deno</p>
          </div>
        </div>
        <h3 class="responseTextLight">Why Oak?</h3>
        <p>
          Oak does exactly what I want, when I want, and nothing else. It is a
          middleware framework, which means I can patch together functions to
          enhance the functionality of the runtime (in this case Deno) when I
          want to, and leave out unnecessary code when I don't
        </p>
        <p>
          This developer experience feels natural to me. It reminds me of
          chaining together guitar effects on a pedal board
        </p>
        <p>
          Now, the same is true for Express, but Oak is designed to be used with
          Deno! There are some nice things about the way Oak works (many
          inherited from its spiritual predecessor in Node,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://koajs.com/"
          >
            Koa
          </a>
          ), but at the end of the day, I mostly use Oak because it's the most
          widely-used and supported analog to Express in Deno Land
        </p>
        <h2 id="frontend">Frontend</h2>
        <div class="flex alignStart">
          <div>
            <h3>React</h3>
            <p>Unopinionated, component-based frontend JavaScript library</p>
            <h4>Next.js</h4>
            <p>
              Web development framework for React with opinionated routing. Uses
              server-side rendering to create static pages. Responsive web
              design is made possible by hydrating components
            </p>
          </div>
          <div>
            <h3>Qwik</h3>
            <p>
              Unopinionated, component-based frontend JavaScript framework. Uses
              server-side rendering to create static pages. Responsive web
              design is made possible through resumability
            </p>
            <h4>Qwik City</h4>
            <p>Web development framework for Qwik with opinionated routing</p>
          </div>
        </div>
        <h3 class="responseTextLight">Why Qwik?</h3>
        <p>Because it's fast! How is it so fast? Resumability!</p>
        <p>
          Traditional server-side rendered applications use a process called
          hydration to inject interactivity into static pages. Qwik takes a
          different approach by pausing interactive elements during execution on
          the server and sending them as serialized HTML to be resumed in the
          browser
        </p>
        <div class="flex alignStart">
          <div>
            <h4 class="responseTextLight">How does Hydration work?</h4>
            <p>(Used by Next.js)</p>
            <ol>
              <li>1. A static site is generated on the server</li>
              <li>
                2. When it's ready, the server sends three pieces of information
                (potentially as lots of JavaScript) to the client in order to
                run the application: the page's structure (Component Tree),
                what's currently on the page (Application State), and the bits
                of logic that respond to a user's interaction (Event Listeners)
              </li>{" "}
              <li>
                3. The client downloads the HTML for the page. This part is
                FAST!
              </li>
              <li>
                4. The client then downloads all the JavaScript. This can be a
                lot of JavaScript, which can take a while to download, so this
                part is SLOW!
              </li>
              <li>
                5. The client then parses all the JavaScript. That means the
                client looks at the JavaScript and has to figure out what the
                heck is going on. This can be a lot of JavaScript to understand,
                so this part is SLOW!
              </li>
              <li>
                6. The client then executes all the JavaScript. This means the
                client does what the JavaScript says to catch the page up to the
                point where the server had it. This can be a lot to do, so this
                part is SLOW!
              </li>
              <li>
                7. The client then binds all the Event Listeners to their
                respective pieces of code. The process of doing this is pretty
                quick, but there could potentially be a lot of Listeners, so
                we'll say this part is MEDIUM FAST!
              </li>
              <li>
                <strong>
                  8. At this point the user can view and interact with the
                  application
                </strong>
              </li>
            </ol>
          </div>
          <div>
            <h4 class="responseTextLight">How does Resumability work?</h4>
            <p>(Used by Qwik)</p>
            <ol>
              <li>1. A static site is generated on the server</li>
              <li>
                2. When it's ready, the server <strong>pauses</strong> execution
                of the code. It then takes all the JavaScript that would be sent
                to the client and serializes it (including its state) into HTML.
                Only this HTML gets sent to the client
              </li>
              <li>
                3. The client downloads this HTML from the server and displays
                it. Doing so, it <strong>resumes</strong> execution of the code
                in the browser, using the serialized JavaScript. This part is
                FAST!
              </li>
              <li>
                <strong>
                  4. At this point the user can view and interact with the
                  application
                </strong>
              </li>
              <li>
                5. If a part of the code is interactive, the necessary
                JavaScript is downloaded and run only right when it needs to be
              </li>
            </ol>
          </div>
        </div>
        <h2 id="runtime">Runtime</h2>
        <div class="flex alignStart">
          <div>
            <h3>Node.js</h3>
            <p>
              Backend JavaScript runtime environment created by Ryan Dahl in
              2009. Commonly used with a package manager like npm or Yarn.
              Written in C
            </p>
          </div>
          <div>
            <h3>Deno</h3>
            <p>
              Backend JavaScript/TypeScript runtime environment and package
              manager created by Ryan Dahl in 2018. Written in Rust
            </p>
          </div>
        </div>
        <h3 class="responseTextLight">Why Deno?</h3>
        <p>
          Fast, secure, robust. Less configuring, more doing. Typescript works
          right out of the box!
        </p>
        <p>
          For example, Deno assumes that it doesn't have permission to do pretty
          much anything without asking. Consent is sexy, including in data
          privacy and security. Deno supports ES Modules by default rather than
          CommonJS, which encourages future-facing development. Deno caches
          needed dependencies on your file system, doing away with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://javascript.plainenglish.io/node-js-esm-npm-yarn-deep-dive-adda15dabce#cb91"
          >
            super-dense node_modules directories
          </a>{" "}
        </p>
        <p>
          Deno is created by the same person who created the industry standard
          runtime that it replaces and it's supported by a thriving, passionate
          community. It's already being adopted by industry leaders like{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://www.netlify.com/products/#netlify-edge-functions"
          >
            Netlify
          </a>
          , who uses it to power their{" "}
          <Link class="link" href="/tech/edge">
            edge functions
          </Link>
          . Competing with Node is an ambitious task, but Deno is here to stay
        </p>
        <p>
          Now, all that being said, the Number One reason I use Deno is...
          because I'm lazy
        </p>
        <p>
          When I start building a project, I don't want to spend time setting up
          my linter, formatter, test runner, and TypeScript compiler. I want to
          work on my project!
        </p>
        <p>
          Thankfully, Deno takes care of all of that for me and I can start
          building{" "}
          <Link class="link" href="/fun/al-lugha-misma">
            silly language games
          </Link>{" "}
          right away!
        </p>
        <h1 id="why-poqd">Summary</h1>
        <h2 class="responseTextLight nutshell">
          Okay, but give it to me in a nutshell. Why do you use POQD?
        </h2>
        <h3 class="summaryPoint">1. It's Accessible for Developers</h3>
        <p>
          I value tools that enable me to start working right away. The less
          time I have to use at the start of a new project to configure my setup
          and learn new methods of doing things, the better. Getting to focus on
          the meat of my project quickly pays dividends
        </p>
        <p>
          POQD has a low configuration overhead. Instead of having to set up a
          TypeScript compiler, a linter, a package manager, a bundler, and so
          forth, it's already built in!
        </p>
        <p>
          POQD is easy to learn! The next-generation software it uses was
          designed to be familiar to those using software in the MERN stack. If
          you're comfortable with MERN, you're most of the way there already!
        </p>
        <h3 class="summaryPoint">2. It's Performant</h3>
        <p>
          Sites built with POQD can be fast.
          Go ahead and click around this site. See how much time you spend
          waiting for a page to load. Run a Lighthouse test (Performance usually
          hovers close to 100 for me). There may not be many fancy bells and
          whistles here yet, but I have more content planned that will
          demonstrate further how quick and responsive it is. To get a taste for
          now, try{" "}
          <Link class="link" href="/fun/flower?pride=true">
            playing around with this flower
          </Link>
        </p>
        <h3 class="summaryPoint">3. It's Smart</h3>
        <p>
          The software in POQD is built in a way that encourages good coding
          practices. I'll give a couple examples:
        </p>
        <p>
          <strong>Example 1:</strong> Deno only supports URLs for loading
          dependencies (as opposed to Node, which supports both URLs and
          modules). Why would I want to use a tool that does less things? Well,
          (perhaps obviously), browsers also only support URLs. Using a runtime
          that loads dependencies in the same way a browser does forces me to
          write code that is more easily consumable by browsers
        </p>
        <p>
          Maybe the code I'm writing isn't expected to run on a browser. But we
          all know that plans evolve, and writing code this way allows me to be
          more modular in case a browser may want to consume my code someday
        </p>
        <p>
          <strong>Example 2:</strong> Deno restricts file system and network
          access by default. That means if I use Deno to run a program that
          sends information over my network (without explicitly saying it can do
          that), Deno will ask first before sending any info. This may be a
          small annoyance if you forget to allow permission - and 'deno run
          --allow-read --allow-net app' may be more keystrokes than 'npm run
          app' - but the peace of mind knowing I won't accidentally send data
          where I don't mean to is worth it to me
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Tech"}
          </Link>{" "}
        </p>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage: "I want to learn more about PostgreSQL",
            linkTile: linkTiles.poqd_postgres,
            jumpTo: "#database",
          },
          {
            fullMessage: "I want to learn more about Oak",
            linkTile: linkTiles.poqd_oak,
            jumpTo: "#server",
          },
          {
            fullMessage: "I want to learn more about Qwik",
            linkTile: linkTiles.poqd_qwik,
            jumpTo: "#frontend",
          },
          {
            fullMessage: "I want to learn more about Deno",
            linkTile: linkTiles.poqd_deno,
            jumpTo: "#runtime",
          },
          {
            fullMessage: "There's something else I want to ask...",
            linkTile: linkTiles.back,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "POQD Stack - kaBeech",
  meta: [
    {
      name: "description",
      content: "Information about the POQD stack of JavaScript software",
    },
  ],
};
