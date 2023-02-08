import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Beechy } from "../beechy/beechy";
import styles from "./screen.css?inline";

export const Screen = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazy">
      <Beechy />
      <Slot />
    </div>
  );
});
