import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Tech</h1>

        <ResponseBar
          responses={[
            {
              responseShort: "Tech",
              responseLong: "Yeah, gimme all your geeky tech credentials!",
              linkPath: "/about-me/tech",
            },
            {
              responseShort: "Back",
              responseLong:
                "Actually, there's something else I wanted to ask...",
              linkPath: "/",
            },
          ]}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - Tech",
  meta: [
    {
      name: "description",
      content: "Information about the technology this site uses",
    },
  ],
};
