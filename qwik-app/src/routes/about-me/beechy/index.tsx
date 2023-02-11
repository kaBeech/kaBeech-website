import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Beechy</h1>
        <p>Oh, thanks for asking! It's pretty great!</p>
        <p>
          Being Kyle's avatar is basically like being a conduit for zys
          personality
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            responseShort: "Back",
            responseLong: "Actually, there's something else I want to ask...",
            linkPath: "/about-me",
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
