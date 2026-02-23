import { NextResponse } from 'next/server';
import type { SupabaseClient } from '@supabase/supabase-js';

export const getStudySetItems = async (
  supabase: SupabaseClient,
  id: string,
) => {
  const { data: items, error: itemsError } = await supabase
    .from('study_set_items')
    .select('id, question, options, correct_answer, explanation')
    .eq('study_set_id', id)
    .order('created_at', { ascending: true });

  if (itemsError) {
    return NextResponse.json({ error: itemsError.message }, { status: 500 });
  }
  return items;
};
