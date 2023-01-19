import '$lib/db';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { Session } from '@supabase/supabase-js';
import type { Handle, RequestEvent } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";

const getSupabaseSession = async (event: RequestEvent) => {
  let session: Session | null = null;
  try {
    session = await getServerSession(event);
  } catch (e) {
    console.error('Supabase getServerSession Error: ', e);
    fail(500, 'Something went wrong');
  }
  return session;
};

export const handle: Handle = async ({ event, resolve }) => {
  const session = await getSupabaseSession(event);
  const loggedIn = session?.user.email ? true : false;
  const loggingIn = event.url.pathname.match('/login') ? true : false;
  const intendedPath = event.url.pathname;
  const guardedPaths = ['/dashboard', '/profile', '/settings', '/admin'];
  const intendedPathIsGuarded = guardedPaths.some((guardedPath: string) => intendedPath.startsWith(guardedPath));

  // If the user is not logged in and they are trying to access a guarded path, redirect them to the login page.
  if (!loggedIn && intendedPathIsGuarded) {
    throw redirect(303, '/login');
  }

  if (loggingIn && loggedIn) {
    throw redirect(303, '/dashboard');
  }

  return await resolve(event);
};