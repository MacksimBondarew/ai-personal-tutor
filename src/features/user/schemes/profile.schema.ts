import { z } from 'zod';

export const ProfileSchema = z.object({
  bio: z
    .string()
    .min(6, { message: 'Please enter a bio with at least 6 characters.' })
    .max(52, { message: 'Please enter a bio max 52 characters.' }),
  study_goal: z
    .string()
    .min(6, { message: 'Please enter a bio with at least 6 characters.' })
    .max(52, { message: 'Please enter a bio max 52 characters.' }),
  name: z
    .string()
    .min(6, { message: 'Please enter a bio with at least 6 characters.' })
    .max(20, { message: 'Please enter a bio max 20 characters.' }),
});

export type TypeProfileSchema = z.infer<typeof ProfileSchema>;
