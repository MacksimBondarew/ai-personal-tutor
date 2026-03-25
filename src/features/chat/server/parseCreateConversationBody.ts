import { CreateConversationBody } from '@/src/shared/types';

export async function parseCreateConversationBody(req: Request) {
  const body = (await req.json()) as CreateConversationBody;

  if (!body.documentId) {
    return {
      error: Response.json(
        { error: 'documentId is required' },
        { status: 400 },
      ),
    };
  }

  return {
    documentId: body.documentId,
  };
}
