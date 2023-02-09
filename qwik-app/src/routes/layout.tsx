import { component$, Slot } from "@builder.io/qwik";
import { Hamburger } from "~/components/hamburger/hamburger";

import { Logo } from "~/components/logo/logo";
import { Screen } from "~/components/screen/screen";

export default component$(() => {
  return (
    <>
      <main>
        <div class="flex alignStart">
          <Logo />
          <section class="flex column">
            <Screen>
              <Slot />
            </Screen>
          </section>
          <Hamburger />
        </div>
      </main>
      <footer>
        <span>
          Made with ♡ by{" "}
          <a class="link" href="https://github.com/kaBeech/kaBeech-website">
            kaBeech
          </a>
          <div id="footer">
            Background photo by{" "}
            <a
              class="link"
              href="https://unsplash.com/@bartek_16?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Bartek Garbowicz
            </a>{" "}
            on{" "}
            <a
              class="link"
              href="https://unsplash.com/s/photos/stars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </div>
        </span>
      </footer>
    </>
  );
});
