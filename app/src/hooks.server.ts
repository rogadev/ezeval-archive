import '$lib/db';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
// const { log } = console;

export const handle: Handle = async ({ event, resolve }) => {
  // Authenticate the user.
  let session = null;

  // TODO - Get this working. No idea why but this will not log the user out.
  // if (event.request.method === 'POST' && event.request.url.includes('?logout')) {
  //   console.log('server hooks. logging out.');
  //   await supabase.auth.signOut();
  //   throw redirect(303, '/welcome');
  // }

  // Attempt to get our session.
  try {
    session = await getServerSession(event);
  } catch (e) {
    console.error('Supabase getServerSession Error: ', e);
    fail(500, 'Something went wrong');
  }

  // Logged in, Redirect.
  if (event.url.pathname.match('/login') && session?.user.email) {
    throw redirect(303, '/dashboard');
  }

  // Route Guard Redirect.
  if (event.url.pathname.startsWith('/dashboard') && !session?.user.email) {
    throw redirect(303, '/login');
  }

  const response = await resolve(event);
  return response;
};