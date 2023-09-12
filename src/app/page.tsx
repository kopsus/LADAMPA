"use client"

import LadampaTerkini from "@/components/ladampaTerkini"
import Testimoni from "@/components/testimoni"
import BarChart from "@/components/verticalBarChart"
import dynamic from "next/dynamic"
import Image from "next/image"

// assets
import img from "../../public/assets/berandaWrapper.png"
import Link from "next/link"

const Maps = dynamic(() => import("@/components/maps"), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="mt-20 z-10 md:mt-24 xl:mt-32 2xl:mt-36">
      <div className="flex flex-col md:flex-row md:items-center md:px-16 lg:px-10 lg:my-20 xl:px-16 2xl:px-14">
        <div className="w-[90%] mx-auto order-2 border-b-2 pb-10 border-slate-300 mt-5 md:mt-0 md:pb-0 md:border-none md:order-1 lg:w-[50%]">
          <div className="text-[3vh] text-center md:text-[2vh] md:text-start md:pl-5 lg:text-[2.5vw] xl:text-[2.5vw] font-bold lg:text-start xl:pl-0">
            <p className="drop-shadow-xl">Sampah Berserakan ?</p>
            <p className="drop-shadow-xl">
              Segera adukan masalahnya sebelum terlambat
            </p>
            <Link href={"/pengaduan"}>
              <button className="text-white bg-red-600 hover:bg-red-700 px-5 py-1 rounded-md text-[3vw] mt-5 md:text-[1.5vw] xl:text-[1vw]">
                Laporkan
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[70%] order-1 md:order-2 lg:px-10 xl:w-[40%]">
          <div className="overflow-hidden w-[50%] mx-auto md:w-[70%] lg:w-[90%] 2xl:w-[80%] ">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <BarChart />
      <Maps />
      <LadampaTerkini />
      <Testimoni />
    </div>
  )
}
