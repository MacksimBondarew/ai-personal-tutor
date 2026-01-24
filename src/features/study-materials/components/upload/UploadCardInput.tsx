type UploadCardInputProps = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onFile: (file: File | null) => void;
};

export function UploadCardInput({ inputRef, onFile }: UploadCardInputProps) {
  return (
    <input
      ref={inputRef}
      type='file'
      accept='application/pdf'
      className='hidden'
      onChange={(e) => onFile(e.target.files?.[0] ?? null)}
    />
  );
}
