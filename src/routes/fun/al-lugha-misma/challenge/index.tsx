import {
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead, RequestEvent } from "@builder.io/qwik-city";
import { Link, routeLoader$, server$ } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "../al-lugha-misma.css?inline";
import { AlLughaMismaTable } from "~/components/alLughaMismaTable/alLughaMismaTable";

interface TranslatedWord {
  reference_word_english: string;
  transliterated_word: string;
  language: string;
}

let alLughaMismaAPI: string;

export const onGet = (requestEvent: RequestEvent) => {
  const response = requestEvent.env.get("AL_LUGHA_MISMA_API");
  if (response != undefined) {
    alLughaMismaAPI = response;
  } else {
    console.error("AL_LUGHA_MISMA_API string not found upon request");
  }
};

const serverFetcher = server$(async function (word_list, languagesString) {
  const abortController = new AbortController();
  const res = await fetch(
    `${alLughaMismaAPI}/word_list/${word_list}/languages/${languagesString}/key`,
    {
      signal: abortController.signal,
    }
  );
  const data = await res.json();
  const translatedWordList: TranslatedWord[] = [];
  data.challenge_key.forEach((translatedWord: TranslatedWord) =>
    translatedWordList.push(translatedWord)
  );
  return (translatedWordList || "Error") as TranslatedWord[];
});

export const useFetchLanguageList = routeLoader$(async function () {
  const abortController = new AbortController();
  const res = await fetch(`${alLughaMismaAPI}/languages`, {
    signal: abortController.signal,
  });
  const data = await res.json();
  const languageList: string[] = [];
  data.language_list.forEach((language: string) => languageList.push(language));
  return (languageList || "Error") as string[];
});

export default component$(() => {
  useStylesScoped$(styles);
  const languagesList: string[] = [];
  const languagesListHTMLFriendly: string[] = [];
  useFetchLanguageList().value.forEach((language: string) =>
    languagesList.push(language.toString())
  );
  languagesList.forEach((language) =>
    languagesListHTMLFriendly.push(language.replace("'", "").replace(" ", ""))
  );
  const state = useStore({
    word_list: "Colors",
    languages: languagesListHTMLFriendly,
  });

  const translatedWordListResource = useResource$(
    async ({ track, cleanup }) => {
      const word_list = track(() => state.word_list);
      const languages = track(() => state.languages);
      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const res = await serverFetcher(word_list, languages);
      return (res || "Error") as TranslatedWord[];
    }
  );

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
        <select
          onInput$={(ev: any) => (state.word_list = ev.target.value)}
          value={state.word_list}
          aria-labelledby="Word List"
        >
          <option value="Colors">Colors</option>
          <option value="Numbers">Numbers</option>
        </select>
        <select
          // multiple={true}
          onInput$={(ev: any) => (state.languages = ev.target.value)}
          value={state.languages as string[]}
          aria-labelledby="Languages"
        >
          {languagesList.map((language) => (
            <option
              key={language}
              value={language.replace("'", "").replace(" ", "")}
            >
              {language}
            </option>
          ))}
        </select>
        <Resource
          value={translatedWordListResource}
          onResolved={(translatedWordList) => {
            return (
              <AlLughaMismaTable
                translatedWordList={translatedWordList}
                mode="TranslationByReferenceWord"
              />
            );
          }}
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
      content: "Al Lugha Misma - a comparative linguistics game",
    },
  ],
};
