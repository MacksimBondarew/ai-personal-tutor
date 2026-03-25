import { FormEvent } from 'react';
import { Button } from '@/src/shared/components/ui';

type Props = {
  text: string;
  onTextChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  canSend: boolean;
  isSending: boolean;
};

export function ChatComposer({
  text,
  onTextChange,
  onSubmit,
  canSend,
  isSending,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className='mt-4 flex flex-wrap items-end gap-3 border-t border-slate-200 pt-4'
    >
      <textarea
        value={text}
        onChange={(event) => onTextChange(event.target.value)}
        rows={2}
        placeholder='Ask a question about this PDF…'
        className='min-h-[72px] flex-1 resize-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500'
      />

      <Button type='submit' disabled={!canSend || isSending}>
        {isSending ? 'Sending…' : 'Send'}
      </Button>
    </form>
  );
}
