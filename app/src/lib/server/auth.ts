import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { supabase } from "$lib/db";

export const load: PageServerLoad = async ({ locals }) => {
  // If we have no user in locals, we want to redirect to home.
  if (!locals.user) throw redirect(303, '/');
  // Otherwise, maybe we want to do some shit.

};

export const actions: Actions = {
  login: async ({ provider }) => {
    const response = await supabase.auth.signInWithOAuth({ provider });
    console.log(response);

    // throw redirect(303, "/");
  },
};