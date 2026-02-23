import { getSupabase } from '@/src/shared/lib/supabase';
import { NextResponse } from 'next/server';
import { getStudySet } from '@/src/features/quiz/server/getStudySet';
import { getStudySetItems } from '@/src/features/quiz/server/getStudySetItems';

export const generateQuiz = async (id: string) => {
  const supabase = await getSupabase();

  const set = await getStudySet(supabase, id);

  const items = await getStudySetItems(supabase, id);

  return NextResponse.json({ set, items });
};
