import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ResponseBar } from "~/components/responseBar/responseBar";

export default component$(() => {
  return (
    <div class="flex column fg100">
      <div class="screenContents">
        <h1>Welcome!</h1>
        <p>Welcome to kaBeech, Kyle Beechly's personal website</p>
        <p>
          My name is Beechy, and I'll be your guide here. I'm glad to meet you!
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
            responseShort: "Fun",
            responseLong:
              "I'm just having fun. Do you have anything cool to play with?",
            linkPath: "/fun",
          },
          {
            responseShort: "About",
            responseLong: "I'm interested in you - tell me about yourself!",
            linkPath: "/about-me",
          },
          {
            responseShort: "Tech",
            responseLong:
              "Woah, this site is pretty cool! What tech does it use?",
            linkPath: "/tech",
          },
          {
            responseShort: "Projects",
            responseLong:
              "I'm interested in your engineering career. What are some of the projects you're most proud of?",
            linkPath: "/projects",
          },
          {
            responseShort: "Contact",
            responseLong: "How can I get in touch with you?",
            linkPath: "/contact",
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
