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
          The edge is a term we software engineers like to use to make a simple
          subject sound mysterious
        </p>
        <p>
          It just means that when you visit a webpage, the information is sent
          to your browser from somewhere geographically close to you. That place
          that the information is sent from, the closest possible place to you
          where the information is stored, is what we call the edge
        </p>
        <p>
          The real reason we give it a special name is that it's kind of a
          complicated concept when we look behind the curtain
        </p>
        <p>
          Let's think of the World Wide Web as, well, a big web that covers the
          whole world. At various points on this web there are places that store
          information. At these places there are little helpers that bring
          information to you, the user (similar to how a server at a restaurant
          brings food to you). We call these helpers 'servers'
        </p>
        <p>
          Now, a 'serverless' website doesn't actually mean that there's no
          server involved. The information (or food) still has to get to you
          somehow. But as the builder of a serverless website, I don't put the
          server in my own home and maintain it myself. Instead, I pay a company
          like Netlify or Vercel to do the serving for me
        </p>
        <p>
          This is similar to me opening a restaurant chain without public dining
          areas and hiring out a delivery service to bring the food to my
          customers' homes
        </p>
        <p>
          This restaurant and delivery service partnership works well for me,
          because I don't have to manage payroll and health insurance for my
          servers, or try to predict at which times I'll need more or less
          staff. Instead, the delivery service takes care of their servers and I
          pay them only when I need to deliver food
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
          depot to deliver it?" This is essentially the idea behind edge
          functions
        </p>
        <p>
          With edge functions, I still let another company manage my servers,
          but that company makes sure that the server they're sending the
          information from is the closest one to the user visiting my website.
          This may sound like the obvious thing to do, but it's harder to pull
          off than it sounds, which is why it's exciting that edge functions are
          now available to developers like us!
        </p>
        <h2 class="responseTextLight">
          Why would I want to use Edge Functions?
        </h2>
        <h3>Edge Functions are Fast</h3>
        <p>
          Since data doesn't have to travel as far to get to users, edge
          functions can deliver content in the blink of an eye!
        </p>
        {/* <p>
          One common way to make use of this is through caching data on the edge
        </p> */}
        <h3>Modularity</h3>
        <p>
          <strong>
            Edge functions can be used as{" "}
            <Link class="link" href="https://en.wikipedia.org/wiki/Middleware">
              middleware
            </Link>
            .
          </strong>{" "}
          Simply put, middleware receives a signal then makes some changes to
          the data in that signal before passing it along to its next
          destination
        </p>
        <p>
          You might be familiar with middleware through working with{" "}
          <Link class="link" href="http://expressjs.com/">
            Express.js
          </Link>{" "}
          in server-side code. With Express, a server receives a request,
          performs some operations, and then returns a response. All the code
          that performs the operations in the middle of that process, between
          when a request is received and when a response is returned, is called
          middleware
        </p>
        <p>
          You can use middleware edge functions to break up a large application
          into smaller modules that work together. One popular use case here is
          authentication. If you can move your authentication logic to an edge
          function, authorizing your users will be quicker, your main servers
          will do less work, and your code may also get more organized. The same
          can be said for caching when using an edge-enabled key-value data
          store like{" "}
          <Link
            class="link"
            href="https://developers.cloudflare.com/workers/learning/how-kv-works/"
          >
            Cloudflare Workers KV
          </Link>
        </p>
        <h3>Location-Based Personalization</h3>
        <p>
          Since edge functions can be used as middleware at a location
          geographically close to your users, they can do quite a lot to
          personalize a user's experience!
        </p>
        <p>
          One obvious example is language localization. Suppose I have a website
          based in France, but I have users all over Europe so my website is
          simultaneously provided in multiple languages. Although my users can
          request a specific language manually or via browser/OS settings, if no
          specific language is requested the site is rendered in French.
          However, I can write an edge function that serves my website in a
          different language depending on which country it is accessed from
        </p>
        <p>
          This way, users in Greece get my website in Greek, users in Finland
          get my site in Finnish, users in Malta get it in Maltese, and so on
        </p>
        <p>
          Furthermore, if I have caching set up as described above,
          Turkish-language assets would be cached for users in Turkey, allowing
          them to access it very quickly
        </p>
        <p>
          Let's take another example: sales tax. Suppose I have an eCommerce
          site hosted in the United States. Sales tax varies widely across the
          US and it can be a pain to calculate. With edge functions I can
          automatically show the correct sales tax for my customers, whether
          they're in Washington or Virginia, and calculate a final price without
          breaking the flow that leads a potential customer to a purchase
        </p>
        {/* <h2 class="responseTextLight">
          What are some limitations of edge functions?
        </h2>
        <p>Function size limits (commonly 50MB)</p>
        <p>Limited Node.js support on some platforms</p>
        <p>Chron Jobs not available on some platforms</p>
        <p>Content coming soon!</p> */}
        <h2 class="responseTextLight">How can I use Edge Functions?</h2>
        <p>
          Luckily, using edge functions is pretty simple, because most of the
          setup is done by a hosting provider like{" "}
          <Link
            class="link"
            href="https://vercel.com/docs/concepts/functions/edge-functions"
          >
            Vercel
          </Link>{" "}
          or{" "}
          <Link
            class="link"
            href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions.html"
          >
            AWS
          </Link>
          . The tricky part here is making sure that your program will run on
          the edge. There are limitations to what you can run, and each hosting
          providers' limitations are slightly different
        </p>
        <p>
          One thing you'll have to consider when using edge functions is the
          size of your program. Each hosting provider sets a limit on the
          maximum size of code they will host in an edge function. A common
          maximum is 50MB, but in some cases it may be as small as 10KB!
        </p>
        <p>
          Now, 50MB may seem huge, but keep in mind that this includes all your
          program's dependencies, including the famously massive node_modules
          folder. There are of course ways to mitigate this limitation, such as
          breaking up your project into smaller parts that can each be hosted on
          their own edge function, but it's still an important factor to be
          aware of
        </p>
        <p>
          In addition, there will be a limit on how long your function can run
          before being timed out. Again, this will be set by the hosting
          provider - it could be as long as 30 seconds or less than a
          millisecond
        </p>
        <p>
          Last but not least, most providers use a custom runtime environment
          (instead of Node.js) to execute your code. Common consequences of this
          include requiring the use of{" "}
          <Link
            class="link"
            href="https://www.typescriptlang.org/docs/handbook/2/modules.html"
          >
            ES modules
          </Link>{" "}
          and not providing access to some browser and/or Node APIs
        </p>
        <p>
          Keep in mind that these are only a selection of the limitations placed
          on edge functions. For full info on relevant limitations, please
          contact your hosting provider
        </p>
        <h2 class="responseTextLight">Why are Edge Functions exciting?</h2>
        <p>
          One cool thing about edge functions is that they help make the web
          accessible to users all over the world!
        </p>
        <p>
          Living in North America, we get used to webpages loading quickly and
          not waiting on long response times. After just a few seconds we often
          get restless and start complaining or switching to a different tab
        </p>
        <p>
          We're allowed this luxury because{" "}
          <Link
            class="link"
            href="https://w3techs.com/technologies/overview/server_location"
          >
            over 35% of all websites are hosted in the United States
          </Link>
          . Internet users in South Africa, for example, are more used to longer
          wait times since only about 0.5% of websites are hosted in their
          country and the nearest country to them with a larger piece of the web
          hosting pie (Brazil, with a 1.1% share) is thousands of miles away
          across the Atlantic Ocean!
        </p>
        <p>
          Since edge functions bring data from a source physically close to the
          user, developers can now put faster speeds and more relevant content
          into the hands of users in South Africa and all over the world!
        </p>
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
