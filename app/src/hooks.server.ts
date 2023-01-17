import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from "@sveltejs/kit";
import '$lib/db';
import { supabase } from '$lib/db';

export const handle: Handle = async ({ event, resolve }) => {
  // Authenticate the user.
  event.locals.session = await getServerSession(event);
  console.log('event locals session', event.locals.session);
  console.log('supabase session', await (await supabase.auth.getSession()).data);

  // Evaluate the path to see if it needs protecting.
  // if (event.url.pathname.startsWith('/protected')) {
  //   // In this case, we're routing to '/protected', so lets make sure we have a user. If not, redirect to the home page or login page.
  //   if (!event.locals.user) throw redirect(303, "/");
  //   // Maybe we want to only let ADMIN to the '/protected/admin' area.
  //   if (event.locals.user.role !== "ADMIN") throw redirect(303, "/protected");
  // }

  const response = await resolve(event);

  return response;
};