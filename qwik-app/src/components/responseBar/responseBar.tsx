import { $, component$, useStore } from "@builder.io/qwik";
import type { ResponseOption } from "~/globalTypes";
import { ResponseButton } from "../responseButton/responseButton";
import { ResponseDetail } from "../responseDetail/responseDetail";

interface ResponseBarProps {
  responses: ResponseOption[];
}

export const ResponseBar = component$((props: ResponseBarProps) => {
  const state = useStore({
    responseDetailHidden: true,
    selectedResponse: props.responses[0],
  });

  const showResponseDetail = $((response: ResponseOption) => {
    state.responseDetailHidden = false;
    state.selectedResponse = response;
  });

  return (
    <div class="invertColor flex column alignStretch roundCornersBottom">
      {state.responseDetailHidden === false && (
        <ResponseDetail response={state.selectedResponse} />
      )}
      <div class="flex spaceBetween">
        <div>{"<"}</div>
        <div>
          {props.responses.map((response) => (
            <ResponseButton
              response={response}
              handleFunction={showResponseDetail}
            />
          ))}
        </div>
        <div>&gt;</div>
      </div>
    </div>
  );
});
