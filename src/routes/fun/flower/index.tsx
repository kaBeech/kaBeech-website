import {
  component$,
  useStore,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";
import styles from "./flower.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useVisibleTask$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div class="screenContainer">
      <Beechy />
      <div
        class="screenContents flex1 spaceBetween"
        style="align-items: flex-end"
      >
        <input
          type="range"
          value={state.number}
          max={50}
          onInput$={(ev) => {
            state.number = (ev.target as HTMLInputElement).valueAsNumber;
          }}
        />
        <div
          style={{
            "--state": `${state.count * 0.1}`,
          }}
          class={{
            host: true,
            flex1: true,
            pride: loc.url.searchParams.get("pride") === "true",
            romanesca: loc.url.searchParams.get("romanesca") === "true",
            helix: loc.url.searchParams.get("helix") === "true",
          }}
        >
          {Array.from({ length: state.number }, (_, i) => (
            <div
              key={i}
              class={{
                square: true,
                odd: i % 2 === 0,
              }}
              style={{ "--index": `${i + 1}` }}
            />
          )).reverse()}
        </div>
      </div>
      <ResponseBar
        responses={[
          {
            fullMessage: "Fewer colors please!",
            linkTile: linkTiles.flower_stereochrome,
          },
          {
            fullMessage: "More colors please!",
            linkTile: linkTiles.flower_rainbow,
          },
          {
            fullMessage: "Something about this is too... flat",
            linkTile: linkTiles.flower_romanesca,
          },
          {
            fullMessage: "Okay, but what if it were made out of fiddlesticks?",
            linkTile: linkTiles.flower_helix,
          },
          {
            fullMessage: "There's something else I want to play with...",
            linkTile: linkTiles.back,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Fractal Flower",
};
