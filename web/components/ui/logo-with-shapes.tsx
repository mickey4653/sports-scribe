import Image from 'next/image';

export function LogoWithShapes() {
  return (
    <div className="relative inline-flex items-center">
      {/* Design shapes - import your SVG files here */}
      
      {/* Example: Shape 1 - replace with your actual SVG file */}
      <Image
        src="/images/logo-shape1.svg"
        alt=""
        width={24}
        height={24}
        className="absolute -top-[30px] -left-[80px] w-[141px] h-[85px] scale-[1.74]"
      />
      
      {/* Example: Shape 2 - replace with your actual SVG file */}
      <Image
        src="/images/logo-shape2.svg"
        alt=""
        width={16}
        height={16}
        className="absolute -bottom-[30px] -right-[120px] w-[95px] h-[85px] scale-[1.2]"
      />
      
      {/* Logo text */}
      <span className="relative z-10 text-white left-[30px]">
        Sport<span className="font-bold">Scribe</span>
      </span>
    </div>
  );
} 