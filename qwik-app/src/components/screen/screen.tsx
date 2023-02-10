import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./screen.css?inline";

export const Screen = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazy flex">
      <Slot />
    </div>
  );
});
