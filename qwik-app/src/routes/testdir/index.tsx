import { $, component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { TestButton } from "~/components/testButton";

export default component$(() => {
  const state = useStore({ bonus: 1, i: 0 });

  const handleExponent = $(() => {
    if (state.i > 4) {
      state.bonus += 1;
      state.i = 0;
    } else {
      state.i++;
    }
  });

  return (
    <div>
      <h1>Test Page</h1>
      <div>BONUS MULTIPLIER: {state.bonus}! </div>
      <TestButton handleFunction={handleExponent} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Test Page",
  meta: [
    {
      name: "description",
      content: "This page is a test!",
    },
  ],
};
