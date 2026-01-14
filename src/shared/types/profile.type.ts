import { TypeProfileSchema } from '@/src/features/user/schemes';

export interface ProfileType {
  id: string;
  name: string | null;
  email: string;
  avatar: string | null;
  bio: string | null;
  study_goal: string | null;
  level: 'beginner' | 'intermediate' | 'advanced';
  locale: string;
  timezone: string;
  preferences: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export type EditableProfileField = keyof Pick<
  TypeProfileSchema,
  'name' | 'bio' | 'study_goal'
>;

export type ProfileFieldUpdate = {
  field: EditableProfileField;
  value: string;
};
