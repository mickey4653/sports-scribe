import Image from 'next/image';

export function ProfileIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <Image
      src="/icons/UserCircle.svg"
      alt="Profile"
      width={20}
      height={20}
      className={className}
    />
  );
}
