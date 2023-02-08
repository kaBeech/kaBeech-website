import { component$ } from "@builder.io/qwik";
import { ResponseButton } from "../responseButton/responseButton";

interface TestData {
  response: string;
}

export const ResponseBar = component$(() => {
  const testData: TestData[] = [{ response: "quiet" }, { response: "LOOUD" }];

  return (
    <div class="invertColor flex spaceBetween roundCornersBottom">
      <div>{"<"}</div>
      <div>
        {testData.map((i) => (
          <ResponseButton response={i.response} />
        ))}
      </div>
      <div>&gt;</div>
    </div>
  );
});
