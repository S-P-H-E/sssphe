"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { Caveat } from "next/font/google"
import { BsStars } from "react-icons/bs";
import { clsx } from 'clsx'

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export default function Home() {
  const [mute, setMute] = useState(true)
  const [index, setIndex] = useState<number | null>(null);
  const [exclude, setExclude] = useState<number[]>([])
  
  const videos = [
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755801440/RDownload_ngrach.mov",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806037/aep.tash10_-_1755804070418_xzn8or.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806067/jinxilli_-_1755803031782_xkrd7a.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806069/tmurrae_-_1755804162649_etbf48.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806070/winnussie_-_1755804619269_muflet.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806069/lislife.ae_-_1755804940674_as5r7n.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806070/vfxgijs_-_1755803582944_niq59a.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806070/vfxherox_-_1755803385542_u3cjpc.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806070/cartiierszn_-_1755802987149_dak9cb.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806071/dannyaep_-_1755803976146_e1blah.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806071/loverofchrist23_-_1755805532076_qhsawh.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806071/defend.aep_-_1755803649104_g06tni.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806071/yanoyokayo_-_1755803997078_z31oyd.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806072/kurama_ae_-_1755803663866_djiti7.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806072/vfxherox_-_1755805200505_absctb.mp4",
    "https://res.cloudinary.com/dxpzs2g3f/video/upload/v1755806582/bibleftbl_-_1755804467769_omdux1.mp4"
  ]

  // * code modified from stackoverflow "https://arc.net/l/quote/rlpsihay"
  const generateRandom = () => {
    let random: number | undefined;
    while (!random) {
      const x = Math.floor(Math.random() * ((videos.length - 1) - 0 + 1)) + 0;
      if (exclude.indexOf(x) === - 1) random = x;
    }

    setIndex(random)
    setExclude(prev => [...prev, random]);
    console.log("Playing video #", random)
    console.log("Excluded: ", exclude)
  }
  // *

  const handleIndex = () => {
    if (videos.length == exclude.length + 2) {
      // Empty the array
      setExclude([])
      generateRandom()
    } else {
      generateRandom()
    }
  }

  useEffect(() => {
    handleIndex()
  }, []);
  
  return (
    <div className="h-[100dvh] relative flex flex-col items-center justify-center gap-6 p-6 motion-opacity-in-0 motion-preset-expand motion-blur-in-lg motion-duration-1500">
      <div className="w-full md:w-[500px]">
        <div className="flex w-[160px] ml-auto mr-2 md:mr-3 mb-5 justify-end items-center md:gap-2 rotate-[2deg]">
            <h1 className={`${caveat.className} antialiased font-bold text-2xl`}>Press to {mute ? "unmute" : "mute"}</h1>
            <PiArrowBendDownLeftBold size={20} className="-rotate-90 translate-y-3"/>
        </div>

        <div className="relative w-full h-[400px]">
          <div className="absolute z-10 w-full flex justify-between p-3">
            <button onClick={handleIndex} className="cursor-pointer text-xl drop-shadow-lg">
              <BsStars />
            </button>
            <button onClick={() => setMute(!mute)} className="cursor-pointer text-xl drop-shadow-lg">
              {mute ? (
                <HiSpeakerXMark />
              ):(
                <HiSpeakerWave />
              )}
            </button>
          </div>
          <div className={clsx(!mute && "opacity-0", "transition-opacity duration-300 bg-gradient-to-t from-[var(--background)] to-transparent absolute w-full h-1/2 bottom-0 z-10")}/>
          {index !== null && (
            <video muted={mute} autoPlay loop playsInline preload="auto" disablePictureInPicture src={videos[index]} className="w-full h-full object-cover grayscale-50 rounded-2xl"/>
          )}
      </div>
      </div>
      

      <p>👋 I'm a full stack web developer and...</p>
      <h1 className="font-semibold text-5xl motion-delay-300 motion-opacity-in-0 motion-preset-expand">I build cool shi.</h1>
      <p className="motion-delay-500 motion-opacity-in-0 motion-preset-expand">check out my <Link href="https://qr.sssphe.com" className="underline">QR Code Generator</Link> tool</p>
    </div>
  )
}