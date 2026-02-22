import type { SupabaseClient } from '@supabase/supabase-js';

export async function getUserOrThrow(supabase: SupabaseClient) {
  const { data, error } = await supabase.auth.getUser();
  const user = data.user;

  if (error || !user) {
    throw new Error(error?.message ?? 'Unauthorized');
  }

  return user;
}
