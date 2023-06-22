import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../../routes/fun/al-lugha-misma/al-lugha-misma.css?inline";

interface AlLughaMismaProps {
  translatedWordList: TranslatedWord[];
  mode: "TranslationByLanguage" | "TranslationByReferenceWord";
}

interface TranslatedWord {
  reference_word_english: string;
  transliterated_word: string;
  language: string;
}

interface TranslationByReferenceWord {
  referenceWord: string;
  translatedWords: string[];
}

interface TranslationByLanguage {
  language: string;
  translatedWords: string[];
}

export const AlLughaMismaTable = component$((props: AlLughaMismaProps) => {
  const translatedWordList = props.translatedWordList;
  useStylesScoped$(styles);

  const languages: string[] = [];
  const referenceWords: string[] = [];

  for (const translatedWord of translatedWordList) {
    if (!languages.includes(translatedWord.language)) {
      languages.push(translatedWord.language);
    }
    if (!referenceWords.includes(translatedWord.reference_word_english)) {
      referenceWords.push(translatedWord.reference_word_english);
    }
  }

  switch (props.mode) {
    case "TranslationByLanguage": {
      const translationsByLanguage: TranslationByLanguage[] = [];

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
        <div>
          <table>
            <thead>
              <th>Reference</th>
              {referenceWords.map((referenceWord) => (
                <th key={referenceWord}>{referenceWord}</th>
              ))}
            </thead>
            <tbody>
              {translationsByLanguage.map((translationByLanguage) => (
                <tr key={translationByLanguage.language}>
                  <th>{translationByLanguage.language}</th>
                  {translationByLanguage.translatedWords.map(
                    (translatedWord) => (
                      <td key={translatedWord}>{translatedWord}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case "TranslationByReferenceWord": {
      const translationsByReferenceWord: TranslationByReferenceWord[] = [];

      for (const referenceWord of referenceWords) {
        translationsByReferenceWord.push({
          referenceWord: referenceWord,
          translatedWords: [],
        });
      }

      for (const translationByReferenceWord of translationsByReferenceWord) {
        for (const translatedWord of translatedWordList) {
          if (
            translatedWord.reference_word_english ===
            translationByReferenceWord.referenceWord
          ) {
            translationByReferenceWord.translatedWords.push(
              translatedWord.transliterated_word
            );
          }
        }
      }

      return (
        <div>
          <table>
            <thead>
              <th>Reference</th>
              {languages.map((language) => (
                <th key={language}>{language}</th>
              ))}
            </thead>
            <tbody>
              {translationsByReferenceWord.map((translationByReferenceWord) => (
                <tr key={translationByReferenceWord.referenceWord}>
                  <th>{translationByReferenceWord.referenceWord}</th>
                  {translationByReferenceWord.translatedWords.map(
                    (translatedWord) => (
                      <td key={translatedWord}>{translatedWord}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    default:
      console.error("Invalid Al-Lugha Misma table mode");
      return <div>Invalid Al-Lugha Misma table mode</div>;
  }
});
