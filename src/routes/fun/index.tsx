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
        <h2 id="xtremeXmasCode">Xtreme Xmas Code</h2>
        <img
          src="/xtreme-xmas-code.webp"
          alt="A knitted star pattern representing Xtreme Xmas Code"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.xtremexmascode.com/"
          class="button"
        >
          Check out Xtreme Xmas Code!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/xtreme-xmas-code"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
        <p>
          Have you ever been savoring your Advent Of Code calendar, keyboard
          dusted with sugar cookie crumbles, reindeer curled at your feet, and
          found yourself wishing the puzzles were wilder? More challenging? MORE
          XTREME??
        </p>
        <p>Well ho-ho-hold that thought because this is the mod for you!</p>
        <p>
          <em>Xtreme Xmas Code</em> is a mod/companion app for{" "}
          <a href="https://adventofcode.com/" class="link">
            Advent of Code
          </a>
          , a delightful{" "}
          <a href="https://en.wikipedia.org/wiki/Advent_calendar" class="link">
            Advent calendar
          </a>{" "}
          of small programming puzzles created by{" "}
          <a href="http://was.tl/" class="link">
            Eric Wastl
          </a>
          . With it you can record your Advent of Code progress and each day get
          an additional modifier to that day's AoC puzzle. For example, you may
          be challenged to complete that day's puzzle using a language you've
          never used before, or without reassigning any variables.
        </p>
        <p>
          Additionally, the mod scores each game based on how you use your
          reroll tokens and provides leaderboards for ranking games based on
          this score. I hope this will provide a brain-stretching leaderboard
          experience{" "}
          <a
            href="https://www.reddit.com/r/adventofcode/comments/e2wjhf/comment/f90ksek/"
            class="link"
          >
            that isn't tied to a strict time schedule
          </a>
          .
        </p>
        <h2 id="starCrossed">StarCrossed</h2>
        <img
          src="/starCrossedLogo.webp"
          alt="An array of stars in a heart shape"
        />
        <Link class="button" href="star-crossed">
          Check out StarCrossed!
        </Link>
        <a
          class="button invertedButton"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/star-crossed"
        >
          View source on GitHub
        </a>
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
          look at together through a telescope
        </p>
        <h2 id="namagen">Namagen</h2>
        <img
          class="tempLogo"
          src="/peli_hype_centered.webp"
          alt="Peli, the Far Reach Co. mascot, showing excitement)"
        />
        <Link class="button" href="namagen">
          Check out Namagen!
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Far-Reach-Co/namagen"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
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
        <h2 id="buddhASketch">Buddh-A-Sketch</h2>
        <img
          src="/favicon.webp"
          alt="A rainbow heart made with Buddh-A-Sketch"
        />{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kabeech.github.io/buddh-a-sketch/"
          class="button"
        >
          Check out Buddh-A-Sketch!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/buddh-a-sketch"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
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
        <h2 id="flower">Fractal Flower</h2>
        <img src="/flower15.webp" alt="A fractal flower budding" />
        <Link class="button" href="flower?pride=true">
          Check out the Flower!
        </Link>
        <a
          class="button invertedButton"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/kaBeech-website/tree/main/src/routes/fun/flower"
        >
          View source on GitHub
        </a>
        <p>
          An enchanting interactive animation that I remixed. The original
          version was made by the Qwik team{" "}
          <Link class="link" href="/tech/poqd#frontend">
            (more info on Qwik here)
          </Link>{" "}
          as an exhibition showing how fast Qwik can be at loading reactive
          components
        </p>
        <p>
          I tweaked the colors and added the 'Romanesca' and 'Helix' visualizer
          modes. Be sure to play with the slider at the top and try the
          different modes using the icons at the bottom!
        </p>
        <h2 id="alLughaMisma">Al Lugha Misma</h2>
        <img
          class="tempLogo"
          src="/icons/alLughaMismaColorized2.webp"
          alt="The Al Lugha Misma logo (a calligraphic representation of 'Al Lugha Misma' in mixed Naskh and Devanagari script"
        />
        <Link class="button" href="al-lugha-misma">
          Check out Al Lugha Misma!
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/al-lugha-misma"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
        <p>You say "potato" (English), and I say "baTaaTaa" (Arabic)</p>
        <p>Or "papa" (Spanish)!</p>
        <p>
          This is a comparative linguistics game celebrating similarities (and
          differences!) in words across languages
        </p>
        <p>
          Al Lugha Misma is under construction and currently only has an
          information page and legends database available on this site. But if
          you'd like to learn more about the project and browse some fun words,
          you're more than welcome to check it out!
        </p>
        <h2 id="ticTacToebot">Tic-Tac-Toebot</h2>
        <img
          src="/tic-tac-toebot.webp"
          alt="A snapshot of the Tic-Tac-Toebot"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kabeech.github.io/tic-tac-toebot/"
          class="button"
        >
          Check out Tic-Tac-Toebot!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/tic-tac-toebot"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
        <p>A robot that plays Tic-Tac-Toe!</p>
        <p>
          My friend Andy thinks he can beat the Unbeatable Master. I think he
          thinks I spent more time on the AI than I did. If you feel like John
          Henrying it up with him, go on and set the difficulty to 'Impossible'
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
            fullMessage:
              "I'm a big logic nerd like you - show me Xtreme Xmas Code!",
            linkTile: linkTiles.projects_xtremeXmasCode,
            jumpTo: "#xtremeXmasCode",
          },
          {
            fullMessage: "Let's look at the stars!",
            linkTile: linkTiles.fun_starCrossed,
            jumpTo: "#starCrossed",
          },
          {
            fullMessage: "Ooh! I wanna try that fantasy name generator!",
            linkTile: linkTiles.fun_namagen,
            jumpTo: "#namagen",
          },
          {
            fullMessage: "A nostalgic zen art toy? Yes please!",
            linkTile: linkTiles.fun_buddhASketch,
            jumpTo: "#buddhASketch",
          },
          {
            fullMessage: "Show me that cool fractal flower!",
            linkTile: linkTiles.fun_flower,
            jumpTo: "#flower",
          },
          {
            fullMessage: "I'd like to learn more about Al Lugha Misma",
            linkTile: linkTiles.fun_alLughaMisma,
            jumpTo: "#alLughaMisma",
          },
          {
            fullMessage: "I fancy a game of Tic-Tac-Toe!",
            linkTile: linkTiles.fun_ticTacToebot,
            jumpTo: "#ticTacToebot",
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
