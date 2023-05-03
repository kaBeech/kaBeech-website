import { Resource, component$, useResource$ } from "@builder.io/qwik";

interface NamagenProps {
  language: "mamobibu" | "saurian";
}

// I know, I know. Listen, environment variables are weird in Qwik and I'm still figuring it out
const namagen = "https://full-duck-87-qfzve1n0y4s0.deno.dev";

export const Namagen = component$((props: NamagenProps) => {
  const mamobibuName = useResource$(async () => {
    const response = await fetch(`${namagen}/mamobibu`);
    const data = await response.json();
    return (data.mamobibuName || "Error") as string;
  });

  const saurianName = useResource$(async () => {
    const response = await fetch(`${namagen}/saurian`);
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
