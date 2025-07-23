import Image from 'next/image';

export function SearchIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <Image
      src="/icons/search.svg"
      alt="Search"
      width={16}
      height={16}
      className={className}
    />
  );
} 