import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead, RequestEvent } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "../al-lugha-misma.css?inline";
import { AlLughaMismaTable } from "~/components/alLughaMismaTable/alLughaMismaTable";

let alLughaMismaAPI: string;

export const onGet = (requestEvent: RequestEvent) => {
  const response = requestEvent.env.get("AL_LUGHA_MISMA_API");
  if (response != undefined) {
    alLughaMismaAPI = response;
  } else {
    console.error("AL_LUGHA_MISMA_API string not found upon request");
  }
};

export default component$(() => {
  useStylesScoped$(styles);

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
        <AlLughaMismaTable alLughaMismaAPI={alLughaMismaAPI} />
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
