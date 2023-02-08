import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "~/components/navigation/navigation";
import { Screen } from "~/components/screen/screen";

export default component$(() => {
  return (
    <>
      <main>
        <Navigation />
        <section class="flex column">
          <Screen>
            <Slot />
          </Screen>
        </section>
      </main>
      <footer>
        <span>
          Made with ♡ by{" "}
          <a href="https://github.com/kaBeech/kaBeech-website">kaBeech</a>
          <div id="footer">
            Background photo by{" "}
            <a href="https://unsplash.com/@bartek_16?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Bartek Garbowicz
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </span>
      </footer>
    </>
  );
});
