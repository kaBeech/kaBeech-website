import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
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
            Check out Buddh-A-Sketch!
          </Link>
        </button>
        <p>
          This started as an emulation of a classic drawing toy and evolved to
          include functionality for meditative practice. Then I added
          ever-mutating neon black colors because it's fun!
        </p>
        <p>
          This is one of my first JavaScript projects, and still one of my
          favorites. Currently it requires a mouse to use. It's not very
          sophisticated, but it's a lot of fun and I love it!
        </p>
        <h2>Fractal Flower</h2>
        <img src="/flower.svg" alt="A fractal flower budding" />
        <button>
          <Link href="flower?pride=true">Check out the Flower!</Link>
        </button>
        <p>
          An enchanting interactive animation that I remixed. The original
          version was made by the Qwik team{" "}
          <Link class="link" href="/tech/poqd#Qwik">
            (more info on Qwik here)
          </Link>{" "}
          as an exhibition showing how fast Qwik can be at loading reactive
          components
        </p>
        <h2>Tic-Tac-Toebot</h2>
        <img src="/tic-tac-toebot.png" alt="A snapshot of the Tic-Tac-Toebot" />
        <button>
          <Link href="https://kabeech.github.io/tic-tac-toebot/">
            Check out Tic-Tac-Toebot!
          </Link>
        </button>
        <p>A robot that plays Tic-Tac-Toe!</p>
        <p>
          My friend Andy thinks he can beat the Unbeatable Master. I think he
          thinks I spent more time on the AI than I did. If you feel like John
          Henrying it up with him, go on and set the difficulty to Impossible
        </p>
        <h2>Advent Of Code</h2>
        <img
          src="/adventOfCode.png"
          alt="A star representing the Advent Of Code"
        />
        <button>
          <Link href="https://github.com/kaBeech/Advent-Of-Code-2022">
            Check out Advent Of Code!
          </Link>
        </button>
        <p>Real holiday fun!</p>
        <p>
          Every year,{" "}
          <Link class="link" href="https://twitter.com/ericwastl">
            some blessed individual
          </Link>{" "}
          comes up with a holiday-themed adventure based on a series of logic
          puzzles. Each day in December leading up to Christmas, one challenge
          (and one piece of the story) is revealed. If you can solve that
          challenge, a bit of the story is unravelled and the next day's
          challenge is unlocked for you
        </p>
        <p>
          If you're a big logic nerd like me this will become one of your
          favorite winter traditions!
        </p>
        <p>
          The link above will go to my repository of solutions to the
          challenges. If you want to take a crack at the challenges yourself,{" "}
          <Link class="link" href="https://adventofcode.com/">
            here's a direct link to the homepage
          </Link>
        </p>
        <p>
          You may notice that I haven't finished the whole calendar for 2022.
          That's true - my life got very busy all of a sudden this winter. But
          I'm proud of my work, and I very much look forward to completing the
          challenges when I have more spare time!
        </p>
        <h2>Al Lugha Misma</h2>
        <img
          class="tempLogo"
          src="/icons/happy-outline.svg"
          alt="A smiling face (used as a placeholder for the Al Lugha Misma logo)"
        />
        <button>
          <Link href="al-lugha-misma">Check out Al Lugha Misma!</Link>
        </button>
        <p>You like "potato (English)," and I like "baTaaTaa (Arabic)"</p>
        <p>Or "papa (Spanish)!"</p>
        <p>
          This is a comparative linguistics game playing with similarities in
          words across languages
        </p>
        <p>
          Al Lugha Misma is under construction and currently only has an
          information page on this site. But if you'd like to learn more about
          the project, feel free to check it out!
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back"}
          </Link>{" "}
        </p>
        <h2>Namagen</h2>
        <img
          class="tempLogo"
          src="/icons/happy-outline.svg"
          alt="A smiling face (used as a placeholder for the Namagen or Far Reach Co logo)"
        />
        <button>
          <Link href="namagen">Check out Namagen!</Link>
        </button>
        <p>
          Namagen randomly generates names in constructed languages. It is
          intended for use in roleplaying games, but I suppose it could also be
          used to suggest baby names!
        </p>
        <p>
          It also serves as an example of how a Web Assembly application built
          with Rust can be integrated into a JavaSctipt environment
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back"}
          </Link>{" "}
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage: "A nostalgic zen flow toy? Yes please!",
            linkTile: linkTiles.fun_buddhASketch,
          },
          {
            fullMessage: "Show me that cool fractal flower!",
            linkTile: linkTiles.fun_flower,
          },
          {
            fullMessage: "I fancy a game of Tic-Tac-Toe!",
            linkTile: linkTiles.fun_ticTacToebot,
          },
          {
            fullMessage:
              "I'm a big logic nerd like you - lemme see your solutions for Advent Of Code 2022!",
            linkTile: linkTiles.fun_adventOfCode,
          },
          {
            fullMessage:
              "I'd like to learn more about Al Lugha Misma (I understand it's not implemented yet)",
            linkTile: linkTiles.fun_alLughaMisma,
          },
          {
            fullMessage: "Ooh! I wanna try that fantasy name generator!",
            linkTile: linkTiles.fun_namagen,
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
  title: "kaBeech - Fun and Games!",
  meta: [
    {
      name: "description",
      content: "Fun and Games!",
    },
  ],
};
