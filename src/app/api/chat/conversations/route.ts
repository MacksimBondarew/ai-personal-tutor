import { getSupabase } from '@/src/shared/lib/supabase';
import { getUserOrThrow } from '@/src/features/study-materials/server/getUserOrThrow';
import {
  createConversationOrThrow,
  findConversationByDocumentForUser,
  parseCreateConversationBody,
} from '@/src/features/chat/server';

export async function POST(req: Request) {
  try {
    const parsed = await parseCreateConversationBody(req);

    if ('error' in parsed) {
      return parsed.error;
    }

    const { documentId } = parsed;

    const supabase = await getSupabase();
    const user = await getUserOrThrow(supabase);

    const existing = await findConversationByDocumentForUser({
      supabase,
      documentId,
      userId: user.id,
    });

    if (existing?.id) {
      return Response.json({ conversationId: existing.id });
    }

    const created = await createConversationOrThrow({
      supabase,
      documentId,
      userId: user.id,
    });

    return Response.json({ conversationId: created.id });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to create conversation';

    return Response.json({ error: message }, { status: 500 });
  }
}
