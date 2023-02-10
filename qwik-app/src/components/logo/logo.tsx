import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./logo.css?inline";

export const Logo = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lazyflex lazyalign">
      <Link href="/">
        <img
          class="lazy"
          src="/favicon.png"
          alt="The kaBeech Heart - click to go to Home Page"
        />
      </Link>
    </div>
  );
});
