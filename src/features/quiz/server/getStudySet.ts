import { NextResponse } from 'next/server';
import type { SupabaseClient } from '@supabase/supabase-js';

export const getStudySet = async (supabase: SupabaseClient, id: string) => {
  const { data: set, error: setError } = await supabase
    .from('study_sets')
    .select('id, title, type, created_at')
    .eq('id', id)
    .single();

  if (setError || !set) {
    return NextResponse.json({ error: 'Study set not found' }, { status: 404 });
  }
  return set;
};
