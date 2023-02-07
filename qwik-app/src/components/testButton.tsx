import { $, component$, useStore, useTask$ } from "@builder.io/qwik";

interface TestButtonProps {
  handleFunction: any;
}

export const TestButton = component$((props: TestButtonProps) => {
  const state = useStore({
    numberOfClicks: 0,
    message: `Yes!`,
  });

  const handleClick = $(() => {
    state.numberOfClicks += 1;
    props.handleFunction();
  });

  useTask$(({ track }) => {
    track(state);
    console.log(state.numberOfClicks);
  });

  return (
    <div>
      <button
        onClick$={() => {
          handleClick();
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
