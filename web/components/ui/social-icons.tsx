import Image from 'next/image';

export function FacebookIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <Image
      src="/icons/facebook.svg"
      alt="Facebook"
      width={24}
      height={24}
      className={className}
    />
  );
}

export function TwitterIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <Image
      src="/icons/twitter.svg"
      alt="Twitter"
      width={24}
      height={24}
      className={className}
    />
  );
}

export function InstagramIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <Image
      src="/icons/instagram.svg"
      alt="Instagram"
      width={24}
      height={24}
      className={className}
    />
  );
} 