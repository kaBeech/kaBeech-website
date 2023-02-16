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
        <div class="responseText">{props.response.fullMessage}</div>
        <div class="flex tinyColumn gapHalf">
          <Link href={props.response.linkTile.linkPath} class="flex width100">
            <button class="lazyButton flex justifyCenter">
              <img src="/icons/check.svg" alt="Confirm response" />
            </button>
          </Link>
          <button
            class="lazyCancel flex justifyCenter"
            onClick$={() => {
              hideResponseDetail();
            }}
          >
            <img src="/icons/x.svg" alt="Cancel response" class="pointer" />
          </button>
        </div>
      </div>
    </div>
  );
});
