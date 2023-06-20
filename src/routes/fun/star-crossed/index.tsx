import {
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./star-crossed.css?inline";

const starCrossedAPI = "https://hungry-heron-21.deno.dev";

const birthday1 = "1999-08-11";
const birthday2 = "2000-03-03";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    birthday1,
    birthday2,
    starCrossedAPI,
    skyMapClass: "hidden height1",
    staticPhotoClass: "",
  });

  const starCrossedResource = useResource$<any>(async ({ track, cleanup }) => {
    const birthday1 = track(() => state.birthday1);
    const birthday2 = track(() => state.birthday2);
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const res = await fetch(
      `${starCrossedAPI}/star-crossings/${birthday1},${birthday2}`,
      {
        signal: abortController.signal,
      }
    );
    const data = await res.json();
    let closestStarShownName: string;
    if (data.closestStarCommonName !== "null") {
      closestStarShownName = data.closestStarCommonName;
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
          StarCrossed is inspired by{" "}
          <a href="https://xkcd.com/201/" rel="nofollow">
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
          you get there, or isn't visible from your porch, fear not! Try
          entering in your birthdays in the reverse order - you'll get a
          different response this way
        </p>
        <p>Have fun!</p>
        <h2>Enter Birthdays:</h2>
        <input
          type="date"
          onInput$={(ev: any) => (state.birthday1 = ev.target.value)}
          value={birthday1}
          aria-labelledby="Birthday 1"
        />
        <input
          type="date"
          onInput$={(ev: any) => (state.birthday2 = ev.target.value)}
          value={birthday2}
          aria-labelledby="Birthday 2"
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
                {/* <img
          src="/1948-8-11x1952-3-3.webp"
          alt="Image of the starCrossing for 1948-8-11x1952-3-3"
          width={1200}
          height={1200}
        /> */}
                <div class={"iframePlaceholder"}></div>
              </div>
            );
          }}
          onResolved={(starCrossedData) => {
            return (
              <div>
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
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link margin1"
                    href={starCrossedData.infoURL}
                  >
                    Learn more about {starCrossedData.closestStarShownName}!
                  </Link>
                </p>
                <h3>
                  This is what it looks like in your own special corner of the
                  universe:
                </h3>
                <p class={state.staticPhotoClass}>
                  If the iframe below does not display, please allow insecure
                  content in your browser or{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link"
                    href={`http://www.wikisky.org/${starCrossedData.skyMapURL.slice(
                      36
                    )}`}
                  >
                    click here to view the interactive map on WikiSky
                  </Link>
                </p>
                <br />
                <img
                  src={starCrossedData.staticPhotoURL}
                  alt="Image of the starCrossing for 1948-8-11x1952-3-3"
                  width={700}
                  height={700}
                  class={state.staticPhotoClass}
                />
                {/* <div>staticPhotoURL: {starCrossedData.staticPhotoURL}</div> */}
                <iframe
                  onLoad$={() => {
                    // alert("iframe loaded!");
                    state.skyMapClass = "";
                    state.staticPhotoClass = "displayNone";
                  }}
                  title="StarCrossed skyMap"
                  width="90%"
                  height="24em"
                  id="skyMap"
                  class={state.skyMapClass}
                  src={starCrossedData.skyMapURL}
                ></iframe>{" "}
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

      {/* <script>alert();</script> */}
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
