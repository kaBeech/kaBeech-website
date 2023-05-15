import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>WebAssembly (WASM)</h1>
        <h2 class="responseTextLight">What is WebAssembly?</h2>
        <p>
          WebAssembly, or WASM, is a low-level programming language designed to
          be executed by web browsers
        </p>
        <h2 class="responseTextLight">
          Okay, you lost me again. Can you say that in human words?
        </h2>
        <p>
          Absolutely! But first let's talk about low-level and high-level
          programming languages
        </p>
        <p>
          Matter of fact, let's talk about my one-sentence answer the the
          question "What is WebAssembly?" This will be our example, because it's
          written in a way very similar to how we use high-level programming
          languages. Here it is again: "WebAssembly, or WASM, is a low-level
          programming language designed to be executed by web browsers"
        </p>
        <p>You know what's great about that sentence?</p>
        <p>
          It's a sentence. It's short. If you already understand what I mean by
          those words in that order, you're good to go. You don't even need to
          read the rest of this section to understand what WASM is. Easy!
        </p>
        <p>...for some folks. Inscrutable for others</p>
        <p>
          A high-level language assumes a level of knowlege of the person
          reading it. In the case of our WASM sentence, I assume quite a lot
          about you, dear reader. I assume you know what a low-level language
          is, and how it contrasts with a high-level one. I assume you know what
          it means for code to be executed, and why it's interesting that WASM
          can be executed by web browsers. I assume you know what{" "}
          <Link class="link">programming languages</Link> and{" "}
          <Link class="link">web browsers</Link> are. I assume that you can read
          my particular <Link class="link">ideolect</Link> of English, that
          you'll infer that "WASM" is an abbreviation for "Web Assembly," and
          that you'll pronounce it like /'wasm̩/ and not like "W-A-S-M"
        </p>
        <p>
          But some or all of that may be untrue and you may be left thinking{" "}
          <span class="link">
            "Who is this maniac, and why is xe making up so many weird words? I
            can make up words too, you know. Yupt!"
          </span>
        </p>
        <p>...which is why we have low-level programming languages!</p>
        <p>...</p>
        <p>
          WebAssembly is named that because it is an (ital: Assembly Language)
          for the (ital: Web)
        </p>
        <h2 class="responseTextLight">Why would I want to use WebAssembly?</h2>
        <p>Content coming soon!</p>
        <h2 class="responseTextLight">Where can I use WebAssembly?</h2>
        <p>Content coming soon!</p>
        <h2 class="responseTextLight">How can I use WebAssembly?</h2>
        <p>Content coming soon!</p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Tech"}
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
  title: "WebAssembly (WASM) - kaBeech",
  meta: [
    {
      name: "description",
      content: "Information about WebAssembly (WASM)",
    },
  ],
};
