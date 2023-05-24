import { $, component$, useStore } from "@builder.io/qwik";

interface ResponseBarProps {
  imagePath: string;
  text: string;
}

export const ResponseBar = component$((props: ResponseBarProps) => {
  const state = useStore({
    choiceDetailHidden: true,
  });

  const showResponseDetail = $(() => {
    state.choiceDetailHidden = false;
  });

  // const hideResponseDetail = $(() => {
  //   state.choiceDetailHidden = true;
  // });

  return (
    <div class="flex">
      {state.choiceDetailHidden ? (
        <div class="hidden"></div>
      ) : (
        <div class="blinkOut">{props.text}</div>
      )}
      <img
        class="lazy"
        src={props.imagePath}
        alt={props.text}
        onHover$={() => {
          showResponseDetail();
        }}
      />
    </div>
  );
});
