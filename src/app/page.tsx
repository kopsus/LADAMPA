"use client"

import PieChart from "@/components/pieChart"
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
    <div className="mt-20 z-10 md:mt-28 2xl:mt-36">
      <div className="flex flex-col px-5 gap-10 lg:flex-row lg:items-center lg:px-10 lg:my-20 2xl:px-14">
        <div className="order-2 flex flex-col gap-3 mb-3 md:px-10 lg:order-1">
          <div className="text-primaryGrand text-center text-[5vw] md:text-[4.5vw] lg:text-[2.8vw] font-bold lg:text-start">
            <p className="drop-shadow-xl">
              Mari <span className="text-darkRed">Peduli Sampah</span>
            </p>
            <p className="drop-shadow-xl">
              di Lingkungan <span className="text-darkRed"> Kita Sendiri</span>
            </p>
          </div>
          <p className="text-[3.8vw] md:text-[2.5vw] lg:text-[1.3vw]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur accusantium tempora expedita animi aut. Modi ut rem,
            accusantium aliquam, voluptates corrupti blanditiis consequatur
            minima facilis rerum dolor aspernatur quos iste?
          </p>
        </div>
        <div className="order-1 lg:w-full lg:order-1 lg:px-10">
          <div className="overflow-hidden w-[60%] mx-auto md:w-[50%] lg:w-full 2xl:w-[80%] ">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <BarChart />
      <Maps />
      <PieChart />
      <LadampaTerkini />
      <Testimoni />
    </div>
  )
}
