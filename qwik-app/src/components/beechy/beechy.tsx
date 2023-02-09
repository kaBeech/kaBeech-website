import { component$ } from "@builder.io/qwik";

export const Beechy = component$(() => {
  return (
    <div class="beechyGradient roundCornersTop">
      <img
        class="noBoxShadow"
        src="/beechy.svg"
        alt="Beechy, kaBeech's avatar"
      />
    </div>
  );
});
