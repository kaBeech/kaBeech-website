import { component$, Resource, useResource$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

///

// export default component$(() => {
//   const mamobibuName = useResource$(async () => {
//     const response = await fetch(
//       `https://full-duck-87-ween4qz6p0cg.deno.dev/saurian`
//     );
//     const data = await response.json();
//     return (data.title ||
//       data.message ||
//       data.saurianName + " transliteration: " + data.saurianNameBasicLatin ||
//       "Error") as string;
//   });
//   return (
//         <div>
//             <h1>Welcome!</h1>
//             <p>Welcome to kaBeech, Kyle Beechly's personal website</p>
//             <p>
//               My name is Beechy, and I'll be your guide here. I'm glad to meet you!
//             </p>
//  <Resource
//  value={mamobibuName}
//  onPending={() => <>Loading...</>}
//  onResolved={(title) => <>{title}</>}
//  />;
//         </div>
//         )
///

export default component$(() => {
  const mamobibuName = useResource$(async () => {
    const response = await fetch(
      `https://full-duck-87-dnv34518ks3g.deno.dev/mamobibu`
    );
    const data = await response.json();
    return (data.mamobibuName || "Error") as string;
  });

  const saurianName = useResource$(async () => {
    const response = await fetch(
      `https://full-duck-87-ween4qz6p0cg.deno.dev/saurian`
    );
    const data = await response.json();
    // lazy
    return (data.saurianName + " (" + data.saurianNameBasicLatin + ")" ||
      "Error") as string;
  });

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Namagen</h1>
        <p>
          Namagen randomly generates names in constructed languages. I built it
          partly to show how a Web Assembly application built with Rust can be
          integrated into a JavaSctipt environment (more on that further down)
        </p>
        <p>
          It currently supports two languages: Mamobibu and Saurian. Go on, give
          it a try!
        </p>
        <h2>Currently Implemented Languages</h2>
        <h3>Saurian (Ḍaṭunḍiu)</h3>
        <p>
          Random Saurain Name:{" "}
          <strong>
            <Resource
              value={saurianName}
              onPending={() => <>Loading...</>}
              onResolved={(saurianName) => <>{saurianName}</>}
            />
          </strong>
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
          Random Mamobibu Name:{" "}
          <strong>
            <Resource
              value={mamobibuName}
              onPending={() => <>Loading...</>}
              onResolved={(mamobibuName) => <>{mamobibuName}</>}
            />
          </strong>
        </p>
        <p>
          Mamobibu is a very simple test language I made to test Namagen's
          functionality
        </p>
        <p>
          There are five vowels in Mamobibu (a, e, i, o, and u), but only two
          consonants (b and m)! It is truly a wonder how the Mamobibu people can
          express such complex ideas with so few language sounds. This is
          achieved through extensive agglutination and changes in the meanings
          of words based on their relationship to each other in a sentence
        </p>

        <p>
          <Link class="link margin1" href="../">
            {"<-- Back"}
          </Link>{" "}
        </p>
      </div>
      <ResponseBar
        responses={[
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
  title: "Al Lugha Misma - kaBeech",
  meta: [
    {
      name: "description",
      content: "Al Lugha Misma - a comparitive linguistics game",
    },
  ],
};
