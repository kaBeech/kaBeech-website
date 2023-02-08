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
    <div class="flex">
      <div>{props.response.responseLong}</div>
      <div class="flex column">
        <button class="lazyButton">
          <Link href={props.response.linkPath}>Enter</Link>
        </button>
        <button
          onClick$={() => {
            hideResponseDetail();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
});
