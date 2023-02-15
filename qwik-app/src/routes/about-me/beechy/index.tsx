import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Beechy</h1>
        <p>Oh, thanks for asking! It's pretty great!</p>
        <p>
          Being Kyle's avatar is basically like being a conduit for zyr
          personality
        </p>
        <p>
          I get to do whatever I want, and sometimes I get to talk with folks
          like you, which is good fun!
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
  title: "kaBeech - Beechy",
  meta: [
    {
      name: "description",
      content: "A bit of information about Beechy",
    },
  ],
};
