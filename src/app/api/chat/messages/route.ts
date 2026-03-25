import { getSupabase } from '@/src/shared/lib/supabase';
import { getUserOrThrow } from '@/src/features/study-materials/server/getUserOrThrow';
import {
  buildAssistantAnswer,
  createMessageOrThrow,
  getConversationForUserOrThrow,
  parseSendMessageBody,
} from '@/src/features/chat/server';

export async function POST(req: Request) {
  try {
    const parsed = await parseSendMessageBody(req);

    if ('error' in parsed) {
      return parsed.error;
    }

    const { conversationId, question } = parsed;

    const supabase = await getSupabase();
    const user = await getUserOrThrow(supabase);

    const conversation = await getConversationForUserOrThrow({
      supabase,
      conversationId,
      userId: user.id,
    });

    const userMessage = await createMessageOrThrow({
      supabase,
      conversationId,
      userId: user.id,
      role: 'user',
      content: question,
    });

    const assistantContent = await buildAssistantAnswer({
      supabase,
      documentId: conversation.document_id,
      userId: user.id,
      question,
    });

    const assistantMessage = await createMessageOrThrow({
      supabase,
      conversationId,
      userId: user.id,
      role: 'assistant',
      content: assistantContent,
    });

    return Response.json({
      messages: [userMessage, assistantMessage],
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to send message';

    const status = message === 'Forbidden' ? 403 : 500;

    return Response.json({ error: message }, { status });
  }
}
