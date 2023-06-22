import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "../al-lugha-misma.css?inline";
import { AlLughaMismaTable } from "~/components/alLughaMismaTable/alLughaMismaTable";

export default component$(() => {
  useStylesScoped$(styles);
  const store = useStore({
    word_list: "Colors",
    languagesString: [
      "Arabic",
      "English",
      "French",
      "Hawaiian",
      "Hindi",
      "Indonesian",
      "PigLatin",
      "Spanish",
      "Swahili",
    ].toString(),
  });

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Al Lugha Misma</h1>
        <img
          class="logo"
          src="/icons/alLughaMismaColorized2.webp"
          alt="The Al Lugha Misma logo (a calligraphic representation of 'Al Lugha Misma' in mixed Naskh and Devanagari script"
        />
        <input
          type="text"
          onInput$={(ev: any) => (store.languagesString = ev.target.value)}
          value={store.languagesString}
          aria-labelledby="Languages"
        />
        <input
          type="text"
          onInput$={(ev: any) => (store.word_list = ev.target.value)}
          value={store.word_list}
          aria-labelledby="Word List"
        />
        <div>{store.languagesString}</div>
        <div>{store.word_list}</div>
        <AlLughaMismaTable
          word_list={store.word_list}
          languagesString={store.languagesString}
        />
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Fun & Games"}
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
