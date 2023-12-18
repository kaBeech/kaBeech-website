import {
  $,
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
    word_list: "Numbers",
    languages: languagesListHTMLFriendly,
    language1: "French",
    language2: "Spanish",
    transliterationNotesAction: "show",
  });

  const toggleTransliterationNotes = $(() => {
    state.transliterationNotesAction === "show"
      ? (state.transliterationNotesAction = "hide")
      : (state.transliterationNotesAction = "show");
  });

  const translatedWordListResource = useResource$(
    async ({ track, cleanup }) => {
      const word_list = track(() => state.word_list);
      const language1 = track(() => state.language1);
      const language2 = track(() => state.language2);
      const languages = `${language1},${language2}`;
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
        <h2>Legend Reference</h2>
        <img
          class="logo"
          src="/icons/alLughaMismaColorized2.webp"
          alt="The Al Lugha Misma logo (a calligraphic representation of 'Al Lugha Misma' in mixed Naskh and Devanagari script"
        />
        <button class="pointer" onClick$={() => toggleTransliterationNotes()}>
          Click here to {state.transliterationNotesAction} transliteration notes
        </button>
        <br />
        {state.transliterationNotesAction === "show" ? (
          <>
            <div>
              <label for="wordList">Word List: </label>
              <select
                class="pointer"
                onInput$={(ev: any) => (state.word_list = ev.target.value)}
                value={state.word_list}
                aria-label="Word List"
                name="wordList"
              >
                <option value="Colors">Colors</option>
                <option value="Numbers">Numbers</option>
              </select>
            </div>
            <div>
              <label for="langage1">First Language: </label>
              <select
                class="pointer"
                onInput$={(ev: any) => (state.language1 = ev.target.value)}
                value={state.language1}
                aria-label="Language 1"
                name="language1"
              >
                {languagesList.map((language) =>
                  language === "French" ? (
                    <option key="French" value="French" selected>
                      French
                    </option>
                  ) : (
                    <option
                      key={language}
                      value={language.replace("'", "").replace(" ", "")}
                    >
                      {language}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label for="langage2">Second Language: </label>
              <select
                class="pointer"
                onInput$={(ev: any) => (state.language2 = ev.target.value)}
                value={state.language2}
                aria-label="Language 2"
                name="language2"
              >
                {languagesList.map((language) =>
                  language === "Spanish" ? (
                    <option key="Spanish" value="Spanish" selected>
                      Spanish
                    </option>
                  ) : (
                    <option
                      key={language}
                      value={language.replace("'", "").replace(" ", "")}
                    >
                      {language}
                    </option>
                  )
                )}
              </select>
            </div>
            <Resource
              value={translatedWordListResource}
              onPending={() => (
                <div>
                  <p>Loading...</p>
                  <div style="height:18em"></div>
                </div>
              )}
              onResolved={(translatedWordList) => {
                return (
                  <AlLughaMismaTable
                    translatedWordList={translatedWordList}
                    mode="TranslationByReferenceWord"
                  />
                );
              }}
            />
          </>
        ) : (
          <div>
            <h3>Transliteration notes</h3>
            <p>
              This game involves quickly typing words that are not in English
              using a (presumably) English-language keyboard
            </p>
            <p>
              To make this easier, I have transliterated many words from their
              native scripts into simple Latin characters. Even in languages
              that commonly use Latin-based scripts, I have transliterated some
              words to avoid forcing players to quickly type diacritics
            </p>
            <p>
              In cases where transliterating two graphemes to the same letter
              would lead to ambiguity, I have used capitalization and letter
              combinations to differentiate them
            </p>
            <p>
              This is why, for example the French word "zéro" is rendered as
              "zEro" and the Arabic word "ثَلاثة" is rendered as "thalaatha"
            </p>
            <p>
              When the full game goes live I will add transliteration (and some
              pronunciation) guides for each available language. For now, just
              know that there is some reason behind the madness!
            </p>
          </div>
        )}
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
