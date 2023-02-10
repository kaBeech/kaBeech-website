import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./beechy.css?inline";

export const Beechy = component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div class="beechyGradient roundCornersTop">
        <img
          class="noBoxShadow"
          src="/beechy.svg"
          alt="Beechy, kaBeech's avatar"
        />
      </div>
      <div class="screenGradientTop heightHalf"></div>
    </>
  );
});
