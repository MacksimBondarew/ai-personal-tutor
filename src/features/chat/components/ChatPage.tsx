'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  useConversationMessages,
  useSendMessage,
} from '@/src/features/chat/hooks';
import { ChatMessages } from './ChatMessages';
import { ChatComposer } from './ChatComposer';

type Props = {
  conversationId: string;
};

export function ChatPage({ conversationId }: Props) {
  const [text, setText] = useState('');
  const { data: messages, isLoading } = useConversationMessages(conversationId);
  const { sendMessage, isSendingMessage } = useSendMessage(conversationId);

  const canSend = useMemo(() => text.trim().length > 0, [text]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const content = text.trim();
    if (!content) return;

    await sendMessage(content);
    setText('');
  };

  return (
    <div className='bg-slate-50 px-4 pb-4 pt-6 sm:px-6 sm:pt-8'>
      <div className='mx-auto flex h-[calc(100dvh-7rem)] max-w-4xl flex-col gap-4'>
        <h1 className='text-xl font-semibold text-slate-900'>
          Chat about this PDF
        </h1>

        <div className='flex min-h-0 flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-4'>
          <ChatMessages messages={messages ?? []} isLoading={isLoading} />

          <ChatComposer
            text={text}
            onTextChange={setText}
            onSubmit={onSubmit}
            canSend={canSend}
            isSending={isSendingMessage}
          />
        </div>
      </div>
    </div>
  );
}
