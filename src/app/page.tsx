"use client"

import LadampaTerkini from "@/components/ladampaTerkini"
import Testimoni from "@/components/testimoni"
import BarChart from "@/components/verticalBarChart"
import dynamic from "next/dynamic"
import Image from "next/image"

// assets
import img from "../../public/assets/berandaWrapper.png"

const Maps = dynamic(() => import("@/components/maps"), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="mt-20 z-10 md:mt-24 xl:mt-32 2xl:mt-36">
      <div className="flex flex-col gap-7 md:gap-12 lg:flex-row lg:items-center lg:px-10 lg:my-20 2xl:px-14">
        <div className="flex flex-col px-5 md:px-10 lg:px-12 lg:order-1">
          <div className=" text-[2.5vh] md:text-[3vh] lg:text-[2.5vw] font-bold lg:text-start">
            <p className="drop-shadow-xl">
              Sampah di Lingkungan Kita Sendiri, bersama{" "}
              <span className="text-primaryGrand uppercase underline">
                ladampa
              </span>
              , ciptakan lingkungan bersih, sehat dan juga asri
            </p>
          </div>
        </div>
        <div className=" lg:w-full lg:order-1 lg:px-10">
          <div className="overflow-hidden w-[50%] mx-auto md:w-[40%] lg:w-[90%] 2xl:w-[80%] ">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <BarChart />
      {/* <Maps /> */}
      <LadampaTerkini />
      <Testimoni />
    </div>
  )
}
