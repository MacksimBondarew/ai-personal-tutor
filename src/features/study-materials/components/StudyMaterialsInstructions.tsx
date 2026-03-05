function StudyMaterialsInstructions() {
  return (
    <div className='rounded-xl border border-gray-100 p-4 bg-gray-50 text-sm text-gray-700 space-y-2'>
      <p className='font-medium text-gray-900'>How it works</p>

      <ol className='list-decimal list-inside space-y-1'>
        <li>Upload a PDF document from your device.</li>
        <li>Wait until the document appears in the list.</li>
        <li>
          Click <span className='font-medium'>Generate quiz</span>.
        </li>
        <li>Open the generated quiz and start studying.</li>
      </ol>

      <p className='text-xs text-gray-500'>Supported format: PDF</p>
    </div>
  );
}

export { StudyMaterialsInstructions };
