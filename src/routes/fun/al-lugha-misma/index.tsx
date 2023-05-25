import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestEvent,
  routeLoader$,
} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./al-lugha-misma.css?inline";

// interface Language {
//   id: Number;
//   created_at: string;
//   name: string;
// }

interface Potato {
  language: string;
  transliterated_word: string;
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

// export const useGetALMLanguages = routeLoader$(async () => {
//   const res = await fetch(`${alLughaMismaAPI}/languages`);
//   const data = await res.json();
//   const almLanguages: string[] = [];
//   data.language_list.forEach((language: Language) =>
//     almLanguages.push(language.name)
//   );
//   return almLanguages || "Error";
// });

export const useGetPotatoList = routeLoader$(async () => {
  const res = await fetch(`${alLughaMismaAPI}/potato`);
  const data = await res.json();
  const potatoList: Potato[] = [];
  console.log(data);
  data.potato_list.forEach((potato: Potato) => potatoList.push(potato));
  console.log(potatoList);
  return (potatoList || "Error") as Potato[];
});

export default component$(() => {
  useStylesScoped$(styles);
  const potatoList = useGetPotatoList().value;

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
        <p>You say "potato" (English), and I say "baTaaTaa" (Arabic)</p>
        <p>Or "papa" (Spanish)!</p>
        <p>
          We all use words a little differently. But sometimes I'm amazed by how
          similar our words are, even across languages! For example, here's how
          we say "potato" in a few languages:
        </p>
        <table>
          <thead>
            <th>Language</th>
            <th>Translation</th>
          </thead>
          <tbody>
            {potatoList.map((potato) => (
              <tr>
                <td>{potato.language}</td>
                <td>{potato.transliterated_word}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>
          This is a game exploring comparative linguistics. It is currently
          under construction, but in the next release you will be able to choose
          two or more of the languages above to play with (including one
          reference language, English by default). Then you can choose a topic
          (such as Numbers or Colors) to be given a list of words from that
          topic in the reference language
        </p>
        <p>Your challenge is to type the words in the remaining language(s)!</p>
        <p>
          Be courageous! You will also be given a legend of the words in each
          language to help you {"=)"}
        </p>
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
