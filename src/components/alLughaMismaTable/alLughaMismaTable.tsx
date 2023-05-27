import {
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "../../routes/fun/al-lugha-misma/al-lugha-misma.css?inline";

interface AlLughaMismaProps {
  alLughaMismaAPI: string;
}

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

export const AlLughaMismaTable = component$((props: AlLughaMismaProps) => {
  const state = useStore({
    alLughaMismaAPI: props.alLughaMismaAPI,
  });
  useStylesScoped$(styles);

  const translatedWordListResource = useResource$(async () => {
    const res = await fetch(
      `${state.alLughaMismaAPI}/word_list/Colors/languages/Arabic,English,French,Hawaiian,Hindi,Indonesian,PigLatin,Spanish,Swahili/key`
    );
    const data = await res.json();
    const translatedWordList: TranslatedWord[] = [];
    data.challenge_key.forEach((translatedWord: TranslatedWord) =>
      translatedWordList.push(translatedWord)
    );
    return (translatedWordList || "Error") as TranslatedWord[];
  });

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
    <div>
      <Resource
        value={translatedWordListResource}
        onResolved={(translatedWordList) => {
          const languages: string[] = [];
          const referenceWords: string[] = [];
          const translationsByLanguage: TranslationByLanguage[] = [];
          // const translationsByReferenceWord: TranslationByReferenceWord[] = [];

          for (const translatedWord of translatedWordList) {
            if (!languages.includes(translatedWord.language)) {
              languages.push(translatedWord.language);
            }
            if (
              !referenceWords.includes(translatedWord.reference_word_english)
            ) {
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
          return (
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
                    {translationByLanguage.translatedWords.map(
                      (translatedWord) => (
                        <td key={translatedWord}>{translatedWord}</td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      />
    </div>
  );
});
