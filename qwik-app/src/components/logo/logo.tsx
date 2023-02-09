import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./logo.css?inline";

export const Logo = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazyflex lazyalign">
      <div class="lazyLogo"></div>
    </div>
  );
});
