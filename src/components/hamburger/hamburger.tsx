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
          <Link class="hamburgerChoice" href="/">
            <img class="lazy" src="/icons/home.svg" alt="Home" />
            <div class="blinkOut">Home</div>
          </Link>
          <Link class="hamburgerChoice" href="/projects">
            <img class="lazy" src="/icons/hammer-outline.svg" alt="Projects" />
            <div class="blinkOut">Projects</div>
          </Link>
          <Link class="hamburgerChoice" href="/fun">
            <img
              class="lazy"
              src="/icons/game-controller-outline.svg"
              alt="Fun and Games"
            />
            <div class="blinkOut">Fun and Games</div>
          </Link>
          <Link class="hamburgerChoice" href="/tech">
            <img class="lazy" src="/icons/cpu.svg" alt="Technology" />
            <div class="blinkOut">Tech</div>
          </Link>
          <Link class="hamburgerChoice" href="/about-me">
            <img
              class="lazy"
              src="/icons/person-circle-outline.svg"
              alt="About Me"
            />
            <div class="blinkOut">About Me</div>
          </Link>
          <Link class="hamburgerChoice" href="/contact">
            <img class="lazy" src="/icons/mail.svg" alt="Contact Me" />
            <div class="blinkOut">Contact Me</div>
          </Link>
        </>
      )}
      {state.selected && window.outerWidth < 1000 && (
        <div class="shadow">
          <Link href="/">
            <div class="blink">Home</div>
          </Link>
          <Link href="/projects">
            <div class="blink">Projects</div>
          </Link>
          <Link href="/fun">
            <div class="blink">Fun and Games</div>
          </Link>
          <Link href="/tech">
            <div class="blink">Technology</div>
          </Link>
          <Link href="/about-me">
            <div class="blink">About Me</div>
          </Link>
          <Link href="/contact">
            <div class="blink">Contact Me</div>
          </Link>
        </div>
      )}
    </div>
  );
});
