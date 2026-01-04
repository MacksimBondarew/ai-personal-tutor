import AvatarOne from '@/src/public/avatars/avatar_1.png';
import AvatarTwo from '@/src/public/avatars/avatar_2.png';
import AvatarThree from '@/src/public/avatars/avatar_3.png';
import AvatarFour from '@/src/public/avatars/avatar_4.png';
import AvatarFive from '@/src/public/avatars/avatar_5.png';
import AvatarSix from '@/src/public/avatars/avatar_6.png';
import AvatarSeven from '@/src/public/avatars/avatar_7.png';
import AvatarEight from '@/src/public/avatars/avatar_8.png';
import AvatarNine from '@/src/public/avatars/avatar_9.png';

export const avatars = [
  AvatarOne,
  AvatarTwo,
  AvatarThree,
  AvatarFour,
  AvatarFive,
  AvatarSix,
  AvatarSeven,
  AvatarEight,
  AvatarNine,
];

export function randomAvatar() {
  return avatars[Math.floor(Math.random() * avatars.length)];
}
