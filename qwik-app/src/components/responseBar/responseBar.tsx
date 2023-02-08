import { component$ } from "@builder.io/qwik";
import type { ResponseOption } from "~/globalTypes";
import { ResponseButton } from "../responseButton/responseButton";

interface ResponseBarProps {
  responses: ResponseOption[];
}

export const ResponseBar = component$((props: ResponseBarProps) => {
  return (
    <div class="invertColor flex spaceBetween roundCornersBottom">
      <div>{"<"}</div>
      <div>
        {props.responses.map((response) => (
          <ResponseButton response={response} />
        ))}
      </div>
      <div>&gt;</div>
    </div>
  );
});
