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
      data: [
        4521, 1893, 6527, 5932, 1854, 2746, 5341, 1234, 6701, 5458, 3802, 5721,
      ],
      backgroundColor: ["#FF0000"],
    },
    {
      data: [
        1783, 5402, 3891, 6123, 2956, 4231, 5439, 1067, 2194, 2579, 1348, 6912,
      ],
      backgroundColor: ["#155976"],
    },
    {
      data: [
        6357, 2765, 4289, 5430, 6512, 6043, 3982, 1678, 3025, 712, 5198, 4632,
      ],
      backgroundColor: ["#29A71A"],
    },
    {
      data: [
        2601, 3728, 5874, 4346, 2167, 4815, 6598, 6250, 5346, 5983, 1572, 3096,
      ],
      backgroundColor: ["#730E5D"],
    },
  ],
}

const tahun: any[] = []
for (var i = 2000; i <= 2023; i++) {
  tahun.push([i])
}

export default function BarChart() {
  const borderStyle = {
    borderBottom: "2px solid #D9D9D9",
    paddingBottom: "10vw",
  }

  return (
    <>
      <div className="px-5 lg:px-10 mt-12 mb-7 lg:mb-12 lg:mt-32 2xl:px-16">
        <p className="capitalize title-components text-primaryGrand">
          rekap data
        </p>
        <div className="mt-5 mb-3 md:mb-5 lg:mb-5 flex justify-end">
          <form className="flex items-center gap-3">
            <label className="font-bold text-[3vw] md:text-[2vw] lg:text-[1.1vw]">
              Cari data :
            </label>
            <div className="flex items-center gap-1">
              <select className="text-[3vw] border-2 border-slate-400 h-[5vw] text-black outline-primaryGrand rounded-md md:h-[4vw] md:text-[2vw] lg:h-[2vw] lg:text-[1vw] lg:cursor-pointer">
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

        <div className="mb-5 mx-auto">
          <Bar options={options} data={data}></Bar>
        </div>

        <div className="text-[2.5vw] text-center md:text-[2vw] lg:text-[1vw] lg:px-32">
          <p className="text-primaryRed font-bold">Sampah Banyumas</p>
          <p className="">Update</p>
        </div>

        <p className="text-[3vw] mt-8 mb-5 text-primaryGrand font-bold md:text-[2.5vw] md:mt-16 lg:mt-20 lg:text-[1.3vw]">
          rekap data per tahun
        </p>
        <div
          className="grid grid-cols-2 md:grid-cols-4 aspect-[5/1] gap-5 lg:mb-20 text-white text-[3vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1.1vw] xl:aspect-[6/1] 2xl:gap-16 2xl:aspect-[5/1]"
          style={borderStyle}
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
