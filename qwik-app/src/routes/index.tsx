import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Welcome to kaBeech, Kyle Beechly's personal website</p>
      <p>
        My name is Beechi, and I'll be your guide here. I'm glad to see you!
      </p>
      <p>
        Please help me direct your experience by chosing a reply below. Just
        click or tap a button!
      </p>
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
