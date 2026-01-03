import { ProfileHeader } from '@/src/features/user/components';
import { supabase } from '@/src/shared/lib/supabase';

export const ProfilePage = async () => {
  const {
    data: { user },
  } = await supabase().auth.getUser();
  let metadata = user?.user_metadata;
  console.log('metadata', metadata);
  return (
    <>
      <ProfileHeader />
    </>
  );
};
