import { component$ } from "@builder.io/qwik";
import { ResponseButton } from "../responseButton/responseButton";

export const ResponseBar = component$(() => {
  return (
    <div class="invertColor flex spaceBetween">
      <div>{"<"}</div>
      <div>
        <ResponseButton response="Test" />
      </div>
      <div>&gt;</div>
    </div>
  );
});
