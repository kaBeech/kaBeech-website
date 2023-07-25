import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";

export const SignIn = component$(() => {
  const signIn = useAuthSignin();
  return (
    <div>
      <Form action={signIn}>
        <input type="hidden" name="providerId" value="github" />
        {/* <input
          type="hidden"
          name="options.callbackUrl"
          value={callbackUrl as string}
        /> */}
        <button>Sign In</button>
      </Form>
    </div>
  );
});
