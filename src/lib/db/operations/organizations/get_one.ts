import supabaseClient from "$lib/db";
import { Organization } from "$lib/db/operations/organizations/create";

export const getOrganization = async (organization_id) => {
  let result: Organization | null = null;
  try {
    const { data } = await supabaseClient
      .from("organizations")
      .select("*")
      .eq("id", organization_id)
      .single();
    result = data;
  } catch (e) {
    if (e) return null;
  }
  return result;
};