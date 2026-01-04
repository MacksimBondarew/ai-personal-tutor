import { z } from 'zod';

export const ProfileSchema = z.object({
  email: z.email({ message: 'Please enter a valid email address.' }),
  name: z
    .string()
    .min(6, { message: 'Please enter a name with at least 6 characters.' }),
});

export type TypeProfileSchema = z.infer<typeof ProfileSchema>;
