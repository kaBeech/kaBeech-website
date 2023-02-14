import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { ResponseOption } from "~/globalTypes";
import styles from "./responseDetail.css?inline";

interface ResponseDetailProps {
  response: ResponseOption;
  hideResponseDetail: Function | any;
}

export const ResponseDetail = component$((props: ResponseDetailProps) => {
  useStylesScoped$(styles);

  const hideResponseDetail = $(() => {
    props.hideResponseDetail();
  });

  return (
    <div class="flex justifyCenter responseGradient">
      <div class="lazyColor flex">
        <div class="lazy">{props.response.fullMessage}</div>
        <button class="lazyButton">
          <Link href={props.response.linkTile.linkPath}>O</Link>
        </button>
        <button
          class="lazyCancel"
          onClick$={() => {
            hideResponseDetail();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
});
