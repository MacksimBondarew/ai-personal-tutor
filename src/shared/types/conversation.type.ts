export type Conversation = {
  id: string;
  document_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type ConversationRecord = {
  id: string;
  user_id: string;
  document_id: string;
};

export type CreateConversationBody = {
  documentId?: string;
};
