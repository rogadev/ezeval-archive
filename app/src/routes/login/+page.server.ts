import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "$lib/db";
import type { PageServerLoad } from "./";
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: PageServerLoad = async (event) => {
  const session = await getServerSession(event);
  if (session) {
    console.log("Redirect to '/' from login page because we have a session.");
    throw redirect(303, "/");
  }
  return {
    session,
  };
};

export const actions: Actions = {
  login: async ({ url }) => {
    const provider = url.searchParams.get("provider") as Provider;
    console.log('before');
    const { data, error: err } = await supabase.auth.signInWithOAuth({ provider }, { redirectTo: "http://localhost:3000/dashboard" });
    console.log('after');
    if (err) {
      console.log(err);
      return fail(400, "Something went wrong");
    }
    throw redirect(303, data.url);
  },
};