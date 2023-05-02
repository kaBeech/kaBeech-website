import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./projects.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Projects</h1>
        <p>Here are some cool things I've helped build!</p>
        <h3>
          Scroll down or use the response buttons below to check them out!
        </h3>
        <h2>Wyrld Dashboard</h2>
        <img
          src="/peli_book_smaller.PNG"
          alt="Peli, the Far Reach Co. mascot, holding a book"
        />
        <button>
          <Link href="https://farreachco.com/">Check out Wyrld Dashboard!</Link>
        </button>
        <p>
          Fast and unobtrusive cloud-based tools for tabletop roleplaying games
        </p>
        <p>Content coming soon!</p>
        <h2>Audiopile</h2>
        <img
          src="/waveform.png"
          alt="The Audiopile logo - overlapping multicolored sine waves"
        />
        <button>
          <Link href="https://www.audiopile.cloud/">Check out Audiopile!</Link>
        </button>
        <p>A simple, professional tool for managing audio in the cloud</p>
        <p>
          A question for all the musicians, podcasters, and other audio
          professionals of the world: How often do you want to privately share a
          piece of audio with specific people?
        </p>
        <p>
          Maybe it's a completed but unreleased track you're sending to a client
          for final approval. Maybe it's a recording of just your voice that
          you're sending to your collaborators to mix in to a final project. Or
          it's a project you've been working on that you're sending to a friend
          with fresh ears for an opinion. Heck, maybe it's just a tune that came
          to you in the shower that you recorded on your shower phone (people
          have those, right?) and want to listen to later on your studio
          computer.
        </p>
        <p>
          In any case, do you know how to get that audio from wherever it is now
          to wherever it needs to get to in a form that can be easily used?
        </p>
        <p>
          Now you do:{" "}
          <Link class="link" href="https://www.audiopile.cloud/">
            Audiopile
          </Link>
        </p>
        <h2>Advent Of Code (My Personal Solutions)</h2>
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
          My life got very busy all of a sudden this winter and I haven't yet
          finished the calendar for 2022. But I'm proud of my work, and I very
          much look forward to completing the challenges when I have more time
          to do so!
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
            fullMessage: "Time to play some D&D!!!",
            linkTile: linkTiles.projects_wyrldDashboard,
          },
          {
            fullMessage:
              "Ooh! I've been looking for a simple audio sharing tool!",
            linkTile: linkTiles.projects_audiopile,
          },
          {
            fullMessage:
              "I'm a big logic nerd like you - lemme see your solutions for Advent Of Code 2022!",
            linkTile: linkTiles.fun_adventOfCode,
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
  title: "kaBeech - Projects",
  meta: [
    {
      name: "description",
      content: "Some projects I've been involved with",
    },
  ],
};
