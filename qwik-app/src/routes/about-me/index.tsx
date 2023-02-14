import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>About Me</h1>
        <p>
          My name's Kyle Beechly and I'm a software engineer from the Pacific
          Northwest (in America). I built this site to showcase some of my work
          in the new{" "}
          <Link class="link" href="/poqd">
            POQD stack
          </Link>
        </p>
        <p>
          If you're interested, I prefer{" "}
          <Link class="link" href="/about-me/pronouns">
            xe/xyr or ze/zyr pronouns
          </Link>
          . In general I'm not very strict about it though, as long as you're
          being kind ♡
        </p>
        <p>
          When I'm not coding you can probably find me running, building fantasy
          worlds for tabletop roleplaying games, SHREDDING guitar, and/or
          thinking deeply about the nature of being
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            responseShort: "Tech",
            responseLong: "Wait, what's all this about a poked stack?",
            linkPath: "/poqd",
          },
          {
            responseShort: "Pronouns",
            responseLong: "I'm actually curious about your preferred pronouns!",
            linkPath: "/about-me/pronouns",
          },
          {
            responseShort: "Beechy",
            responseLong:
              "No, I mean YOU, Beechy! What's it like being an avatar?",
            linkPath: "/about-me/beechy",
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
  title: "kaBeech - About Me",
  meta: [
    {
      name: "description",
      content: "A bit of information about myself",
    },
  ],
};
