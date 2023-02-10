import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import styles from "./fun.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Fun and Games!</h1>
        <p>Here are some cool things I've made!</p>
        <p>
          Be sure to read the descriptions, as some are still works in progress
        </p>
        <h3>
          Scroll down or use the response buttons below to check them out!
        </h3>
        <h2>Buddh-A-Sketch</h2>
        <img
          src="/favicon.png"
          alt="A rainbow heart made with Buddh-A-Sketch"
        />
        <button>
          <Link href="https://kabeech.github.io/buddh-a-sketch/">
            Check it out!
          </Link>
        </button>
        <p>
          This started as an emulation of a classic drawing toy and evolved to
          include functionality for meditative practice. Then I added
          ever-mutating neon black colors because it's fun!
        </p>
        <p>
          This is one of my first JavaScript projects, and still one of my
          favorites. It's not very sophisticated, but it's a lot of fun and I
          love it!
        </p>
        <h2>Fractal Flower</h2>
        <img src="/flower.svg" alt="A fractal flower budding" />
        <button>
          <Link href="/flower?pride=true">Check it out!</Link>
        </button>
        <p>
          An enchanting interactive animation that I remixed. The original
          version was made by the Qwik team{" "}
          <Link class="link" href="/tech#Qwik">
            (more info on Qwik here)
          </Link>{" "}
          as an exhibition showing how fast Qwik can be at loading reactive
          components
        </p>
        <h2>Tic-Tac-Toebot</h2>
        <img src="/tic-tac-toebot.png" alt="A snapshot of the Tic-Tac-Toebot" />
        <button>
          <Link href="https://kabeech.github.io/tic-tac-toebot/">
            Check it out!
          </Link>
        </button>
        <p>A robot that plays Tic-Tac-Toe!</p>
        <p>
          My friend Andy thinks he can beat the Unbeatable Master. I think he
          thinks I spent more time on the AI than I did. If you feel like John
          Henrying it up with him, go on and set the difficulty to Impossible
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            responseShort: "Buddh-A-Sketch",
            responseLong: "A nostalgic zen flow toy? Yes please!",
            linkPath: "https://kabeech.github.io/buddh-a-sketch/",
          },
          {
            responseShort: "Flower",
            responseLong: "Show me that cool fractal flower!",
            linkPath: "/flower?pride=true",
          },
          {
            responseShort: "Tic-Tac-Toebot",
            responseLong: "I fancy a game of Tic-Tac-Toe!",
            linkPath: "https://kabeech.github.io/tic-tac-toebot/",
          },
          {
            responseShort: "Back",
            responseLong: "Actually, there's something else I want to ask...",
            linkPath: "/",
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - Fun and Games!",
  meta: [
    {
      name: "description",
      content: "Fun and Games!",
    },
  ],
};
