import { component$, useStore } from "@builder.io/qwik";

export const TestButton = component$(() => {
  const state = useStore({
    numberOfClicks: 0,
    message: `Yes!`,
  });

  return (
    <div>
      <button
        onClick$={() => {
          state.numberOfClicks += 1;
        }}
      >
        Click Me!
      </button>
      <div>
        {state.message} x{state.numberOfClicks}
      </div>
    </div>
  );
});
