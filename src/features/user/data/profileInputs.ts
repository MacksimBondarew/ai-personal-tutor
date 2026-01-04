export const ProfileInputs = [
  { name: 'email', label: 'Email' },
  { name: 'name', label: 'Name' },
] as const satisfies { name: string; label: string }[];
