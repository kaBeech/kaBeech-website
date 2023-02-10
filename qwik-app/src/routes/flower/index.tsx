import {
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import styles from "./flower.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents" style="align-items: flex-end">
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
            pride: loc.query["pride"] === "true",
            romanesca: loc.query["romanesca"] === "true",
            helix: loc.query["helix"] === "true",
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
            responseShort: "Rainbow",
            responseLong: "More colors please!",
            linkPath: "/flower?pride=true",
          },
          {
            responseShort: "Stereochrome",
            responseLong: "Fewer colors please!",
            linkPath: "/flower",
          },
          {
            responseShort: "Romanesca",
            responseLong: "Something about this is too... flat",
            linkPath: "/flower?pride=true&romanesca=true",
          },
          {
            responseShort: "Helix",
            responseLong: "Okay, but what if it was made out of fiddlesticks?",
            linkPath: "/flower?pride=true&helix=true",
          },
          {
            responseShort: "Back",
            responseLong:
              "Actually, there's something else I want to play with...",
            linkPath: "/fun",
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
