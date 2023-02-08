import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./navigation.css?inline";

export const Navigation = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazyflex lazyalign">
      <div class="lazyRoundBorders"></div>
      <ul class="lazyflex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/testdir">Testdir</Link>
        </li>
        <li>
          <Link href="/bonus">Bonus</Link>
        </li>
      </ul>
    </div>
  );
});
