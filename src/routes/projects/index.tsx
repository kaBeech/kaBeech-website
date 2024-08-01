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
        <p>Here are some cool projects I've worked on!</p>
        <h2 id="tensort">Tensort</h2>
        <img
          src="/tensort.webp"
          alt="An octohegonal fractal representing Tensort"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/tensort?tab=readme-ov-file#tensort-"
          class="button"
        >
          Check out Tensort!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/tensort"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
        <p>Tunable sorting for responsive robustness and beyond!</p>
        <p>
          Tensort is a tensor-based sorting algorithm I wrote after reading
          David H. Ackley's {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/tensort?tab=readme-ov-file#tensort-"
            class="link"
          >
            Beyond Efficiency
          </a>{" "}(and listening to Future Of Coding's {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://futureofcoding.org/episodes/070"
            class="link"
          >
            podcast episode
          </a> {" "}
          about it).
        </p>
        <p>
          This project started as an exploration of what a sorting algorithm
          that prioritizes robustness might look like, but the resulting
          algorithm could be capable of much more.
        </p>
        <p>
          Simply put, Tensort takes an input list, transforms the list into a
          tensor field, then transforms the tensor field back into a sorted
          list. These transformations provide opportunities to increase
          redundancy for improved robustness and can be leveraged to include
          any further processing we wish to do on the elements.
        </p>
        <p>
          If that gets your gears humming, head over to{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/tensort?tab=readme-ov-file#tensort-"
            class="link"
          >
            GitHub
          </a>{" "}
          for the full paper!
        </p>
        <h2 id="guideMe">GuideMe</h2>
        <img
          src="/guideme.webp"
          alt="A guide on how to play chess from GuideMe"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/guideme?tab=readme-ov-file#guideme-"
          class="button"
        >
          Check out GuideMe!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/guideme"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
        <p>Simple declarative knowledge enhancement</p>
        <p>
          At work I was tired of inscrutable, out-of-date
          knowledge base articles across multiple formats. I wanted
          something that gave immediate, high-level information (including
          visual examples) while allowing users to drill down into
          greater detail when needed.
        </p>
        <p>
          GuideMe is what I built in response. It takes a declarative approach,
          assuming that users know the basics of their job and displaying
          simple step-by-step guides. If a user needs more information
          on a step, they can click through for a guide on that step in detail.
        </p>
        <p>
          When new users come onto a team (or existing users are given more
          responsibility), team leaders can assign them specific guides to
          study, which the users can mark as reviewed once they've read them.
          As information changes, guides can be updated and users can be
          notified that there is new information to review
        </p>
        <p>
          I have ADHD and personally I find this format very helpful for
          absorbing new information and jogging my memory while maintaining
          my focus on the task at hand. You can try it out for yourself by
          downloading the source from {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaBeech/guideme"
            class="link"
          >
            GitHub
          </a>
          !
        </p>
        <h2 id="audiopile">Audiopile</h2>
        <img
          src="/waveform.webp"
          alt="The Audiopile logo - overlapping multicolored sine waves"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.audiopile.cloud/"
          class="button"
        >
          Check out Audiopile!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/fogg4444/audiopile_master"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
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
        <h2 id="real-dice">Real* Dice*</h2>
        <img
          src="/real-dice.webp"
          alt="A computer drawing of a die using a marble texture representing Real* Dice*"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/real-dice?tab=readme-ov-file#real-dice-"
          class="button"
        >
          Check out Real* Dice*!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kaBeech/real-dice"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
        <p>
          Random number generation based on physical media touched by humans
        </p>
        <p>
          Sometimes the digital world can feel cold and sterile compared to the
          messy and unpredictable nature of our physical environment. Purely
          functional languages like Haskell are, for better and for worse,
          particularly susceptible to this digital de-messification
        </p>
        <p>

          In celebration of Haskell's determinative nature, this package
          provides random data from my interaction with the physical world as
          well as utilities to leverage this data for random number generation
          and other RNG-based tasks
        </p>
        <p>
          This package can be used to bring a human touch to our digital world!
        </p>
        <h2 id="wyrldDashboard">Wyrld Dashboard</h2>
        <img
          src="/peli_book_smaller.webp"
          alt="Peli, the Far Reach Co. mascot, holding a book"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://farreachco.com/"
          class="button"
        >
          Check out Wyrld Dashboard!
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Far-Reach-Co/dm-dash"
          class="button invertedButton"
        >
          View source on GitHub
        </a>
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
          <Link class="link margin1" href="../">
            {"<-- Back to Home"}
          </Link>{" "}
        </p>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage:
              "Tensort sounds fascinating!",
            linkTile: linkTiles.projects_tensort,
            jumpTo: "#tensort",
          },
          {
            fullMessage:
              "Ooh! I've been looking for a simple audio sharing tool!",
            linkTile: linkTiles.projects_audiopile,
            jumpTo: "#audiopile",
          },
          {
            fullMessage:
              "I want to check out GuideMe!",
            linkTile: linkTiles.projects_guideMe,
            jumpTo: "#guideMe",
          },
          {
            fullMessage: "Time to play some D&D!!!",
            linkTile: linkTiles.projects_wyrldDashboard,
            jumpTo: "#wyrldDashboard",
          },
          {
            fullMessage:
              "Now just how Real* are these Dice*?",
            linkTile: linkTiles.projects_realDice,
            jumpTo: "#real-dice",
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
