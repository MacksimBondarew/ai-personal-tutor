import { FieldActions } from './FieldActions';

export function FieldEditor({
  text,
  setText,
  onSave,
  onCancel,
}: {
  text: string;
  setText: (v: string) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className='space-y-3'>
      <textarea
        className='w-full border rounded-xl p-3'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <FieldActions onSave={onSave} onCancel={onCancel} />
    </div>
  );
}
