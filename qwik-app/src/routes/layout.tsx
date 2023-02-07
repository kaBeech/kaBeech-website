import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "~/components/navigation/navigation";

export default component$(() => {
  return (
    <>
      <main>
        <Navigation />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <span>Made with ♡ by Kyle Beechly</span>
      </footer>
    </>
  );
});
