import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { supabase } from "$lib/db";

export const load: PageServerLoad = async ({ locals }) => {
  // If we have no user in locals, we want to redirect to home.
  if (!locals.user) throw redirect(303, '/');
  // Otherwise, maybe we want to do some shit.

};

export const actions: Actions = {
  // working
  login: async ({ url }) => {
    const provider = url.searchParams.get("provider") as Provider;
    const { data, error: err } = await supabase.auth.signInWithOAuth({ provider });
    if (err) {
      console.error(err);
      return fail(400, "Something went wrong");
    }
    throw redirect(303, data.url);
  },
  // untested
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
  }
};