import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const img = "https://media1.tenor.com/m/5i6frz9dX4UAAAAd/mr-beast-hood-mr-beast.gif"
  const alt = "Salsa Dance Blue Shirt Buy"

  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center gap-6 p-6 motion-opacity-in-0 motion-preset-expand motion-blur-in-lg motion-duration-1500">
      <Image src={img} alt={alt} width={500} height={500} className="aspect-video rounded-2xl motion-delay-150 motion-opacity-in-0 motion-preset-expand" priority unoptimized/>
      <h1 className="font-semibold text-5xl motion-delay-300 motion-opacity-in-0 motion-preset-expand">I build cool shi.</h1>
      <p className="motion-delay-500 motion-opacity-in-0 motion-preset-expand">check out my <Link href="https://qr.sssphe.com" className="underline">QR Code Generator</Link> tool</p>
    </div>
  )
}
