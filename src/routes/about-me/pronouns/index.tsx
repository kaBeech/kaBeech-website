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
        <h1>Pronouns</h1>
        <p>Why, thank you for asking!</p>
        <h3 class="responseTextLight">What are your preferred pronouns?</h3>
        <p>Content to be added!</p>
        <h3 class="responseTextLight">Why not use they/them?</h3>
        <p>Content to be added!</p>
        <h3 class="responseTextLight">Why both xe/xyr and ze/zyr?</h3>
        <p>Content to be added!</p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back"}
          </Link>{" "}
        </p>
      </div>
      <ResponseBar
        responses={[
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
  title: "Pronouns - kaBeech",
  meta: [
    {
      name: "description",
      content: "A bit of information about my preferred pronouns",
    },
  ],
};
