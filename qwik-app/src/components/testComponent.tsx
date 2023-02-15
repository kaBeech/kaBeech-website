import { $, component$, useStore } from "@builder.io/qwik";

export const TestComponent = component$(() => {
  const state = useStore({
    count: 2,
    message: `Yes!`,
  });

  const increment = $(() => {
    state.count++;
  });

  //   const getList = (count: any) => {
  //     const arr = [];
  //     for (let i = 0; i < count; i++) {
  //       arr.push(<div key={i}>{i}</div>);
  //     }
  //     return arr;
  //   };

  const data = Array.from({ length: state.count }, (_, index) => index);

  return (
    <div>
      <div>Hello Qwik!</div>
      {/* {getList(state.count)} */}
      {data.map((i) => (
        <div key={i}>{i}</div>
      ))}
      <button onClick$={increment}>+</button>
    </div>
  );
});
