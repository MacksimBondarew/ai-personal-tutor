import Link from 'next/link';

export const FormFooter = ({
  text,
  href,
  linkText,
}: {
  text: string;
  linkText: string;
  href: string;
}) => {
  return (
    <div className={'mt-5'}>
      <span
        className={
          'flex mb-5 justify-center items-center text-[10px] before:block before:bg-gray-300 before:w-[50%] before:h-px before:mr-2.5 after:block after:bg-gray-300 after:w-[50%] after:h-px after:ml-2.5'
        }
      >
        or
      </span>
      <p className={'flex justify-center gap-1 font-medium'}>
        {text}
        <Link className={'text-blue-500'} href={href}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};
