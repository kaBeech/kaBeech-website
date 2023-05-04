import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./al-lugha-misma.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>Al Lugha Misma</h1>
        <p>You say "potato" (English), and I say "baTaaTaa" (Arabic)</p>
        <p>Or "papa" (Spanish)!</p>
        <p>
          We all use words a little differently. But sometimes I'm amazed by how
          similar our words are, even across languages! For example, here's how
          we say "potato" in a few languages:
        </p>
        {/* Fetch potato legend from Al Lugha Misma API and put it in a table */}
        {/* Hindi: paTeTo, Hawaiian: ʻUala kahiki ('uala means sweet potato, kahiki 
        refers to a foreign place (prototypically Tahiti)), Swahili: mbatata (or kiazi), 
        Indonesian: kentang, French: pomme de terre, Pig Latin: otatopay */}
        {/* <table>
          <tr>
            <th>Language</th>
            <td>Arabic</td>
            <td>English</td>
            <td>French</td>
            <td>Hawaiian</td>
            <td>Hindi</td>
            <td>Indonesian</td>
            <td>Pig Latin</td>
            <td>Spanish</td>
            <td>Swahili</td>
          </tr>{" "}
          <tr>
            <th>Translation</th>
            <td>baTaaTaa</td>
            <td>potato</td>
            <td>pomme de terre</td>
            <td>ʻUala kahiki</td>
            <td>paTeTo</td>
            <td>kentang</td>
            <td>otatopay</td>
            <td>papa</td>
            <td>mbatata (or kiazi)</td>
          </tr>{" "}
        </table> */}
        <table>
          <tr>
            <th>Language</th>
            <th>Translation</th>
          </tr>{" "}
          <tr>
            <td>Arabic</td>
            <td>baTaaTaa</td>
          </tr>{" "}
          <tr>
            <td>English</td>
            <td>potato</td>
          </tr>{" "}
          <tr>
            <td>French</td>
            <td>pomme de terre</td>
          </tr>{" "}
          <tr>
            <td>Hawaiian</td>
            <td>'uala kahiki</td>
          </tr>{" "}
          <tr>
            <td>Hindi</td>
            <td>paTeTo</td>
          </tr>{" "}
          <tr>
            <td>Indonesian</td>
            <td>kentang</td>
          </tr>{" "}
          <tr>
            <td>Pig Latin</td>
            <td>otatopay</td>
          </tr>{" "}
          <tr>
            <td>Spanish</td>
            <td>papa</td>
          </tr>{" "}
          <tr>
            <td>Swahili</td>
            <td>mbatata (or kiazi)</td>
          </tr>{" "}
        </table>

        <p>
          This is a game exploring comparitive linguistics. It is currently
          under construction, but in the next release you will be able to choose
          two or more languages to play with (including one referance language,
          English by default). Then you can choose a topic (such as Numbers or
          Colors) to be given a list of words from that topic in the reference
          language
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
