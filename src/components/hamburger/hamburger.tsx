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
      {state.selected && window.outerWidth >= 1000 && (
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
          </Link>
          <Link class="link" href="/projects">
            <img class="lazy" src="/icons/hammer-outline.svg" alt="Projects" />
          </Link>
          <Link class="link" href="/contact">
            <img class="lazy" src="/icons/mail.svg" alt="Contact Me" />
          </Link>
        </>
      )}
      {state.selected && window.outerWidth < 1000 && (
        <div class="shadow">
          <Link class="link" href="/">
            <div class="blink">Home</div>
          </Link>
          <Link class="link" href="/fun">
            <div class="blink">Fun and Games</div>
          </Link>
          <Link class="link" href="/about-me">
            <div class="blink">About Me</div>
          </Link>
          <Link class="link" href="/tech">
            <div class="blink">Technology</div>
          </Link>
          <Link class="link" href="/projects">
            <div class="blink">Projects</div>
          </Link>
          <Link class="link" href="/contact">
            <div class="blink">Contact Me</div>
          </Link>
        </div>
      )}
    </div>
  );
});
