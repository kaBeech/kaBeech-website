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
        <h1>Contact</h1>
        <p>
          You can email me at{" "}
          <Link class="link" href="mailto:contact@kabeech.com">
            contact@kaBeech.com
          </Link>
        </p>
        <p>
          You can also{" "}
          <Link class="link" href="https://github.com/kaBeech">
            find me on GitHub
          </Link>
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
            fullMessage: "I want to get in touch with you!",
            linkTile: linkTiles.email,
          },
          {
            fullMessage: "Get me to your GitHub!",
            linkTile: linkTiles.gitHub,
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
  title: "kaBeech - Contact",
  meta: [
    {
      name: "description",
      content: "Contact Me!",
    },
  ],
};
