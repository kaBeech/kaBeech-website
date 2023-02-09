import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./hamburger.css?inline";

export const Hamburger = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazyflex lazyalign">
      <div class="lazyLogo"></div>
      {/* <ul class="lazyflex">
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
      </ul> */}
    </div>
  );
});
