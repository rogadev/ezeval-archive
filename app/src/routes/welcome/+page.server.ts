import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "../login/$types";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "$lib/db";

export const actions: Actions = {
  register: async ({ url }) => {
    const provider = url.searchParams.get("provider") as Provider;
    const { data, error: err } = await supabase.auth.signInWithOAuth({ provider });
    if (err) {
      console.log(err);
      return fail(400, "Something went wrong");
    }
    throw redirect(303, data.url);
  },
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