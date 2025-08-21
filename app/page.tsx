import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const img = "https://media1.tenor.com/m/5i6frz9dX4UAAAAd/mr-beast-hood-mr-beast.gif"
  const alt = "Salsa Dance Blue Shirt Buy"

  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center gap-6">
      <Image src={img} alt={alt} width={500} height={500} className="aspect-video rounded-2xl"/>
      <h1 className="font-semibold text-5xl">I build cool shi.</h1>
      <p>check out my <Link href="https://qr.sssphe.com" className="underline">QR Code Generator</Link> tool</p>
    </div>
  )
}
