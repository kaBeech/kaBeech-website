import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Hamburger } from "../hamburger/hamburger";
import { Logo } from "../logo/logo";
import styles from "./beechy.css?inline";

export const Beechy = component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <div class="beechyGradient roundCornersTop flex mobileSpacing">
        <Logo class="tinyHide" />
        <img
          class="noBoxShadow"
          src="/beechy.svg"
          alt="Beechy, kaBeech's avatar"
        />
        <Hamburger class="tinyHide" />
      </div>
      <div class="screenGradientTop heightHalf"></div>
    </div>
  );
});
