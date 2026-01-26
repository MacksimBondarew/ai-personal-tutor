import { json } from '@/src/shared/lib/json';

export const bad = (
  message: string,
  status: number,
  extra?: Record<string, unknown>,
) => json({ error: message, ...extra }, status);
