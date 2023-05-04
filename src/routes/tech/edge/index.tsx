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
        <h1>Edge Functions</h1>
        <h2 class="responseTextLight">What is an Edge Function?</h2>
        <p>
          An Edge Function is a piece of code that is serverlessly deployed on
          the Edge
        </p>
        <h2 class="responseTextLight">
          Okay, that doesn't mean anything to me. What do you mean
          'serverlessly?' What is the 'Edge?' I'm hungry!
        </h2>
        <p>
          The Edge is a term we software engineers like to use to make a simple
          concept sound mysterious
        </p>
        <p>
          It just means that when you visit a webpage, the information is sent
          to your browser from somewhere geographically close to you. That place
          that the information is sent from, the closest possible place to you
          where the information is stored, is what we call the Edge
        </p>
        <p>
          The real reason we give it a special name is that it's kind of a
          complicated concept when we look behind the curtain
        </p>
        <p>
          Think of the World Wide Web as, well, a big web that covers the whole
          world. At various points on this web there are places that store
          information. At these places there are little helpers that bring
          information to you, the user (similar to how a server at a restaurant
          brings food to you). We call these helpers 'servers'
        </p>
        <p>
          Now, a 'serverless' website doesn't actually mean that there's no
          server involved. The information (or food) still has to get to you
          somehow. But as a builder of a serverless website, I don't put the
          server in my own home and maintain it myself. Instead, I pay a company
          like Netlify or Vercel to do the serving for me
        </p>
        <p>
          This is similar to me opening a restaurant chain without public dining
          areas and hiring out a delivery service to bring the food to my
          customers' homes. This restaurant and delivery service partnership
          works well for me, because I don't have to manage payroll and health
          insurance for my servers, or try to predict at which times I'll need
          more or less staff. Instead, the delivery service takes care of their
          servers and I pay them only when I need to deliver food, and only as
          much as I need
        </p>
        <p>
          The difficulty comes when the delivery service only has a few depots
          which they can dispatch servers from and they don't know which depot
          to use. If the server drives all the way from Seattle to my restaurant
          in Los Angeles only to deliver to someone a few blocks away, that
          leaves a lot of time for a delicious dinner to grow cold
        </p>
        <p>
          But what if the delivery company had a depot in Los Angeles and said,
          "Hey, this restaurant is in LA, why don't we send someone from our LA
          depot to deliver it?" This is essentially the idea behind Edge
          Functions
        </p>
        <p>
          With Edge Functions, I still let another company manage my servers,
          but that company makes sure that the server they're sending the
          information from is the closest one to the user visiting my website.
          This may sound like the obvious thing to do, but it's harder to pull
          off than it sounds, which is why it's exciting that Edge Functions are
          now available to developers like us!
        </p>
        <h2 class="responseTextLight">
          Why would I want to use Edge Functions?
        </h2>
        <h3>Speed</h3>
        <p>Content coming soon!</p>
        <h3>Location-Based Personalization</h3>
        <p>Content coming soon!</p>
        <h2 class="responseTextLight">
          What are some limitations of Edge Functions?
        </h2>
        <p>Content coming soon!</p>
        <h2 class="responseTextLight">How can I use Edge Functions?</h2>
        <p>Content coming soon!</p>
        <h2 class="responseTextLight">Why are Edge Functions exciting?</h2>
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
  title: "Edge Functions - kaBeech",
  meta: [
    {
      name: "description",
      content: "Information about Edge Functions",
    },
  ],
};
