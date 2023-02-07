import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./navigation.css?inline";

export const Navigation = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazyflex lazyalign">
      <div>LOGO</div>
      <ul class="lazyflex">
        <li>Home</li>
        <li>Testdir</li>
        <li>Bonus</li>
      </ul>
    </div>
  );
});
