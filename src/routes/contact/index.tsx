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
        <h1>Contact</h1>
        <p>
          The best way to get ahold of me is usually via{" "}
          <a href="https://www.linkedin.com/in/kyle-beechly/" class="link">
            LinkedIn
          </a>
        </p>
        <p>
          You can also find me through{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://github.com/kaBeech"
          >
            GitHub
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="mailto:contact@kabeech.com"
          >
            Email
          </a>
          , and{" "}
          <a href="https://hachyderm.io/@kaBeech" class="link">
            Mastodon
          </a>
        </p>
        <p>
          <Link class="link margin1" href="../">
            {"<-- Back to Home"}
          </Link>{" "}
        </p>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage: "I want to get in touch with you!",
            linkTile: linkTiles.linkedIn,
          },
          {
            fullMessage: "Get me to your GitHub!",
            linkTile: linkTiles.gitHub,
          },
          {
            fullMessage: "I prefer email!",
            linkTile: linkTiles.email,
          },
          {
            fullMessage: "/* Mastodon noises */",
            linkTile: linkTiles.mastodon,
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
  title: "kaBeech - Contact",
  meta: [
    {
      name: "description",
      content: "Contact Me!",
    },
  ],
};
