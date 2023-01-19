import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "../login/$types";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "$lib/db";
import type { PageServerLoad } from "./";
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.user || locals.session) {
    throw redirect(303, "/");
  }
};

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
    const { data, error: err } = await supabase.auth.signInWithOAuth({ provider, redirectTo: "http://localhost:3000/" });
    if (err) {
      console.log(err);
      return fail(400, "Something went wrong");
    }
    throw redirect(303, data.url);
  },
};