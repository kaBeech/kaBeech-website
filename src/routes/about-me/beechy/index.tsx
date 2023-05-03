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
        <h1>About Me, Beechy</h1>
        <p>Oh! Thanks for asking - being me pretty great!</p>
        <p>
          Being Kyle's avatar is basically like being a conduit for zyr
          personality (I also prefer{" "}
          <Link class="link" href="/about-me/pronouns">
            xe/xyr or ze/zyr pronouns
          </Link>
          )
        </p>
        <p>
          I get to do whatever I want, and sometimes I get to talk with folks
          like you, which is good fun!
        </p>
        <p>
          When I'm not playing host, I enjoy{" "}
          <Link class="link" href="/fun/al-lugha-misma">
            learning languages
          </Link>
          , meditating, and reading. Some of my favorite authors are{" "}
          <Link class="link" href="https://devdutt.com/books/jaya/">
            Devdutt Pattanaik
          </Link>
          ,{" "}
          <Link
            class="link"
            href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach"
          >
            Douglas Hofstadter
          </Link>
          , and
          <Link class="link" href="https://xkcd.com/917/">
            {" "}
            Randall Munroe
          </Link>
          !
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to About Me"}
          </Link>{" "}
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage: "I'm actually curious about your preferred pronouns!",
            linkTile: linkTiles.about_pronouns,
          },
          {
            fullMessage:
              "Learning languages? That IS fun! Let's talk about that!",
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
  title: "kaBeech - Beechy",
  meta: [
    {
      name: "description",
      content: "A bit of information about Beechy",
    },
  ],
};
