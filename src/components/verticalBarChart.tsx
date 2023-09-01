"use client"
import React from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    Tooltip: {
      enabled: false,
    },
  },
}

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "agu",
  "sep",
  "okt",
  "nov",
  "des",
]

export const data = {
  labels,
  datasets: [
    {
      data: [521, 893, 527, 332, 454, 746, 341, 234, 701, 458, 802, 321],
      backgroundColor: ["#FF0000"],
    },
    {
      data: [383, 402, 391, 123, 256, 231, 439, 167, 194, 579, 348, 312],
      backgroundColor: ["#155976"],
    },
    {
      data: [357, 765, 289, 430, 512, 43, 482, 378, 25, 412, 698, 432],
      backgroundColor: ["#29A71A"],
    },
    {
      data: [601, 728, 874, 446, 567, 815, 598, 650, 346, 783, 572, 596],
      backgroundColor: ["#730E5D"],
    },
  ],
}

const tahun: any[] = []
for (var i = 2000; i <= 2023; i++) {
  tahun.push([i])
}

export default function BarChart() {
  // const borderStyle = {
  //   borderBottom: "2px solid #D9D9D9",
  //   paddingBottom: "5vw",
  // }

  return (
    <>
      <div className="px-5 mt-16 mb-7 md:px-10 md:mt-20 lg:mt-32 xl:px-16 2xl:px-16">
        {/* <p className="capitalize title-components text-primaryGrand">
          rekap data
        </p> */}
        <div className="mt-5 mb-3 md:mb-5 lg:mb-5 flex justify-end">
          <form className="flex items-center gap-3">
            <label className="font-bold text-[3vw] md:text-[2vw] lg:text-[1.1vw]">
              Cari data :
            </label>
            <div className="flex items-center gap-1">
              <select className="text-[3vw] border-2 border-slate-400 h-[5vw] text-black outline-primaryGrand rounded-md md:h-[4vw] md:text-[2vw] lg:h-[1.7vw] lg:text-[0.9vw] lg:cursor-pointer">
                {tahun.map((value, i) => {
                  return (
                    <option
                      className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] 2xl:text-[0.5vw]"
                      key={i}
                    >
                      {value}
                    </option>
                  )
                })}
              </select>
              <button
                type="submit"
                className="bg-primaryGrand px-3 py-[2px] rounded-md text-white text-[2.7vw] shadow-md hover:bg-darkGreen md:text-[2vw] lg:text-[1vw]"
              >
                cari
              </button>
            </div>
          </form>
        </div>

        <div className="mb-5 mx-auto xl:w-[80%]">
          <Bar options={options} data={data}></Bar>
        </div>

        <div className="text-[2.5vw] text-center md:text-[2vw] lg:text-[1vw] lg:px-32">
          <p className="text-primaryRed font-bold">Data Sampah Banyumas</p>
        </div>

        {/* <p className="text-[3vw] mt-8 mb-5 text-primaryGrand font-bold md:text-[2.5vw]  lg:text-[1.3vw]">
          rekap data per tahun
        </p> */}
        <div
          className="mt-8 grid grid-cols-2 border-b-2 border-slate-400 pb-7 aspect-[5/1] gap-5 text-white text-[3vw] md:pb-10 md:grid-cols-4 md:text-[1.8vw] md:mt-16 lg:mb-20 lg:mt-20 lg:text-[1.3vw] xl:pb-20 xl:text-[1.1vw] xl:aspect-[8/1] xl:gap-16 2xl:gap-16 2xl:aspect-[5/1]"
          // style={borderStyle}
        >
          <div className="bg-primaryRed pb-5 px-3 pt-3 lg:pb-7 rounded-lg ">
            <p>2.988.087</p>
            <p>Kasus Terkonfirmasi</p>
          </div>
          <div className="bg-darkBlue pb-5 px-3 pt-3 lg:pb-7 rounded-lg ">
            <p>2.988.087</p>
            <p>Kasus On-Proses</p>
          </div>
          <div className="bg-lightGreen pb-5 px-3 pt-3 lg:pb-7 rounded-lg ">
            <p>2.988.087</p>
            <p>Kasus Selesai</p>
          </div>
          <div className="bg-primaryPurple pb-5 px-3 pt-3 lg:pb-7 rounded-lg ">
            <p>2.988.087</p>
            <p>Kasus Total</p>
          </div>
        </div>
      </div>
    </>
  )
}
