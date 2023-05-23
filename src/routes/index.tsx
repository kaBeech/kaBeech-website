import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Welcome!</h1>
        <p>Welcome to kaBeech, Kyle Beechly's personal website</p>
        <p>
          My name is Beechy, and I'll be your guide here. I'm glad to meet you!
        </p>
        <h3>What would you like to do?</h3>
        <p>
          Please help me direct your experience by choosing a response below.
          <strong>
            {" "}
            Just click or tap a button at the bottom of the screen!
          </strong>
        </p>
        <p>
          Alternatively, you can click a link in the text below or use the
          hamburger button in the upper right
        </p>
        <h4>If you are interested, I can:</h4>
        <ul>
          <li class="margin1">
            - Show you{" "}
            <Link class="link" href="/fun">
              some fun toys
            </Link>{" "}
          </li>
          <li class="margin1">
            -{" "}
            <Link class="link" href="/about-me">
              Talk about myself
            </Link>{" "}
          </li>
          <li class="margin1">
            - Tell you about the{" "}
            <Link class="link" href="/tech">
              tech used to build this website
            </Link>{" "}
          </li>
          <li class="margin1">
            - Show you{" "}
            <Link class="link" href="/projects">
              some other projects I've worked on
            </Link>{" "}
          </li>
          <li class="margin1">
            - Give you my virtual business card (
            <Link class="link" href="/contact">
              Contact Info
            </Link>
            )
          </li>
        </ul>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage:
              "I'm just having fun. Do you have anything cool to play with?",
            linkTile: linkTiles.fun,
          },
          {
            fullMessage: "I'm interested in you - tell me about yourself!",
            linkTile: linkTiles.about,
          },
          {
            fullMessage:
              "Woah, this site is pretty cool! What did you use to build it?",
            linkTile: linkTiles.tech,
          },
          {
            fullMessage: "Show me some projects you've worked on!",
            linkTile: linkTiles.projects,
          },
          {
            fullMessage: "How can I get in touch with you?",
            linkTile: linkTiles.contact,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - Welcome!",
  meta: [
    {
      name: "description",
      content: "Welcome to my site!",
    },
  ],
};
