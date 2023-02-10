import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { ResponseBar } from "~/components/responseBar/responseBar";
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="flex column fg100">
      <div class="flex column scrollAuto alignSelfStretch">
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
          src="/favicon.svg"
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
        <h2>Qwik Flower</h2>
        <img src="/flower.svg" alt="A snapshot of the Qwik flower" />
        <button>
          <Link href="/flower?pride=true">Check it out!</Link>
        </button>
        <p>
          Okay, I didn't actually make this one - it's made by the Qwik team.{" "}
          <Link class="link" href="/tech#Qwik">
            More info on Qwik here.
          </Link>
        </p>
        <p>
          I'm showing it here because {"A)"} it's a fun exhibition of Qwik being
          able to load reactive components quickly, and {"B)"} it's cool to look
          at
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
            responseLong: "Show me that cool flower you didn't actually make!",
            linkPath: "/flower?pride=true",
          },
          {
            responseShort: "Back",
            responseLong: "Actually, there's something else I wanted to ask...",
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
