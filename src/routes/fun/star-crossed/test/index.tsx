import {
  component$,
  useResource$,
  Resource,
  useSignal,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// export default component$(() => {
//   const query = useSignal("busy");

//   const jokes = useResource$<{ updated_at: string }[]>(
//     async ({ track, cleanup }) => {
//       track(() => query.value);
//       const controller = new AbortController();
//       cleanup(() => controller.abort());

//       if (query.value.length < 3) {
//         return [];
//       }

//       const url = new URL(
//         `https://api.chucknorris.io/jokes/search?query=${query.value}`
//       );

//       const resp = await fetch(url, { signal: controller.signal });

//       const json = (await resp.json()) as { result: { updated_at: string }[] };
//       return json.result;
//     }
//   );

//   return (
//     <>
//       <label>
//         Query: <input bind:value={query} />
//       </label>
//       <button>search</button>
//       <Resource
//         value={jokes}
//         onPending={() => <>loading...</>}
//         onResolved={(jokes) => (
//           <ul>
//             {jokes.map((joke, i) => (
//               <li key={i}>{joke.updated_at}</li>
//             ))}
//           </ul>
//         )}
//       />
//     </>
//   );
// });

export default component$(() => {
  const query = useSignal("1948-8-11,1952-3-3");

  const closestStarName = useResource$<string>(async ({ track, cleanup }) => {
    track(() => query.value);
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const url = new URL(
      `https://hungry-heron-21.deno.dev/star-crossings/${query.value}`
    );

    const resp = await fetch(url, { signal: controller.signal });

    const json = (await resp.json()) as { closestStarName: string };
    return json.closestStarName;
  });

  return (
    <>
      <label>
        Query: <input bind:value={query} />
      </label>
      <button>search</button>
      <Resource
        value={closestStarName}
        onPending={() => <>loading...{query.value}</>}
        onResolved={(closestStarName) => <div>{closestStarName}</div>}
      />
    </>
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
