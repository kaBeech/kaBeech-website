// Unused
import { $, component$, useStore } from "@builder.io/qwik";

interface HamburgerChoiceProps {
  imagePath: string;
  text: string;
}

export const HamburgerChoice = component$((props: HamburgerChoiceProps) => {
  const state = useStore({
    choiceDetailHidden: true,
  });

  const showChoiceDetail = $(() => {
    state.choiceDetailHidden = false;
  });

  // const hideChoiceDetail = $(() => {
  //   state.choiceDetailHidden = true;
  // });

  return (
    <div class="flex logo">
      {state.choiceDetailHidden ? (
        <div class="hidden"></div>
      ) : (
        <div class="blinkOut">{props.text}</div>
      )}
      <img
        class="lazy"
        src={props.imagePath}
        alt={props.text}
        onClick$={() => {
          showChoiceDetail();
        }}
      />
    </div>
  );
});
