import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>About Me</h1>
        <p></p>
      </div>
      <ResponseBar
        responses={[
          {
            responseShort: "Tech",
            responseLong: "Yeah, gimme all your geeky tech credentials!",
            linkPath: "/about-me/tech",
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
            responseLong: "Actually, there's something else I wanted to ask...",
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
