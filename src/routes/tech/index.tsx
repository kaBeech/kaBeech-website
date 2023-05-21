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
        <h1>This Website is Brought to You in Part by Cool Technology!</h1>
        <p>
          There's some really cool new technology available for web development,
          and this site makes use of it! For example:
        </p>
        <h2>The POQD Stack</h2>
        <p>
          POQD is a blazingly fast, next-generation software development stack
        </p>
        <p>
          <Link class="link" href="poqd">
            Click here to learn more about the POQD stack
          </Link>
        </p>
        <h2>Edge Functions</h2>
        <p>
          Edge Functions are pieces of code that are designed to be deployed
          serverlessly on the edge (i.e. at a point geographically close to the
          user)
        </p>
        <p>
          <Link class="link" href="edge">
            Click here to learn more about edge functions
          </Link>
        </p>
        <h2>WebAssembly (WASM)</h2>
        <p>
          WASM is a low-level programming language designed to be executed by
          web browsers
        </p>
        <p>
          <Link class="link" href="wasm">
            Click here to learn more about WebAssembly
          </Link>
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Home"}
          </Link>
        </p>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage: "I want to learn more about the POQD stack",
            linkTile: linkTiles.tech_poqd,
          },
          {
            fullMessage: "I want to learn more about Edge Functions",
            linkTile: linkTiles.tech_edge,
          },
          {
            fullMessage: "I want to learn more about WebAssembly",
            linkTile: linkTiles.tech_wasm,
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
  title: "kaBeech - Tech",
  meta: [
    {
      name: "description",
      content: "Information about the software used to build this site",
    },
  ],
};
