import Image from "next/image";

export function Scene() {
  return (
    <div className="mx-auto mt-[180px] max-w-[1200px] px-6">
      <div className="relative w-full">
        <Image
          src="/images/hero-scene.png"
          alt="Desk scene"
          width={1400}
          height={900}
          priority
          className="w-full h-auto rounded-[28px]"
        />
      </div>
    </div>
  );
}