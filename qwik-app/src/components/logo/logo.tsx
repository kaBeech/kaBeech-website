import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./logo.css?inline";

interface LogoProps {
  class: string;
}

export const Logo = component$((props: LogoProps) => {
  useStylesScoped$(styles);

  return (
    <div class={`lazyalign ${props.class}`}>
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
