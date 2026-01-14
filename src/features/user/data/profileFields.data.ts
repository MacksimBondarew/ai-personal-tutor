import { ProfileType } from '@/src/shared/types';

export const profileFields = [
  {
    title: 'My bio',
    field: 'bio',
    emptyText: 'Please enter your bio',
  },
  {
    title: 'My goal',
    field: 'study_goal',
    emptyText: 'Please enter your goal',
  },
] as const satisfies ReadonlyArray<{
  title: string;
  emptyText: string;
  field: keyof ProfileType;
}>;
