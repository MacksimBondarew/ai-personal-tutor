export type MessageRole = 'user' | 'assistant';

export type Message = {
  id: string;
  conversation_id: string;
  role: MessageRole;
  content: string;
  created_at: string;
  updated_at: string;
};

export type SendMessageBody = {
  conversationId?: string;
  content?: string;
};
