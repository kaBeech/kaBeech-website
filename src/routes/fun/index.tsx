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
        <h2>StarCrossed</h2>
        <img
          src="/starCrossedLogo.webp"
          alt="An array of stars in a heart shape"
        />
        <button>
          <Link href="star-crossed">Check out StarCrossed!</Link>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/star-crossed"
          >
            View source on GitHub
          </a>
        </button>
        <p>
          StarCrossed is a tool for finding a spot in the universe special to
          two people. I built it as an experiment with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://deno.com/kv"}
            class={`link`}
          >
            Deno KV
          </a>{" "}
          (an{" "}
          <Link class="link" href="/tech/edge">
            edge-enabled
          </Link>
          , globally distributed key-value store), as my entry in{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://deno.com/blog/deno-kv-hackathon"}
            class={`link`}
          >
            the Deno KV Hackathon
          </a>
        </p>
        <p>
          You can use it to check your compatibility with another person (based
          on your subjective opinion of what your stars look like), find a
          galactic make-out spot, or just discover a unique point in the sky to
          look at together through your telescope
        </p>
        <h2>Buddh-A-Sketch</h2>
        <img
          src="/favicon.webp"
          alt="A rainbow heart made with Buddh-A-Sketch"
        />
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://kabeech.github.io/buddh-a-sketch/"
          >
            Check out Buddh-A-Sketch!
          </a>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/buddh-a-sketch"
          >
            View source on GitHub
          </a>
        </button>
        <p>
          This started as an emulation of a classic drawing toy and evolved to
          include functionality for meditative practice. Then I added
          ever-mutating neon black colors because it looks cool
        </p>
        <p>
          This is one of my first JavaScript projects and still one of my
          favorites to play with. Currently it requires a mouse to use. It's not
          very sophisticated, but it's a lot of fun!
        </p>
        <h2>Namagen</h2>
        <img
          class="tempLogo"
          src="/peli_hype_centered.webp"
          alt="Peli, the Far Reach Co. mascot, showing excitement)"
        />
        <button>
          <Link href="namagen">Check out Namagen!</Link>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Far-Reach-Co/namagen"
          >
            View source on GitHub
          </a>
        </button>
        <p>
          Namagen randomly generates names in constructed languages. I built it
          for use in role-playing games (to integrate with the{" "}
          <Link class="link" href="/projects">
            Wyrld Dashboard
          </Link>{" "}
          suite of tools), but I suppose it could also be used to suggest baby
          names!
        </p>
        <p>
          It also serves as an example of how a WebAssembly application built
          with Rust can be integrated into a JavaScript environment
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
        <p>
          I tweaked the colors and added the 'Romanesca' and 'Helix' visualizer
          modes
        </p>
        <h2>Tic-Tac-Toebot</h2>
        <img
          src="/tic-tac-toebot.webp"
          alt="A snapshot of the Tic-Tac-Toebot"
        />
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://kabeech.github.io/tic-tac-toebot/"
          >
            Check out Tic-Tac-Toebot!
          </a>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/tic-tac-toebot"
          >
            View source on GitHub
          </a>
        </button>
        <p>A robot that plays Tic-Tac-Toe!</p>
        <p>
          My friend Andy thinks he can beat the Unbeatable Master. I think he
          thinks I spent more time on the AI than I did. If you feel like John
          Henrying it up with him, go on and set the difficulty to 'Impossible'
        </p>
        <h2>Al Lugha Misma</h2>
        <img
          class="tempLogo"
          src="/icons/alLughaMismaColorized2.webp"
          alt="The Al Lugha Misma logo (a calligraphic representation of 'Al Lugha Misma' in mixed Naskh and Devanagari script"
        />
        <button>
          <Link href="al-lugha-misma">Check out Al Lugha Misma!</Link>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/al-lugha-misma"
          >
            View source on GitHub
          </a>
        </button>
        <p>You say "potato" (English), and I say "baTaaTaa" (Arabic)</p>
        <p>Or "papa" (Spanish)!</p>
        <p>
          This is a comparative linguistics game celebrating similarities (and
          differences!) in words across languages
        </p>
        <p>
          Al Lugha Misma is under construction and currently only has an
          information page on this site. But if you'd like to learn more about
          the project, feel free to check it out!
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Home"}
          </Link>
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage: "Let's look at the stars!",
            linkTile: linkTiles.fun_starCrossed,
          },
          {
            fullMessage: "A nostalgic zen flow toy? Yes please!",
            linkTile: linkTiles.fun_buddhASketch,
          },
          {
            fullMessage: "Ooh! I wanna try that fantasy name generator!",
            linkTile: linkTiles.fun_namagen,
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
            fullMessage: "I'd like to learn more about Al Lugha Misma",
            linkTile: linkTiles.fun_alLughaMisma,
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
