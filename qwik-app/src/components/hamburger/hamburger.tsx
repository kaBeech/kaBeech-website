import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./hamburger.css?inline";

export const Hamburger = component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    selected: false,
  });

  const handleClick = $(() => {
    if (state.selected === true) {
      state.selected = false;
    } else {
      state.selected = true;
    }
  });

  return (
    <div class="lazyflex lazyalign column">
      <img
        onClick$={() => {
          handleClick();
        }}
        class="lazy"
        src="/icons/menu.svg"
        alt="Menu Button"
      />
      {state.selected === true && (
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
          <Link class="link" href="/poqd">
            <img
              class="lazy"
              src="/icons/cpu.svg"
              alt="Tech used on this website (the POQD stack)"
            />
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
