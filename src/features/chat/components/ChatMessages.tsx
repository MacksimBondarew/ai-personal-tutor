import { Spinner } from '@/src/shared/components/ui/spinner';
import { ChatMessageItem } from './ChatMessageItem';
import { Message } from '@/src/shared/types';

type Props = {
  messages: Message[];
  isLoading: boolean;
};

export function ChatMessages({ messages, isLoading }: Props) {
  return (
    <div className='min-h-0 flex-1 overflow-y-auto'>
      {isLoading ? (
        <div className='flex h-full items-center justify-center'>
          <Spinner className='h-8 w-8' />
        </div>
      ) : messages.length === 0 ? (
        <p className='text-sm text-slate-500'>
          Ask your first question about this document.
        </p>
      ) : (
        <ul className='flex flex-col gap-3'>
          {messages.map((message) => (
            <ChatMessageItem key={message.id} message={message} />
          ))}
        </ul>
      )}
    </div>
  );
}
