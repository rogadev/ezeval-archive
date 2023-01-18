import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
  // console.log('fff', event.locals.session); // working
  console.log('user', event.locals.session?.user);
  return {
    session: await getServerSession(event),
  };
};