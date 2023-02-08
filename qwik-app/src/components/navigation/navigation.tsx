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
          <Link class="link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link class="link" href="/testdir">
            Testdir
          </Link>
        </li>
        <li>
          <Link class="link" href="/bonus">
            Bonus
          </Link>
        </li>
      </ul>
    </div>
  );
});
