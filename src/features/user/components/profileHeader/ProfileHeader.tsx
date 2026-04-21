import { UserInfo } from '@/src/features/user/components/profileHeader/UserInfo';
import { LogoutButton } from '@/src/features/user/components/profileHeader/LogoutButton';

export function ProfileHeader({ user, profile }: any) {
  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <UserInfo user={user} profile={profile} />
        <LogoutButton />
      </div>
    </div>
  );
}
