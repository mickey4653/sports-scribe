import Image from 'next/image';
interface ChevronRightIconProps {
  className?: string;
}

export function ChevronRightIcon({ className = "w-4 h-4" }: ChevronRightIconProps) {
  return (
    <Image
      src="/icons/right-icon.svg"
      alt="Facebook"
      width={24}
      height={24}
      className={className}
    />
  );
} 