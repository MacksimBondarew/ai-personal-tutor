import { Button } from '@/src/shared/components/ui';
import { LogOutIcon } from 'lucide-react';
import { useLogoutMutation } from '@/src/features/user/hooks/useLogoutMutation';

export function LogoutButton() {
  const {} = useLogoutMutation();
  return (
    <Button
      variant='outline'
      className='w-full justify-center rounded-2xl border-slate-200 text-slate-700 hover:bg-red-50 hover:text-red-600 sm:w-auto'
    >
      <LogOutIcon className='mr-2 h-4 w-4' />
      Logout
    </Button>
  );
}
