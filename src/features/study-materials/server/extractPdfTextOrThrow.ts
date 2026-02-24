import OpenAI from 'openai';

export async function extractPdfTextOrThrow(file: Blob) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const uploadedFile = await openai.files.create({
    file: new File([file], 'document.pdf', { type: 'application/pdf' }),
    purpose: 'user_data',
  });

  try {
    const response = await openai.responses.create({
      model: 'gpt-4o-mini',
      input: [
        {
          role: 'system',
          content:
            'Extract text from the provided PDF. Return plain text only, without markdown or commentary.',
        },
        {
          role: 'user',
          content: [
            {
              type: 'input_file',
              file_id: uploadedFile.id,
            },
            {
              type: 'input_text',
              text: 'Extract all readable text from this PDF.',
            },
          ],
        },
      ],
    });

    const text = response.output_text?.trim();

    if (!text) {
      throw new Error('Failed to extract text from PDF');
    }

    return text;
  } finally {
    await openai.files.delete(uploadedFile.id);
  }
}
