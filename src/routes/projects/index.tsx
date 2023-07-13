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
        <h2 id="audiopile">Audiopile</h2>
        <img
          src="/waveform.webp"
          alt="The Audiopile logo - overlapping multicolored sine waves"
        />
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.audiopile.cloud/"
          >
            Check out Audiopile!
          </a>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fogg4444/audiopile_master"
          >
            View source on GitHub
          </a>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://www.audiopile.cloud/"
          >
            Audiopile
          </a>
        </p>
        <h2 id="wyrldDashboard">Wyrld Dashboard</h2>
        <img
          src="/peli_book_smaller.webp"
          alt="Peli, the Far Reach Co. mascot, holding a book"
        />
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://farreachco.com/"
          >
            Check out Wyrld Dashboard!
          </a>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Far-Reach-Co/dm-dash"
          >
            View source on GitHub
          </a>
        </button>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://www.audiopile.cloud/"
          >
            Wyrld Dashboard
          </a>{" "}
          provides fast and unobtrusive cloud-based tools for tabletop
          role-playing games (RPGs) like Dungeons & Dragons
        </p>
        <p class="lazyMargin">
          Some of the tools we provide (or are planning to build) include:
        </p>
        <ul>
          <li class="margin1">
            - A database for holding and sharing information about RPG settings
            (worlds and their underlying rules)
          </li>
          <li class="margin1">
            - A user interface (UI) for game masters (GMs) to build and share
            custom RPG settings
          </li>
          <li class="margin1">
            - A UI for players to connect with the worlds shared by their GM and
            to create and control certain assets (i.e. their characters and
            personal notes)
          </li>
          <li class="margin1">
            - Tools (character sheets, dice, event trackers, etc.) for GMs and
            players to interact with their worlds
          </li>
          <li class="margin1">
            - A virtual table top application for sharing visual game
            information (such as maps, character position, and turn order)
          </li>
          <li class="margin1">
            - Tools for creating and sharing AI-generated portraits and maps
          </li>
          <li class="margin1">
            - An extensive (200+ pages) compendium of D&D-compatible content
          </li>
          <li class="margin1">
            - A framework in which other content creators can share, license,
            and profit from their work
          </li>
        </ul>
        <p>
          My partner Julian and I also use this project as an excuse to play
          with cool technology (for instance this is where we first started
          using the Rust programming language)
        </p>
        <h2 id="adventOfCode">Advent Of Code (My Personal Solutions)</h2>
        <img
          src="/adventOfCode.webp"
          alt="A star representing the Advent Of Code"
        />
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/Advent-Of-Code-2022"
          >
            Check out my Advent Of Code repo on GitHub!
          </a>
        </button>
        <p>Real holiday fun!</p>
        <p>
          Every year,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://twitter.com/ericwastl"
          >
            some blessed individual
          </a>{" "}
          comes up with a holiday-themed adventure based on a series of logic
          puzzles. Each day in December leading up to Christmas, one challenge
          (and one piece of the story) is revealed. If you can solve that
          challenge, a bit of the story is unraveled and the next day's
          challenge is unlocked for you
        </p>
        <p>
          If you're a big logic nerd like me this will become one of your
          favorite winter traditions!
        </p>
        <p>
          The link above will go to my repository of solutions to the
          challenges. If you want to take a crack at the challenges yourself,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://adventofcode.com/"
          >
            here's a direct link to the Advent Of Code homepage
          </a>
        </p>
        <p>
          My life got very busy all of a sudden this winter and I haven't yet
          finished the calendar for 2022. But I'm proud of my work, and I very
          much look forward to completing the challenges when I have more time
          to do so!
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Home"}
          </Link>{" "}
        </p>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage:
              "Ooh! I've been looking for a simple audio sharing tool!",
            linkTile: linkTiles.projects_audiopile,
            jumpTo: "#audiopile",
          },
          {
            fullMessage: "Time to play some D&D!!!",
            linkTile: linkTiles.projects_wyrldDashboard,
            jumpTo: "#wyrldDashboard",
          },
          {
            fullMessage:
              "I'm a big logic nerd like you - lemme see your solutions for Advent Of Code 2022!",
            linkTile: linkTiles.fun_adventOfCode,
            jumpTo: "#adventOfCode",
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
