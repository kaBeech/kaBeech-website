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
        <h1>About Me</h1>
        <p>
          My name's Kyle Beechly and I'm a software engineer from the Pacific
          Northwest (in America). I built this site to showcase some of my work
          using the new{" "}
          <Link class="link" href="/poqd">
            POQD stack
          </Link>
        </p>
        <p>
          You can{" "}
          <Link class="link" href="https://github.com/kaBeech">
            find more of my work on GitHub!
          </Link>
        </p>
        <p>
          If you're interested, I prefer{" "}
          <Link class="link" href="pronouns">
            xe/xyr or ze/zyr pronouns
          </Link>
          . I'm not very strict about it though, as long as you're being
          compassionate ♡
        </p>
        <p>
          When I'm not coding you can probably find me running, building fantasy
          worlds for tabletop roleplaying games, or SHREDDING guitar
        </p>
        <p>
          I also have an{" "}
          <Link class="link" href="beechy">
            avatar named Beechy
          </Link>
          , who is the one saying these words to you!
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage: "Wait, what's all this about a poked stack?",
            linkTile: linkTiles.tech,
          },
          {
            fullMessage: "Get me to your GitHub!",
            linkTile: linkTiles.gitHub,
          },
          {
            fullMessage: "I'm actually curious about your preferred pronouns!",
            linkTile: linkTiles.about_pronouns,
          },
          {
            fullMessage:
              "No, I mean YOU, Beechy! What's it like being an avatar?",
            linkTile: linkTiles.about_beechy,
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
  title: "kaBeech - About Me",
  meta: [
    {
      name: "description",
      content: "A bit of information about myself",
    },
  ],
};
