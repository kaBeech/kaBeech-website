import {
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, server$ } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./star-crossed.css?inline";

const birthday1 = "1999-08-11";
const birthday2 = "2000-03-03";

const serverFetcher = server$(async function (birthday1, birthday2) {
  const starCrossedAPI = this.env.get("STARCROSSED_API");
  if (starCrossedAPI == undefined) {
    console.error("STARCROSSED_API string not found upon request");
  }
  const abortController = new AbortController();
  const res = await fetch(
    `${starCrossedAPI}/star-crossings/${birthday1},${birthday2}`,
    {
      signal: abortController.signal,
    }
  );
  const data = await res.json();
  let closestStarShownName: string;
  if (data.closestStarCommonName !== "null") {
    closestStarShownName = data.closestStarCommonName.replace("�", "° ");
  } else {
    closestStarShownName = data.closestStarName;
  }
  return (
    {
      coordinates: data.coordinates,
      infoURL: data.infoURL,
      skyMapURL: data.skyMapURL,
      closestStarName: data.closestStarName,
      closestStarCommonName: data.closestStarCommonName,
      staticPhotoURL: data.staticPhotoURL,
      closestStarShownName,
      birthdays: ["1948-08-11", "1952-03-3"],
    } || `Error - URI is ${starCrossedAPI}/star-crossings/1948-8-11,1952-3-3`
  );
});

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    birthday1,
    birthday2,
    skyMapClass: "hidden height1 positionFixed",
    staticPhotoClass: "marginTop0",
  });

  const starCrossedResource = useResource$<any>(async ({ track, cleanup }) => {
    const birthday1 = track(() => state.birthday1);
    const birthday2 = track(() => state.birthday2);
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const res = await serverFetcher(birthday1, birthday2);
    return (
      res ||
      `Error fetching starCrossedAPI. URI requested is [starCrossedAPI]/star-crossings/${birthday1},${birthday2}`
    );
  });

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1 class="title">StarCrossed</h1>
        <img
          class="logo"
          src="/starCrossedLogo.webp"
          sizes="12em"
          width={570}
          height={570}
          alt="A rainbow starry heart, the StarCrossed logo"
        />
        <p>
          StarCrossed is a tool for finding a spot in the universe special to
          two people. I built it as an experiment with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://deno.com/kv"}
            class={`link`}
          >
            Deno KV
          </a>{" "}
          (an{" "}
          <Link class="link" href="/tech/edge">
            edge-enabled
          </Link>
          , globally distributed key-value store), as my entry in{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://deno.com/blog/deno-kv-hackathon"}
            class={`link`}
          >
            the Deno KV Hackathon
          </a>
        </p>
        <p>
          StarCrossed is inspired by the concept illustrated in{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://xkcd.com/201/"
          >
            this xkcd comic:
          </a>
        </p>
        <img
          src="/xkcd_christmas_gps.webp"
          alt="xkcd Christmas GPS comic"
          title="Christmas GPS"
          style="max-width: 90%; aspect-ratio: 740/203;"
          class="xkcd"
          width={740}
          height={203}
        />
        <p>...but in space!</p>
        <p>
          The basic idea is to input the birthdays of you and a loved one, and
          return a set of celestial coordinates special to the two of you
        </p>
        <p>
          In addition to these coordinates, you'll also receive the name of the
          star closest to these coordinates (within 25 parsecs of Earth), a link
          to some more information about this star, and a link to an interactive
          map of the area your coordinates reside in
        </p>
        <p>
          If the location is out of your starship's range, is too crowded when
          you get there, or just isn't visible from your porch, fear not! Try
          entering in your birthdays in the reverse order - you'll get a
          different response this way
        </p>
        <p>Have fun!</p>
        <h2>Enter Birthdays:</h2>
        <input
          class="pointer"
          type="date"
          onInput$={(ev: any) => (state.birthday1 = ev.target.value)}
          value={birthday1}
          aria-label="Birthday 1"
        />
        <input
          class="pointer"
          type="date"
          onInput$={(ev: any) => (state.birthday2 = ev.target.value)}
          value={birthday2}
          aria-label="Birthday 2"
        />
        <Resource
          value={starCrossedResource}
          onPending={() => {
            return (
              <div>
                <h2>
                  StarCrossed Coordinates: <strong>Loading...</strong>
                </h2>
                <h3>Closest Star: Loading...</h3>
                <p>Loading extra information about the closest star...</p>
                <h3>
                  This is what it looks like in your own special corner of the
                  universe:
                </h3>
                <p>Loading iframe...</p>
                <br />
                <div class={"iframePlaceholder"}></div>
              </div>
            );
          }}
          onResolved={(starCrossedData) => {
            return (
              <div class="flex column">
                <h2>
                  StarCrossed Coordinates:{" "}
                  <strong>
                    {starCrossedData.coordinates[0][0]}h{" "}
                    {starCrossedData.coordinates[0][1]}m{" "}
                    {starCrossedData.coordinates[0][2]}s,{" "}
                    {starCrossedData.coordinates[1][0]}°{" "}
                    {starCrossedData.coordinates[1][1]}′{" "}
                    {starCrossedData.coordinates[1][2]}″
                  </strong>
                </h2>
                <h3>Closest Star: {starCrossedData.closestStarShownName}</h3>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link margin1"
                    href={starCrossedData.infoURL}
                  >
                    Learn more about {starCrossedData.closestStarShownName}!
                  </a>
                </p>
                <h3>
                  This is what it looks like in your own special corner of the
                  universe:
                </h3>
                <p class={state.staticPhotoClass}>
                  This image is a static photo. To view a super cool interactive
                  Sky Map, please{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link"
                    href={`https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en`}
                  >
                    allow insecure content in your browser
                  </a>{" "}
                  (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link"
                    href={`https://www.comoapple.com/how-to-allow-mixed-content-in-safari.html`}
                  >
                    Safari link
                  </a>
                  ) or{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link"
                    href={`http://www.wikisky.org/${starCrossedData.skyMapURL.slice(
                      36
                    )}`}
                  >
                    click here to view the interactive map on WikiSky
                  </a>
                </p>
                <img
                  src={starCrossedData.staticPhotoURL}
                  alt={`"Image of the starCrossing for ${birthday1} x ${birthday2}`}
                  width={700}
                  height={700}
                  id="staticPhoto"
                  class={state.staticPhotoClass}
                />
                <p class={`${state.skyMapClass} marginTop0`}>
                  Hover over stars to see info, use the slider to zoom in/out,
                  click and drag to look around
                </p>
                <iframe
                  onLoad$={() => {
                    state.skyMapClass = "";
                    state.staticPhotoClass = "displayNone";
                  }}
                  title="StarCrossed skyMap"
                  id="skyMap"
                  class={`${state.skyMapClass} marginTop0`}
                  src={starCrossedData.skyMapURL}
                ></iframe>{" "}
                <p class={`${state.skyMapClass}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={starCrossedData.staticPhotoURL}
                    class={`${state.skyMapClass} link`}
                  >
                    Click here to get a photo of your starCrossing
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://github.com/kaBeech/star-crossed"}
                    class={`link`}
                  >
                    View source on GitHub
                  </a>
                </p>
              </div>
            );
          }}
        />

        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Fun & Games"}
          </Link>
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage:
              "Wow, that works fast! Please tell me more about the tech you used to build it",
            linkTile: linkTiles.tech,
          },
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
  title: "StarCrossed - kaBeech",
  meta: [
    {
      name: "description",
      content:
        "StarCrossed - a tool for finding a special spot in the universe",
    },
  ],
};
