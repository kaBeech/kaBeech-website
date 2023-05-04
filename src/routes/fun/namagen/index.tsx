import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

// I know, I know. Listen, environment variables are weird in Qwik and I'm still figuring it out
const namagen = "https://full-duck-87-qfzve1n0y4s0.deno.dev";

export const useNamagenMamobibu = routeLoader$(async () => {
  const res = await fetch(`${namagen}/mamobibu`);
  const data = await res.json();
  return (data.mamobibuName || "Error") as string;
});

export const useNamagenSaurian = routeLoader$(async () => {
  const res = await fetch(`${namagen}/saurian`);
  const data = await res.json();
  return (data.saurianName + " (" + data.saurianNameBasicLatin + ")" ||
    "Error") as string;
});

export default component$(() => {
  const mamobibuName = useNamagenMamobibu();
  const saurianName = useNamagenSaurian();
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Namagen</h1>
        <img
          class="logo"
          src="/peli_hype_centered.png"
          alt="Peli, the Far Reach Co. mascot, showing excitement)"
        />
        <p>
          Namagen randomly generates names in constructed languages. I made it
          partly to show how a Web Assembly application built with Rust can be
          integrated into a JavaScript environment (more on that further down)
        </p>
        <p>
          It currently supports two languages: Mamobibu and Saurian. Go on, give
          it a try!
        </p>
        <h2>Currently Implemented Languages</h2>
        <h3>Saurian (Ḍaṭunḍiu)</h3>
        <p>
          Random Saurain Name: <strong>{saurianName.value}</strong>
        </p>
        <p>
          Saurian (or Ḍaṭunḍiu) is a language we are developing for a group of
          dinosaur people in Far Reach Co.'s fantasy roleplaying game setting
        </p>
        <p>
          Since some Ḍaṭunḍii individuals have lips, some have beaks, and all
          may or may not have teeth, Ḍaṭunḍiu makes less of a distinction
          between different sounds made at the front of the mouth and has more
          variety in sounds made with the back of the throat
        </p>
        <h3>Mamobibu</h3>
        <p>
          Random Mamobibu Name: <strong>{mamobibuName.value}</strong>
        </p>
        <p>
          Mamobibu is a very simple test language I made to test Namagen's
          functionality
        </p>
        <p>
          There are five vowels in Mamobibu (a, e, i, o, and u), but only two
          consonants (b and m)! It is truly a wonder how the Mamobibu language
          can express such complex ideas with so few speech sounds. This is
          achieved through extensive agglutination and changes in the meanings
          of words based on their relationship to each other in a sentence
        </p>
        <h2>Tech Used</h2>
        <p>
          Namagen is built using Rust, compiled to WebAssembly (WASM), and then
          packaged for use in Crates, Webpack, Node.JS, and Deno
        </p>
        <p>
          This pattern enables Namagen to be run at blazingly-fast WebAssembly
          speeds either on a user's browser or as an edge function on a server
          physically near them
        </p>
        <p>
          That means that with Namagen, you'll be able to{" "}
          <Link class="link" href="https://xkcd.com/483/">
            come up with fantasy nonsense faster than Neal Stephenson!
          </Link>
        </p>
        <p>
          <Link class="link" href="/tech">
            Read more about the tech that makes this possible
          </Link>
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Fun & Games"}
          </Link>
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage:
              "Wow, that works fast! Please tell me more about the tech you used to build it",
            linkTile: linkTiles.tech,
          },
          {
            fullMessage: "There's something else I want to ask...",
            linkTile: linkTiles.back,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Namagen - kaBeech",
  meta: [
    {
      name: "description",
      content: "Namagen - a fantasy name generator",
    },
  ],
};
