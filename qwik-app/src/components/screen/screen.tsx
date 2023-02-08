import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Beechi } from "../beechi/beechi";
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
