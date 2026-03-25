import { SendMessageBody } from '@/src/shared/types';

export async function parseSendMessageBody(req: Request) {
  const body = (await req.json()) as SendMessageBody;

  if (!body.conversationId || !body.content?.trim()) {
    return {
      error: Response.json(
        { error: 'conversationId and content are required' },
        { status: 400 },
      ),
    };
  }

  return {
    conversationId: body.conversationId,
    question: body.content.trim(),
  };
}
