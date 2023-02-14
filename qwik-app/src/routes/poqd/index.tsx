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
        <h1>What is the POQD stack?</h1>
        <p>
          This website was built using next-generation JavaScript software in a
          group (or 'stack') I like to call 'POQD'
        </p>
        <p>
          I first learned professional web development using a software stack
          known as MERN, which stands for 'MongoDB, Express, React, and
          Node.js'. POQD is very similar, and stands for 'PostgreSQL, Oak, Qwik,
          and Deno'
        </p>
        <h2>Why?</h2>
        <h2>What are the differences between MERN and POQD?</h2>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage: "Actually, there's something else I want to ask...",
            linkTile: linkTiles.back,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - POQD Stack",
  meta: [
    {
      name: "description",
      content:
        "Information about the POQD stack of JavaScript software used to build this site",
    },
  ],
};
