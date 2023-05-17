import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./wasm.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

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
          about you, dear reader. I assume you know what a low-level language is
          and how it contrasts with a high-level one. I assume you know what it
          means for code to be executed and why it's interesting that WASM can
          be executed by web browsers. I assume you know what{" "}
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
          language would take more time to convey an idea. However, this is not
          always the case
        </p>
        <p>
          Imagine someone reading our one-sentence answer and not knowing what a
          'low-level programming language' is. Let's call this person 'Kyle.' By
          xemself, xe can sit and reread the sentence, but without further
          information xe might not get much closer to understanding it. Xe could
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
          sentence until xe finally understands it, takes a long time
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
        <p>Right you are!</p>
        <p>
          Computers, once you follow the chain of technology down to a low
          enough level (see what I did there?), only understand low-level
          programming languages. If you feed your computer's CPU a string of
          text that says "Hey, could you print me something that says 'Hello
          World,' but in all caps please?" you're likely to receive a response
          like this:
        </p>
        <p class="bin">
          "
          <Link class="link bin" href="https://lingojam.com/BinaryTranslator">
            01011001011011110010110000100000010010010010011101101101001000000110001001100001011100110110100101100011011000010110110001101100011110010010000001100001001000000111001101101111011101010111000001100101011001000010110101110101011100000010000001100011011000010110110001100011011101010110110001100001011101000110111101110010001011000010000001001001001000000110100001100001011101100110010100100000011011100110111100100000011010010110010001100101011000010010000001110111011010000110000101110100001000000111100101101111011101010010011101110010011001010010000001110011011000010111100101101001011011100110011100100000011100100110100101100111011010000111010000100000011011100110111101110111
          </Link>
          "
        </p>
        <p>
          In reality, the response will look a little different. Although we
          often consider binary code (which is what all those 1's and 0's are)
          as the classic low-level language that machines think in, modern
          machines are a bit more complicated. These days, most computers use
          hexadecimal code (which uses the numbers 0-9 as well as the letters
          a-f) to communicate
        </p>
        <p>
          In addition, most machines don't actually speak English converted to
          simple character strings, like in that example where the letter 'a' is
          represented by the string '01100001'. Instead, they need exact
          instructions for what they are to do
        </p>
        <p>
          Consider this situation: I'm typing and want to type the character
          '^'. I can shout at my fingers "Hey, please type an '^' symbol for
          me!" all I want, but they're unlikely to understand the message
        </p>
        <p>
          Instead, I send electrical impulses through my nervous system to my
          muscles that instruct them in each action to take. These impulses
          might be translated something like this:
        </p>
        <ul>
          Please do the following:
          <li>
            - Move our left pinky to the left and back towards our stomach,
            about an inch in total, until it's seated above the 'Shift' key
          </li>
          <li>
            - Press down on the 'Shift' with our left pinky by about half an
            inch, or until we feel resistance, and hold it there
          </li>
          <li>
            - Move our right wrist to the left and out away from our stomach by
            about 2 inches so that our right index finger can more easily
            stretch out. While doing this, rotate our right wrist slightly so
            that the right part of our right hand stays close to its current
            position
          </li>
          <li>
            - Reach out with our right index finger to the left and out away
            from our stomach, about half an inch, until it's seated above the
            '6' key
          </li>
          <li>
            - Press down on the '6' key with our right index finger by about
            half an inch, or until we feel resistance
          </li>
          <li>
            - Quickly release our hold on the '6' key and move our right hand
            back to our neutral position
          </li>
          <li>
            - Release our hold on the 'Shift' key and move our left hand back to
            our neutral position
          </li>
          Thank you!
        </ul>
        <p>
          Notice that these signals said nothing about typing or the '^' symbol.
          These are
        </p>
        <p>
          Regardless of whether they use binary or hexidecimal characters, these
          characters must have a system built around them that makes it clear
          what "010110010110" actually means. These systems that organize
          characters in ways that machines can understand are called 'assembly
          languages'
        </p>
        <h3>
          An 'Assembly Language' is a low-level programming language that a
          machine can understand
        </h3>
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
