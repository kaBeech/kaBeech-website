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
        <h1>Pronouns</h1>
        <h2 class="responseTextLight">What are your preferred pronouns?</h2>
        <p>Why, thank you for asking!</p>
        <p>
          I prefer xe/xyr or ze/zyr pronouns. Either pair works equally well -
          use whichever feels right in the moment!
        </p>
        <p>For possessive pronouns I like xys or zys</p>
        <p>
          Here's an example sentence: "I met xyr at xys house and xe drove me to
          the concert"
        </p>
        <h2 class="responseTextLight">How do you pronounce them?</h2>
        <p>
          The 'X' and 'Z' can both be pronounced /z/, like the 'Z' in 'Zebra'
        </p>
        <p>
          If you want to do something fancy to distinguish the consonants, for
          instance to use /d͡z/ for 'Z' and /x/ for 'X,' I support that as well!
        </p>
        <p>'Xe' and 'Ze' rhyme with 'He'</p>
        <p>'Xyr' and 'Zyr' rhyme with 'Her'</p>
        <p>'Xys' and 'Zys' rhyme with 'His'</p>
        <h2 class="responseTextLight">Why not use they/them?</h2>
        <h3>Grammatical Number</h3>
        <p>
          In English, they/them can be used to refer to either one person or
          multiple people. This can lead to ambiguity
        </p>
        <p>
          Consider this sentence: "Kyle went with Beechy to the concert. When
          they came back, their fingernails were painted neon colors." Did they
          both come back, or just Kyle? Whose fingernails were painted?
        </p>
        <p>
          Now try this one: "Kyle went with Beechy to the concert. When they
          came back, zys fingernails were painted neon colors." To me, this more
          clearly implies that both Beechy and Kyle came back, but that it's
          Kyle's fingernails that we're talking about
        </p>
        <h3>Subjective Feelings of Humanization</h3>
        <p>
          Additionally, to me, xe/xyr/ze/zyr pronouns feel more humanizing than
          they/them. For whatever reason, xe/xyr/ze/zyr pronouns make me feel
          more like a definite person and less like an 'it' than they/them
        </p>
        <p>
          I feel the need to note that I have had one dear friend who prefers it
          pronouns and I do not mean to diminish those who prefer them. What I
          mean to say is that on the spectrum of feeling between 'it' and
          'he/she,' 'they' feels somewhere in the middle and 'xe/ze' feels at
          home right there with 'he/she'
        </p>
        <h2 class="responseTextLight">Why both xe/xyr and ze/zyr?</h2>
        <h3>Reduced Ambiguity for Multiple Subjects</h3>
        <p>
          Having two options for pronouns can help make it clear who we're
          referring to when talking about more than one person
        </p>
        <p>
          Consider this passage: "Beechy drove xys blue car to Kyle's concert.
          After the opening act, Kyle drove onstage in a jet black car, matching
          xys hair. By the end of the show, the power of Music had turned both
          xys car and xys hair rainbow colored!"
        </p>
        <p>
          At the end of the show, whose car is rainbow colored? It's not
          completely clear
        </p>
        <p>
          Now try this one: "Beechy drove xys blue car to Kyle's concert. After
          the opening act, Kyle drove onstage in a jet black car, matching zys
          hair. By the end of the show, the power of Music had turned both xys
          car and zys hair rainbow colored!"
        </p>
        <p>
          With this wording, we clearly know that Beechy's car is the one that
          magically changed color
        </p>
        <h3>Duality</h3>
        <p>
          The idea of gender nonconformity to me represents the freedom to
          explore the wide reaches of possibility. Its nature is to set free,
          not to constrict
        </p>
        <p>
          I enjoy the concept of gender fluidity. Having both xe/xyr and ze/zyr
          options both celebrates duality and provides a framework for the
          gender-fluid experience to flourish without the need to default to
          using traditional pronouns
        </p>
        <p>
          Again, this is not to diminish those who prefer to fluctuate between
          he/him and she/her pronouns. On a personal note, before I decided on
          xe/xyr/ze/zyr pronouns I used to tell people that I don't mind what
          pronouns people use for me, but that I like it when they mix it up
        </p>
        <p>
          I said this because I like both he/him and she/her pronouns (as well
          as others) and I enjoy being able to partake in one without forsaking
          the others. However, this resulted in most people just defaulting to
          he/him all the time, which kinda bummed me out. I decided to find
          suitable non-binary pronouns for friends to default to and finally
          landed on the delightful options described on this page!
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to About Me"}
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
  title: "Pronouns - kaBeech",
  meta: [
    {
      name: "description",
      content: "A bit of information about my preferred pronouns",
    },
  ],
};
