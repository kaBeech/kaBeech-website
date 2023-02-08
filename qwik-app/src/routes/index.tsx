import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ResponseBar } from "~/components/responseBar/responseBar";

export default component$(() => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Welcome to kaBeech, Kyle Beechly's personal website</p>
      <p>
        My name is Beechi, and I'll be your guide here. I'm glad to meet you!
      </p>
      <h3>What would you like to do?</h3>
      <p>
        Please help me direct your experience by chosing a reply below. Just
        click or tap a button!
      </p>
      <ResponseBar
        responses={[
          { responseShort: "quiet", responseLong: "quiet" },
          {
            responseShort: "LOOUD",
            responseLong:
              "LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOUD",
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
