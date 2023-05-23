import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

import type { RequestEvent } from "@builder.io/qwik-city";

export const onGet = ({ redirect }: RequestEvent) => {
  redirect(302, "/tech/wasm");
};

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents justifyCenter">
        <p>
          Oh! Looks like the redirect didn't work. Maybe try{" "}
          <Link class="link" href="/tech/wasm/">
            https://www.kaBeech.com/tech/wasm/
          </Link>
          ?
        </p>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage: "Let's try going back...",
            linkTile: linkTiles.back,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - Redirect",
  meta: [
    {
      name: "description",
      content: "A page that redirects to another page",
    },
  ],
};
