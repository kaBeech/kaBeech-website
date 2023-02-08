import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Beechi } from "../beechi/beechi";
import { ResponseBar } from "../responseBar/responseBar";
// import { ResponseButton } from "../responseButton/responseButton";
import styles from "./screen.css?inline";

export const Screen = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazy">
      <Beechi />
      <Slot />
    </div>
  );
});
