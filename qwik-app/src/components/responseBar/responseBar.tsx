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

  const hideResponseDetail = $(() => {
    state.responseDetailHidden = true;
  });

  return (
    <div class="flex column alignStretch width100">
      {state.responseDetailHidden ? (
        <div class="screenGradientBottom heightHalf"></div>
      ) : (
        <div>
          <div class="screenGradientResponse height1"></div>
          <ResponseDetail
            response={state.selectedResponse}
            hideResponseDetail={hideResponseDetail}
          />
        </div>
      )}
      <div class="flex spaceBetween invertBeechyGradient roundCornersBottom">
        <div>{"<"}</div>
        <div class="flex">
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
