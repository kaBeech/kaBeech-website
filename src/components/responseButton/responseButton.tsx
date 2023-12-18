import {
  $,
  component$,
  useStore,
  useStylesScoped$,
  useTask$,
} from "@builder.io/qwik";
import type { ResponseOption } from "~/globalTypes";
import styles from "./responseButton.css?inline";

interface ResponseButtonProps {
  response: ResponseOption;
  handleFunction?: any;
}

export const ResponseButton = component$((props: ResponseButtonProps) => {
  useStylesScoped$(styles);

  const state = useStore({
    selected: false,
  });

  const handleClick = $(() => {
    props.handleFunction(props.response);
    state.selected = true;
  });

  useTask$(({ track }) => {
    track(state);
  });

  return (
    <>
      <a
        href={props.response.jumpTo}
        class={{ semitransparent: state.selected } + ` button`}
        onClick$={() => {
          handleClick();
        }}
      >
        {" "}
        {props.response.linkTile.icon ? (
          <img
            src={props.response.linkTile.icon}
            alt={props.response.linkTile.text}
          />
        ) : (
          props.response.linkTile.text
        )}
      </a>
    </>
  );
});
