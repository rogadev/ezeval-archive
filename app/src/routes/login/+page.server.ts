import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "$lib/db";

export const actions: Actions = {
  login: async ({ url }) => {
    const provider = url.searchParams.get("provider") as Provider;
    const { data, error: err } = await supabase.auth.signInWithOAuth({ provider });
    if (err) {
      console.log(err);
      return fail(400, "Something went wrong");
    }
    throw redirect(303, data.url);
  },
};

// export const actions: Actions = {
//   login: async ({ request, locals, url }) => {
//     const provider = url.searchParams.get('provider') as Provider;
//     if (provider) {
//       const { data, error: err } = await locals.supabase.auth.signInWithOauth({ provider });
//       if (err) {
//         console.log(err);
//         return fail(400, "Something went wrong");
//       }
//       return redirect(303, data.url);
//     }

//     // const body = Object.fromEntries(await request.formData());
//     // const { data, error: err } = await locals.supabase.auth.signIn({
//     // });
//   }
// };