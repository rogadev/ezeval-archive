import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  // If we have no user in locals, we want to redirect to home.
  if (!locals.user) throw redirect(303, '/');
  // Otherwise, maybe we want to do some shit.

};

export const actions: Actions = {
  login: async ({ cookies }) => {
    cookies.set("auth", "token", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "productions",
      maxAge: 60 * 60 * 24 * 7,
    });
    throw redirect(303, "/");
  },
};