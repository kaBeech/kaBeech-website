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
        <span>Made with ♡ by Kyle Beechly</span>
      </footer>
    </>
  );
});
