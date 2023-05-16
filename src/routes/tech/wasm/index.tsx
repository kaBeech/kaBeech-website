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
        <p>Absolutely!</p>
        <h3>
          First let's talk about low-level and high-level programming languages
        </h3>
        <p>
          Matter of fact, let's talk about my one-sentence answer the the
          question "What is WebAssembly?" This will be our example, because it's
          written in a similar way to how we use high-level programming
          languages. Here it is again:
        </p>
        <p>
          "WebAssembly, or WASM, is a low-level programming language designed to
          be executed by web browsers"
        </p>
        <p>You know what's great about that sentence?</p>
        <p>
          It's a sentence. It's short. If you read that sentence and understand
          what I mean by those words in that order, you're good to go. You don't
          even need to read the rest of this section to understand what WASM is.
          Easy!
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
          <span class="responseTextLight">
            "Who is this maniac, and why is xe making up so many weird words? I
            can make up words too, you know. Yupt!"
          </span>
        </p>
        <p>...which is why we have low-level programming languages!</p>
        <p>
          A low-level language can talk about the same concepts that a
          high-level language does, but it spells out exactly what it means in
          more explicit terms. We can use my whole answer in this entire section
          as our example to describe low-level languages. It answers the same
          question, but assumes less of the reader and walks through the answer
          step by step
        </p>
        <p>
          Using more low-level language makes it more likely that you'll
          understand the answer, but it takes a lot longer to spell everything
          out. Look at how long this section is compared with the last one!
        </p>
        <p>
          Given the added length, you might conclude that using low-level
          language would make it take more time to convey an idea. However, this
          is not always the case
        </p>
        <p>
          Imagine someone reading our one-sentence answer and not knowing what a
          'low-level programming language' is. Let's call this person 'Kyle.' By
          xemself, xe can sit and reread the sentence, but without further
          information xe might not get much closer to understanding it. xe could
          guess what it means, but this could lead to unpredictable results
        </p>
        <p>
          Or... xe could find a friend to interpret the sentence for xyr. Let's
          call this interpreter 'Beechy'
        </p>
        <p>
          Beechy could read the sentence, and if ze understands the meaning I
          intend to convey, ze could spell it out to Kyle bit by bit. This way,
          Kyle will likely understand the information as relayed by Beechy
        </p>
        <p>
          However, there are a couple issues with this strategy. Kyle has to
          rolodex xis list of friends, remember that Beechy can interpret
          high-level gibberish, contact Beechy, and prepare some ice cream to
          bribe zyr into helping out
        </p>
        <p>
          While Beechy eats zis ice cream, ze has to read the high-level answer
          and think about what I might mean by it. If there are any terms ze is
          unsure about, ze will (hopefully) take the time to look them up
        </p>
        <p>
          Once Beechy has a full stomach and a good grasp on what the sentence
          means, ze must figure out a way to convey that information to Kyle in
          a way xe will understand. Then, Beechy will have to actually convey
          that information to Kyle, probably stopping to answer some of xis
          questions along the way. This whole process, from Kyle reading the
          sentence until xe finally understands it, takes a lot of time
        </p>
        <p>
          ...and this is all assuming that Beechy interprets what I mean
          correctly and nothing gets lost in translation!
        </p>
        <p>
          All told, if Kyle doesn't understand my high-level, one sentence
          answer, it is ultimately faster and more reliable for me to provide an
          answer using lower-level language
        </p>
        <h3 class="responseTextLight">
          Okay, I'm with you now. But... weren't we talking about computers or
          something?
        </h3>
        <p>...</p>
        <p>
          WebAssembly is named that because it is an{" "}
          <span class="ital">Assembly Language </span>for the
          <span class="ital">Web</span>
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
