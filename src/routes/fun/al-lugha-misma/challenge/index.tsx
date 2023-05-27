import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead, RequestEvent } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "../al-lugha-misma.css?inline";

interface TranslatedWord {
  reference_word_english: string;
  transliterated_word: string;
  language: string;
}

// interface TranslationByReferenceWord {
//   referenceWord: string;
//   translatedWords: string[];
// }

interface TranslationByLanguage {
  language: string;
  translatedWords: string[];
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

export const useGetTranslatedWordList = routeLoader$(async () => {
  const res = await fetch(
    `${alLughaMismaAPI}/word_list/Colors/languages/Arabic,English,French,Hawaiian,Hindi,Indonesian,PigLatin,Spanish,Swahili/key`
  );
  const data = await res.json();
  const translatedWordList: TranslatedWord[] = [];
  data.challenge_key.forEach((translatedWord: TranslatedWord) =>
    translatedWordList.push(translatedWord)
  );
  return (translatedWordList || "Error") as TranslatedWord[];
});

export default component$(() => {
  useStylesScoped$(styles);
  const translatedWordList = useGetTranslatedWordList().value;
  const languages: string[] = [];
  const referenceWords: string[] = [];
  const translationsByLanguage: TranslationByLanguage[] = [];
  // const translationsByReferenceWord: TranslationByReferenceWord[] = [];

  for (const translatedWord of translatedWordList) {
    if (!languages.includes(translatedWord.language)) {
      languages.push(translatedWord.language);
    }
    if (!referenceWords.includes(translatedWord.reference_word_english)) {
      referenceWords.push(translatedWord.reference_word_english);
    }
  }

  for (const language of languages) {
    translationsByLanguage.push({
      language: language,
      translatedWords: [],
    });
  }

  for (const translationByLanguage of translationsByLanguage) {
    for (const translatedWord of translatedWordList) {
      if (translatedWord.language === translationByLanguage.language) {
        translationByLanguage.translatedWords.push(
          translatedWord.transliterated_word
        );
      }
    }
  }

  // for (const referenceWord of referenceWords) {
  //   translationsByReferenceWord.push({
  //     referenceWord: referenceWord,
  //     translatedWords: [],
  //   });
  // }

  // for (const translationByReferenceWord of translationsByReferenceWord) {
  //   for (const translatedWord of translatedWordList) {
  //     if (
  //       translatedWord.referenceWordEnglish ===
  //       translationByReferenceWord.referenceWord
  //     ) {
  //       translationByReferenceWord.translatedWords.push(
  //         translatedWord.transliteratedWord
  //       );
  //     }
  //   }
  // }

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
        <table>
          <thead>
            <th>Reference Word</th>
            {referenceWords.map((referenceWord) => (
              <th key={referenceWord}>{referenceWord}</th>
            ))}
          </thead>
          <tbody>
            {translationsByLanguage.map((translationByLanguage) => (
              <tr key={translationByLanguage.language}>
                <td>{translationByLanguage.language}</td>
                {translationByLanguage.translatedWords.map((translatedWord) => (
                  <td key={translatedWord}>{translatedWord}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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
