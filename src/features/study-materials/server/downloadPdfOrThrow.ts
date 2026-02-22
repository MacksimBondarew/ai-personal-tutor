import type { SupabaseClient } from '@supabase/supabase-js';

export async function downloadPdfOrThrow(
  supabase: SupabaseClient,
  storagePath: string,
) {
  const { data: file, error } = await supabase.storage
    .from('pdfs')
    .download(storagePath);

  if (error || !file) {
    throw new Error(error?.message ?? 'Failed to download PDF');
  }

  return file;
}
