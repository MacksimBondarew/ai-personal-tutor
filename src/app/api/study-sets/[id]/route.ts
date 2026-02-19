import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const cookieStore = await cookies();
    const { id } = await params;
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => cookieStore.getAll(),
          setAll: (cookiesToSet) => {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set({ name, value, ...options }),
            );
          },
        },
      },
    );

    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: set, error: setError } = await supabase
      .from('study_sets')
      .select('id, title, type, created_at')
      .eq('id', id)
      .single();

    if (setError || !set) {
      return NextResponse.json(
        { error: 'Study set not found' },
        { status: 404 },
      );
    }

    const { data: items, error: itemsError } = await supabase
      .from('study_set_items')
      .select('id, question, options, correct_answer, explanation')
      .eq('study_set_id', id)
      .order('created_at', { ascending: true });

    if (itemsError) {
      return NextResponse.json({ error: itemsError.message }, { status: 500 });
    }

    return NextResponse.json({ set, items });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? 'Unknown error' },
      { status: 500 },
    );
  }
}
