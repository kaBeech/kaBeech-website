import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestEvent } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

let starCrossedAPI: string;

export const onGet = (requestEvent: RequestEvent) => {
  const response = requestEvent.env.get("STARCROSSED_API");
  if (response != undefined) {
    starCrossedAPI = response;
  } else {
    console.error("STARCROSSED_API string not found upon request");
  }
};

export const useStarCrossedTest = routeLoader$(async () => {
  const res = await fetch(
    `${starCrossedAPI}/star-crossings/1948-8-11,1952-3-3`
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
      closestStarShownName,
      birthdays: ["1948-8-11", "1952-3-3"],
    } || `Error - URI is ${starCrossedAPI}/star-crossings/1948-8-11,1952-3-3`
  );
});

export default component$(() => {
  const starCrossedTest = useStarCrossedTest();
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>StarCrossed</h1>
        <h2>
          Birthdays: {starCrossedTest.value.birthdays[0]} x{" "}
          {starCrossedTest.value.birthdays[1]}
        </h2>
        <h2>
          StarCrossed Coordinates:{" "}
          <strong>
            {starCrossedTest.value.coordinates[0][0]}h{" "}
            {starCrossedTest.value.coordinates[0][1]}m{" "}
            {starCrossedTest.value.coordinates[0][2]}s,{" "}
            {starCrossedTest.value.coordinates[1][0]}°{" "}
            {starCrossedTest.value.coordinates[1][1]}′{" "}
            {starCrossedTest.value.coordinates[1][2]}″
          </strong>
        </h2>
        <h3>Closest Star: {starCrossedTest.value.closestStarShownName}</h3>
        <p>
          <Link class="link margin1" href={starCrossedTest.value.infoURL}>
            Learn more about {starCrossedTest.value.closestStarShownName}!
          </Link>
        </p>
        <h3>
          This is what it looks like in your special corner of the universe:
        </h3>
        <iframe
          title="StarCrossed Photo"
          width="100%"
          height="250"
          src={starCrossedTest.value.skyMapURL}
        ></iframe>
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
