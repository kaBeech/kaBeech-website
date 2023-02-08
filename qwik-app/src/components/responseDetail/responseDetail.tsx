import { component$ } from "@builder.io/qwik";
import { ResponseOption } from "~/globalTypes";

interface ResponseDetailProps {
  response: ResponseOption;
}

export const ResponseDetail = component$((props: ResponseDetailProps) => {
  return (
    <div class="flex">
      <div>{props.response.responseLong}</div>
      <div class="flex column">
        <button>Enter</button>
        <button>Cancel</button>
      </div>
    </div>
  );
});
