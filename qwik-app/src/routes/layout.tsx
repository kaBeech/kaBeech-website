import { component$, Slot } from "@builder.io/qwik";
import { Hamburger } from "~/components/hamburger/hamburger";
// import { Hamburger } from "~/components/hamburger/hamburger";

import { Logo } from "~/components/logo/logo";
import { Screen } from "~/components/screen/screen";

export default component$(() => {
  return (
    <>
      <main>
        <div class="flex spaceBetween">
          <section class="flex alignStart vw100">
            <Logo class="mobileHide" />
            <Screen>
              <Slot />
            </Screen>
            <Hamburger class="mobileHide" />
          </section>
        </div>
      </main>
      <footer>
        <div id="footer">
          <p class="smallText">
            Made with ♡ by{" "}
            <a class="link" href="https://github.com/kaBeech/kaBeech-website">
              Kyle Beechly
            </a>{" "}
            • Background photo by{" "}
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
          </p>
        </div>
      </footer>
    </>
  );
});
