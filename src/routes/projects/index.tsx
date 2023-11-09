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
        <h2 id="xtremeXmasCode">Xtreme Xmas Code</h2>
        <img
          src="/xtreme-xmas-code.webp"
          alt="A knitted star pattern representing Xtreme Xmas Code"
        />
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.xtremexmascode.com/"
          >
            Check out Xtreme Xmas Code!
          </a>
        </button>
        <button class="invertedButton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/xtreme-xmas-code"
          >
            View source on GitHub
          </a>
        </button>
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
              "I'm a big logic nerd like you - let's go to Xtreme Xmas Code!",
            linkTile: linkTiles.projects_xtremeXmasCode,
            jumpTo: "#xtremeXmasCode",
          },
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
