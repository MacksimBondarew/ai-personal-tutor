export function buildQuizPrompt(text: string) {
  return `
Return JSON exactly in this shape:
{
  "questions": [
    {
      "question": "string",
      "options": ["A","B","C","D"],
      "correct_answer": "one of options",
      "explanation": "string"
    }
  ]
  Rules:
- Exactly 4 questions
- Each question must have exactly 4 options
- correct_answer must match one of the options
- No markdown
- No extra text
}

Text:
${text}
`.trim();
}
