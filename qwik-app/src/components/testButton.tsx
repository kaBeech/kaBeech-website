import { component$ } from "@builder.io/qwik";

export const TestButton = component$(() => {
  return (
    <button
      onClick$={() => {
        console.log("Yes!");
      }}
    >
      Click Me!
    </button>
  );
});
