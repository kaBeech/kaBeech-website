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
        <h1>Welcome!</h1>
        <p>Welcome to kaBeech, Kyle Beechly's personal website</p>
        <p>
          My name is Beechy, and I'll be your guide here. I'm glad to meet you!
        </p>
        <p>
          Please be aware that this website is very much a work in progress.
          Much of it is expected to be broken or not yet built out. But feel
          free to poke around if you like!
        </p>
        <h3>What would you like to do?</h3>
        <p>
          Please help me direct your experience by chosing a response below.
          Just click or tap a button!
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage:
              "I'm just having fun. Do you have anything cool to play with?",
            linkTile: linkTiles.fun,
          },
          {
            fullMessage: "I'm interested in you - tell me about yourself!",
            linkTile: linkTiles.about,
          },
          {
            fullMessage:
              "Woah, this site is pretty cool! What did you use to build it?",
            linkTile: linkTiles.tech,
          },
          {
            fullMessage:
              "I'm interested in your engineering career. What are some of the projects you're most proud of?",
            linkTile: linkTiles.projects,
          },
          {
            fullMessage: "How can I get in touch with you?",
            linkTile: linkTiles.contact,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - Welcome!",
  meta: [
    {
      name: "description",
      content: "Welcome to my site!",
    },
  ],
};
