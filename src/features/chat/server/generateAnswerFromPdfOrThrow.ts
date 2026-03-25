import OpenAI from 'openai';

export async function generateAnswerFromPdfOrThrow(args: {
  file: Blob;
  question: string;
}) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const uploadedFile = await openai.files.create({
    file: new File([args.file], 'document.pdf', { type: 'application/pdf' }),
    purpose: 'user_data',
  });

  try {
    const response = await openai.responses.create({
      model: 'gpt-4o-mini',
      input: [
        {
          role: 'system',
          content:
            'You answer questions only using the attached PDF. If the answer is not in the PDF, clearly say you cannot find it in this document.',
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
              text: `Question: ${args.question}`,
            },
          ],
        },
      ],
    });

    const answer = response.output_text?.trim();

    if (!answer) {
      throw new Error('Failed to generate chat answer from PDF');
    }

    return answer;
  } finally {
    await openai.files.delete(uploadedFile.id);
  }
}
