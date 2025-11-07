import { z } from "zod";

export const SignInSchema = z.object({
    email: z.email({ message: "Please enter a valid email address." }),
    name: z.string().min(6, { message: "Please enter a name with at least 6 characters." }),
    password: z.string().min(6, { message: "Please enter a password with at least 6 characters." }),
});

export type TypeSignInSchema = z.infer<typeof SignInSchema>;