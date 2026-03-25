import { Message } from '@/src/shared/types';

type Props = {
  message: Message;
};

export function ChatMessageItem({ message }: Props) {
  return (
    <li
      className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
        message.role === 'user'
          ? 'ml-auto bg-slate-900 text-white'
          : 'bg-slate-100 text-slate-800'
      }`}
    >
      {message.content}
    </li>
  );
}
