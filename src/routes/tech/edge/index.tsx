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
        <h1>Edge Functions</h1>
        <h2 class="responseTextLight">What is an Edge Function?</h2>
        <h2 class="responseTextLight">What is the Edge?</h2>
        <h2 class="responseTextLight">
          Why would I want to use Edge Functions?
        </h2>
        <h2 class="responseTextLight">
          What are some limitations of Edge Functions?
        </h2>
        <h2 class="responseTextLight">How can I use Edge Functions?</h2>
        <h2 class="responseTextLight">Why are Edge Functions exciting?</h2>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Tech"}
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
  title: "Edge Functions - kaBeech",
  meta: [
    {
      name: "description",
      content: "Information about edge functions",
    },
  ],
};
