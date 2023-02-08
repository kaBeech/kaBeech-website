import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import type { ResponseOption } from "~/globalTypes";
import styles from "./responseButton.css?inline";

interface ResponseButtonProps {
  response: ResponseOption;
  handleFunction?: any;
}

export const ResponseButton = component$((props: ResponseButtonProps) => {
  useStylesScoped$(styles);

  const handleClick = $(() => {
    props.handleFunction(props.response);
  });

  return (
    <button
      onClick$={() => {
        handleClick();
      }}
    >
      {props.response.responseShort}
    </button>
  );
});
