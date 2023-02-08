import {
  $,
  component$,
  useStore,
  useStylesScoped$,
  useTask$,
} from "@builder.io/qwik";
import styles from "./responseButton.css?inline";

interface ResponseButtonProps {
  response: string;
  handleFunction?: any;
}

export const ResponseButton = component$((props: ResponseButtonProps) => {
  useStylesScoped$(styles);

  const state = useStore({
    response: props.response,
  });

  const handleClick = $(() => {
    props.handleFunction();
  });

  useTask$(({ track }) => {
    track(state);
  });

  return (
    <button
      onClick$={() => {
        handleClick();
      }}
    >
      {state.response}
    </button>
  );
});
