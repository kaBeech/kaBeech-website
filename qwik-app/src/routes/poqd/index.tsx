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
        <h1>What is the POQD stack?</h1>
        <p>
          This website was built using next-generation JavaScript software in a
          group (or 'stack') I like to call 'POQD'
        </p>
        <p>
          I first learned professional web development using a software stack
          known as MERN, which stands for 'MongoDB, Express, React, and
          Node.js'. POQD is very similar, and stands for 'PostgreSQL, Oak, Qwik,
          and Deno'
        </p>
        <h1>Comparing MERN and POQD</h1>
        <table>
          <tr>
            <th></th>
            <th>MERN</th>
            <th>POQD</th>
          </tr>
          <tr>
            <th>Database</th>
            <td>MongoDB</td>
            <td>PostgreSQL</td>
          </tr>{" "}
          <tr>
            <th>Backend</th>
            <td>Express</td>
            <td>Oak</td>
          </tr>{" "}
          <tr>
            <th>Frontend</th>
            <td>React</td>
            <td>Qwik</td>
          </tr>{" "}
          <tr>
            <th>Runtime</th>
            <td>Node.js</td>
            <td>Deno</td>
          </tr>
        </table>
        <h2>Database</h2>
        <div class="flex">
          <div>
            <h3>MongoDB</h3>
            <p>Non-Relational Database</p>
          </div>
          <div>
            <h3>PostgreSQL</h3>
            <p>Relational Database</p>
          </div>
        </div>
        <h3>Why PostgreSQL?</h3>
        <p>This might just be personal preference.</p>
        <h2>Backend</h2>
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
        <h3>Why Oak?</h3>
        <p>
          It does exactly what I want, when I want, and nothing else. The same
          is true for Express, but Oak is designed to be used with Deno!
        </p>
        <h2>Frontend</h2>
        <div class="flex">
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
            <p>Web development framework for Qwik with opinionated routing.</p>
          </div>
        </div>
        <h3>Why Qwik?</h3>
        <p>Because it's fast! How is it so fast? Resumability!</p>
        <div class="flex alignStart">
          <div>
            <h4>What is Hydration?</h4>
            <ol>
              <li>A static site is generated on the server</li>
              <li>
                When it's ready, the server sends three pieces of information
                (potentially as lots of JavaScript) to the client in order to
                run the application: the page's structure (Component Tree),
                what's currently on the page (Application State), and the bits
                of logic that respond to a user's interaction (Event Listeners)
              </li>{" "}
              <li>
                The client downloads the HTML and displays it. This part is
                FAST!
              </li>
              <li>
                The client then downloads all the JavaScript. This can be a lot
                of JavaScript and JavaScript takes a while to download, so this
                part is SLOW!
              </li>
              <li>
                The client then parses all the JavaScript. That means the client
                looks at the JavaScript and has to figure out what the heck is
                going on. This can be a lot of JavaScript to understand so this
                part is SLOW!
              </li>
              <li>
                The client then executes all the JavaScript. This means the
                client does what the JavaScript says to catch the page up to the
                point where the server had it. This can be a lot to do, so this
                part is SLOW!
              </li>
              <li>
                The client then binds all the Event Listeners to their
                respective pieces of code. The process of doing this is pretty
                quick, but there could potentially be a lot of Listeners, so
                we'll say this part is MEDIUM FAST!
              </li>
              <li>
                <strong>
                  At this point the user can view and intaract with the
                  application
                </strong>
              </li>
            </ol>
          </div>
          <div>
            <h4>What is Resumability?</h4>
            <ol>
              <li>A static site is generated on the server</li>
              <li>
                When it's ready, the server <strong>pauses</strong> execution of
                the code. It then takes all the JavaScript that would be sent to
                the client and serializes it (including its state) into HTML.
                Only this HTML gets sent to the client
              </li>
              <li>
                The client downloads this HTML from the server and displays it.
                Doing so, it <strong>resumes</strong> execution of the code in
                the browser, using the serialized JavaScript. This part is FAST!
              </li>
              <li>
                <strong>
                  At this point the user can view and intaract with the
                  application
                </strong>
              </li>
              <li>
                If a part of the code is interactible, the necessary JavaScript
                is downloaded and run only right when it needs to be
              </li>
            </ol>
          </div>
        </div>
        <h2>Runtime</h2>
        <div class="flex">
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
        <h3>Why Deno?</h3>
        <p>
          Fast, secure, robust. Less configuring, more doing. Typescript works
          right out of the box!
        </p>
        <h1>Why POQD?</h1>
        <p>Okay, but give it to me in a nutshell. Why do you use POQD?</p>
        <h2>1. It's Accessible for Developers</h2>
        <p>
          I value tools that enable me to start working right away. The less
          time I have to use at the start of a new project to configure my setup
          and learn new methods of doing things, the better. Getting to focus on
          the meat of my project quickly pays dividends
        </p>
        <p>
          POQD has a low configuation overhead. Instead of having to set up a
          TypeScript compiler, a linter, a package manager, a bundler, and so
          forth, it's already built in!
        </p>
        <p>
          POQD is easy to learn! The next-generation software it uses was
          designed to be familiar to those using software in the MERN stack. If
          you're comfortable with MERN, you're most of the way there already!
        </p>
        <h2>2. It's Performant</h2>
        <p>
          Sites built with POQD can be fast. Like really really fast. BLAZINGLY
          FAST, some might say
        </p>
        <p>
          Go ahead and click around this site. See how much time you spend
          waiting for a page to load. There may not be much here yet, but I have
          more impressive content planned to be up soon that will demonstrate
          further how quick and responsive it is. To get a taste for now, try{" "}
          <Link class="link" href="/fun/flower?pride=true">
            playing around with this flower
          </Link>
        </p>
        <h2>3. It's Smart</h2>
        <p>
          The software in POQD is built in a way that encourages good coding
          practices. I'll give a couple examples:
        </p>
        <p>
          <strong>Example 1:</strong> Deno only supports URLs for loading
          dependencies (as opposed to Node.js, which supports both URLs and
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
          <strong>Example 3:</strong>{" "}
          <Link class="link" href="/fun/flower?pride=true">
            Qwik uses symbolic slots
          </Link>
          . Qwik renders parents and children in perfect isolation. This means
          it can render the parent component without rerendering the children
          and vice versa.
        </p>
        <p>
          However, because slots are symbolic, the children can NOT be read or
          transformed by the components, like is possible in React. This means
          if you're a lazy kaBeech just hacking together a webpage real fast,
          you might hit a point where your mind is screaming "WHY CAN'T I JUST
          PASS THIS STATE IN TO EVERY POSSIBLE CHILD OF THIS SLOT COMPONENT THE
          WAY I CAN WITH REACT????"
        </p>
        <p>
          But after a minute (you are a very smart and beautiful kaBeech after
          all), you'll start to ask yourself "Okay, but why do I need to pass
          state to components that I haven't even built yet?" And then you'll
          realize that you could structure this in a more organized, more
          performant way
        </p>
        <p>I like tools that encourage me to grow ♡ </p>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage: "Actually, there's something else I want to ask...",
            linkTile: linkTiles.back,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - POQD Stack",
  meta: [
    {
      name: "description",
      content:
        "Information about the POQD stack of JavaScript software used to build this site",
    },
  ],
};
