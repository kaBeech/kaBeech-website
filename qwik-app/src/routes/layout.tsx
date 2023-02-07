import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "~/components/navigation/navigation";
// import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        {/* <Header /> */}
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
