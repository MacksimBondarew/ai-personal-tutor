import type { EditableProfileField, ProfileType } from '@/src/shared/types';

export function getProfileFieldValue(
  p: ProfileType,
  field: EditableProfileField,
) {
  const v = p[field];
  return typeof v === 'string' ? v : (v ?? null);
}
