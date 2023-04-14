import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./hamburger.css?inline";

interface HamburgerProps {
  class: string;
}

export const Hamburger = component$((props: HamburgerProps) => {
  useStylesScoped$(styles);

  const state = useStore({
    selected: false,
  });

  const handleClick = $(() => {
    if (state.selected) {
      state.selected = false;
    } else {
      state.selected = true;
    }
  });

  return (
    <div class={`lazyalign column ${props.class}`}>
      <img
        onClick$={() => {
          handleClick();
        }}
        class="lazy"
        src="/icons/menu.svg"
        alt="Menu Button"
      />
      {state.selected && (
        <>
          <Link class="link" href="/">
            <img class="lazy" src="/icons/home.svg" alt="Home" />
          </Link>
          <Link class="link" href="/fun">
            <img
              class="lazy"
              src="/icons/game-controller-outline.svg"
              alt="Fun and Games"
            />
          </Link>
          <Link class="link" href="/about-me">
            <img
              class="lazy"
              src="/icons/person-circle-outline.svg"
              alt="About Me"
            />
          </Link>
          <Link class="link" href="/tech">
            <img class="lazy" src="/icons/cpu.svg" alt="Technology" />
          </Link>{" "}
          <Link class="link" href="/projects">
            <img class="lazy" src="/icons/hammer-outline.svg" alt="Projects" />
          </Link>
          <Link class="link" href="/contact">
            <img class="lazy" src="/icons/mail.svg" alt="Contact Me" />
          </Link>
        </>
      )}
    </div>
  );
});
