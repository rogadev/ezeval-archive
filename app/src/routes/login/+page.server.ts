import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { Provider } from "@supabase/supabase-js";

export const actions: Actions = {
  login: async ({ request, locals, url }) => {
    const provider = url.searchParams.get('provider') as Provider;
    if (provider) {
      const { data, error: err } = await locals.supabase.auth.signInWithOauth({ provider });
      if (err) {
        console.log(err);
        return fail(400, "Something went wrong");
      }
      return redirect(303, data.url);
    }

    // const body = Object.fromEntries(await request.formData());
    // const { data, error: err } = await locals.supabase.auth.signIn({
    // });
  }
};