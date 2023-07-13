import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";

export const SignIn = component$(() => {
  const signIn = useAuthSignin();
  return (
    <div>
      <div>SIGNIN</div>
      <Form action={signIn}>
        <input type="hidden" name="providerId" value="github" />
        <input
          type="hidden"
          name="options.callbackUrl"
          value="http://qwik-auth-example.com/dashboard"
        />
        <button>Sign In</button>
      </Form>
    </div>
  );
});
