import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
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
      <Link href={props.response.jumpTo}>{props.response.responseShort}</Link>
    </button>
  );
});
