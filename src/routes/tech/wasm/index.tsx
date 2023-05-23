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
          A high-level language assumes a level of knowledge of the person
          reading it. In the case of our WASM sentence, I assume quite a lot
          about you, dear reader. I assume you know what a low-level language is
          and how it contrasts with a high-level one. I assume you know what it
          means for code to be{" "}
          <Link
            class="link"
            href="https://en.wikipedia.org/wiki/Execution_(computing)"
          >
            executed
          </Link>{" "}
          and why it's interesting that WASM can be executed by web browsers. I
          assume you know what{" "}
          <Link
            class="link"
            href="https://en.wikipedia.org/wiki/Programming_language"
          >
            programming languages
          </Link>{" "}
          and{" "}
          <Link class="link" href="https://en.wikipedia.org/wiki/Web_browser">
            web browsers
          </Link>{" "}
          are. I assume that you can read my particular{" "}
          <Link class="link" href="https://en.wikipedia.org/wiki/Idiolect">
            ideolect
          </Link>{" "}
          of English, that you'll infer that "WASM" is an abbreviation for "Web
          Assembly," and that you'll pronounce it like /'wasm̩/ and not like
          "W-A-S-M"
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
          A low-level language can convey the same information that a high-level
          language does, but it spells out exactly what it means in more
          explicit terms. We can use my whole answer in this entire section as
          our example to describe low-level languages. It answers the same
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
        <p class="bin insert">
          <Link
            class="link bin"
            href="https://www.binaryhexconverter.com/binary-to-ascii-text-converter"
          >
            01011001011011110010110000100000010010010010011101101101001000000110001001100001011100110110100101100011011000010110110001101100011110010010000001100001001000000111001101101111011101010111000001100101011001000010110101110101011100000010000001100011011000010110110001100011011101010110110001100001011101000110111101110010001011000010000001001001001000000110100001100001011101100110010100100000011011100110111100100000011010010110010001100101011000010010000001110111011010000110000101110100001000000111100101101111011101010010011101110010011001010010000001110011011000010111100101101001011011100110011100100000011100100110100101100111011010000111010000100000011011100110111101110111
          </Link>
        </p>
        <p>
          In reality, the response will look a little different. Most machines
          don't actually speak English converted to simple character strings,
          like in that example where the letter 'a' is represented by the string
          '01100001'. Instead, they need exact instructions for what they are to
          do
        </p>
        <p>
          Consider this situation: I'm typing and want to type the character
          '^'. I can shout at my fingers "Hey, please type a '^' symbol for me!"
          all I want, but they're unlikely to understand the message
        </p>
        <p>
          Instead, I send bioelectric impulses through my nervous system to my
          muscles that instruct them in each action to take. These impulses
          might be translated something like this:
        </p>
        <ul class="insert">
          Please do the following:
          <li>
            - Move our left pinky finger to the left and back towards our
            stomach, about an inch in total, until it's seated above the 'Shift'
            key. While doing this, rotate our left wrist slightly so that the
            other fingers of our left hand stay close to their current positions
          </li>
          <li>
            - Press down on the 'Shift' key with our left pinky finger by about
            half an inch, or until we feel resistance, and hold it there
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
          Notice that these directions said nothing about the '^' symbol, or
          even typing at all. These are higher-level concepts that aren't useful
          to my muscles themselves
        </p>
        <p>
          Like my muscles, low-level machines need simpler instructions. The
          series of 1's and 0's in their language might translate to phrases
          like "move a copy of this value to this point in memory" or "multiply
          these two integers together"
        </p>
        <p>
          <strong>
            An 'Assembly Language' is a programming language that is structured
            in basic enough terms that a low-level computer can understand them
          </strong>
        </p>
        <h3>
          WebAssembly is so named because it is an{" "}
          <span class="ital">Assembly Language </span>for the{" "}
          <span class="ital">Web</span>
        </h3>
        <p>
          WebAssembly is a programming language that is structured in terms that
          web browsers (like Chrome and Firefox) can understand
        </p>
        <h2 class="responseTextLight">Where can I use WebAssembly?</h2>
        <p>
          <Link class="link" href="https://caniuse.com/wasm">
            WebAssembly is now supported by all major modern web browsers
          </Link>
        </p>
        <p>
          There are also runtimes for WebAssembly like{" "}
          <Link class="link" href="https://wasmtime.dev/">
            Wasmtime
          </Link>{" "}
          and{" "}
          <Link class="link" href="https://wasmer.io/">
            Wasmer
          </Link>{" "}
          that you can use to execute WASM code outside of a browser
        </p>
        <h2 class="responseTextLight">
          Okay, but I don't want to write programs in binary! How can I use
          WebAssembly?
        </h2>
        <p>
          Good news! You don't need to code in binary to write WebAssembly
          programs!
        </p>
        <p>
          If you really want to get into the nitty gritty details, WebAssembly
          has a text format (.wat), that provides a (somewhat) human-readable
          translation of the WASM binary
        </p>
        <p>
          Most folks, though, prefer something a bit more high-level. Luckily,
          we can use a WASM runtime like Wasmtime to write WASM programs using
          higher-level languages like Rust and Python
        </p>
        <p>
          This is one of the biggest draws that attracts people to WebAssembly:{" "}
          <strong>
            WASM provides a vehicle for other languages to run in web browsers
          </strong>
        </p>
        <h2 class="responseTextLight">
          Aww come on! Can't I just use JavaScript?
        </h2>
        <p>
          Once written, WebAssembly programs can also be interacted with using
          JavaScript/TypeScript, either on the client or using runtimes like
          Deno and Node.js
        </p>
        <p>
          Let's take my fantasy name generator Namagen as a server-side example.
          To incorporate Namagen into this website, I have the package running
          on a small Deno server{" "}
          <Link class="link" href="/tech/edge">
            hosted on the edge
          </Link>{" "}
          that is hit with an API call when you go to{" "}
          <Link class="link" href="/fun/namagen">
            the Namagen webpage
          </Link>
        </p>
        <p>
          For use on the client, a bundler like Vite/Rollup or WebPack is
          generally used to interface with WASM packages kept in the
          node_modules folder
        </p>
        <p>
          Both client and server-side WASM programs can be published to
          repositories like npm and deno.land/x. You might even be using WASM in
          your website already without knowing it!
        </p>
        <h2 class="responseTextLight">Why would I want to use WebAssembly?</h2>
        <p>
          WASM is fast! Since your web browser doesn't need an interpreter to
          understand WebAssembly, it can perform complex tasks very quickly
        </p>
        <p>
          In fact, WebAssembly is so fast that{" "}
          <Link
            class="link"
            href="https://www.infoq.com/news/2021/05/pyodide-python-webassembly/"
          >
            some folks are now using it to run full data science stacks inside a
            web browser
          </Link>
          !
        </p>
        <p>
          WASM enables you to run code written in non-JavaScript languages in
          the browser. The data science stack mentioned above is an example of
          Python code running in the browser using WASM!
        </p>
        <p>
          WebAssembly also has security benefits.{" "}
          <Link class="link" href="https://webassembly.org/docs/security/">
            WASM modules execute in sandboxed environments separate from each
            other and from the host runtime
          </Link>
          . That means that, in general, the modules can't talk with the outside
          world, or with each other, without going through you
        </p>
        <h2>
          WebAssembly is a great tool you can use to talk with web browsers in
          their own language!
        </h2>
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
