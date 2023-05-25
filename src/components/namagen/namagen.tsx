import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type { RequestEvent } from "@builder.io/qwik-city";

interface NamagenProps {
  language: "mamobibu" | "saurian";
}

let namagenAPIKey: string;

export const onGet = (requestEvent: RequestEvent) => {
  const response = requestEvent.env.get("NAMAGEN_API_KEY");
  if (response != undefined) {
    namagenAPIKey = response;
  } else {
    console.error("NAMAGEN_API_KEY not found upon request");
  }
};

export const Namagen = component$((props: NamagenProps) => {
  const mamobibuName = useResource$(async () => {
    const response = await fetch(`${namagenAPIKey}/mamobibu`);
    const data = await response.json();
    return (data.mamobibuName || "Error") as string;
  });

  const saurianName = useResource$(async () => {
    const response = await fetch(`${namagenAPIKey}/saurian`);
    const data = await response.json();
    return (data.saurianName + " (" + data.saurianNameBasicLatin + ")" ||
      "Error") as string;
  });
  if (props.language === "mamobibu") {
    return (
      <Resource
        value={mamobibuName}
        onPending={() => <>Loading...</>}
        onResolved={(mamobibuName) => <>{mamobibuName}</>}
      />
    );
  } else {
    return (
      <Resource
        value={saurianName}
        onPending={() => <>Loading...</>}
        onResolved={(saurianName) => <>{saurianName}</>}
      />
    );
  }
});
