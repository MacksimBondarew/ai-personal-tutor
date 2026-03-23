import { Pencil } from 'lucide-react';

export function FieldDisplay({
  value,
  emptyText,
  onEdit,
}: {
  value: string | null;
  emptyText: string;
  onEdit: () => void;
}) {
  return (
    <div className='flex justify-between items-start'>
      <p className={value ? 'text-gray-700' : 'text-gray-400 italic'}>
        {value || emptyText}
      </p>

      <button onClick={onEdit}>
        <Pencil className='w-5 h-5 text-gray-500 hover:text-black' />
      </button>
    </div>
  );
}
