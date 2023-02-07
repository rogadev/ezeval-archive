import '$lib/db'; // Required to initialize the Supabase client server-side.
import { getUsersOrganizations } from '$lib/db/operations/user_organizations/get';
import { getOrganization } from '$lib/db/operations/organizations/get_one';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { Session, User } from '@supabase/supabase-js';
import type { Handle, RequestEvent } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';

/**
 * Reaches out to our getServerSession function from @supabase/auth-helpers-sveltekit to get the current session and returns it, or null if there is no session.
 */
const getSupabaseSession = async (event: RequestEvent) => {
	let session: Session | null = null;
	let user: User | null = null;
	try {
		session = await getServerSession(event);
		user = session?.user ?? null;
	} catch (e) {
		console.error('Supabase getServerSession Error: ', e);
		fail(500, 'Something went wrong');
	}
	event.locals.session = session;
	event.locals.user = user;
	return { user, session };
};

/**
 * Gets all organizations that the current user is a member of.
 */
const getOrganizations = async (userId: string) => {
	const result = [];
	try {
		const { data } = await getUsersOrganizations(userId);
		if (!data) return null;
	} catch (e) {
		console.error('Supabase getUsersOrganizations Error: ', e);
		fail(500, 'Something went wrong');
	}

	const orgsToFetch = [];
	for (const org of result) {
		orgsToFetch.push(getOrganization(org.organization_id));
	}

	let orgs = null;
	try {
		orgs = await (await Promise.all(orgsToFetch));
	} catch (e) {
		console.error('Supabase getOrganization Error: ', e);
		fail(500, 'Something went wrong');
	}
	return orgs;
};

/**
 * This main hook is called on every request.
 */
export const handle: Handle = async ({ event, resolve }: RequestResolver) => {
	const intendedPath = event.url.pathname;
	const { user, session } = await getSupabaseSession(event);
	const organizations = user ? await getOrganizations(user.id) : null;

	if (intendedPath.startsWith('/o/')) {
		if (!session) return redirect(302, '/login');
		if (!organizations) return redirect(302, '/account');
	}

	if (intendedPath.startsWith('/account')) {
		if (!session) return redirect(302, '/login');
	}

	return await resolve(event);
};