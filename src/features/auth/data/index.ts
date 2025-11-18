export const SignUpInputs = [
  { name: 'email', label: 'Email' },
  { name: 'name', label: 'Name' },
  { name: 'password', label: 'Password' },
] as const satisfies { name: string; label: string }[];
