import { Check, X } from 'lucide-react';

export function FieldActions({
  onSave,
  onCancel,
}: {
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className='flex gap-2'>
      <button
        onClick={onSave}
        className='flex items-center gap-1 px-3 py-2 bg-black text-white rounded-lg'
      >
        <Check className='w-4 h-4' />
        Save
      </button>

      <button
        onClick={onCancel}
        className='flex items-center gap-1 px-3 py-2 border rounded-lg'
      >
        <X className='w-4 h-4' />
        Cancel
      </button>
    </div>
  );
}
