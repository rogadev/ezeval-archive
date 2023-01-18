import type { Actions, redirect, fail } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
  // console.log('fff', event.locals.session); // working
  // console.log('user', event.locals.session?.user);
  return {
    session: await getServerSession(event),
  };
};

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
  logout: async () => {
    const response = await supabase.auth.signOut();
    const err = response.error;
    if (err) {
      console.log(err);
      return fail(400, "Something went wrong");
    }
    console.log('logout', response);
    throw redirect(303, "https://www.ezeval.app");
  }
};