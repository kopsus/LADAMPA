"use client"

import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

import "../app/globals.css"

export const options = {
  responsive: true,
  plugins: {
    legend: {
      align: "center" as const,
      position: "bottom" as const,
      labels: {
        padding: 20,
      },
    },
  },
}

export const data = {
  labels: ["Terkonfirmasi", "Terkelola"],
  datasets: [
    {
      data: [3, 13],
      backgroundColor: ["#D31E1E", "#29A2CC"],
      borderColor: ["#D31E1E", "#29A2CC"],
      borderWidth: 1,
      cutout: 0,
    },
  ],
}

export default function PieChart() {
  const borderStyle = {
    borderBottom: "2px solid #D9D9D9",
    paddingBottom: "10vw",
  }

  return (
    <>
      <div className="my-10 md:my-20 px-5 lg:px-10 2xl:px-14">
        <div className="">
          <p className="title-components text-primaryGrand">
            Kasus Berdasarkan Jenis Sampah
          </p>
          <div className="lg:flex lg:items-center lg:mb-10 ">
            <div className="mx-auto mt-10 md:mt-16 w-[90%] lg:w-[50%] xl:w-[40%]">
              <Pie data={data} options={options} width="100%" height="100%" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 text-white text-[3vw] my-10 md:w-[70%] md:aspect-[5/1] md:mx-auto lg:w-[25%]   md:mb-20 md:text-[2vw] lg:text-[1.3vw] lg:aspect-auto xl:text-[1.1vw] 2xl:w-[20%]">
              <div className="bg-primaryRed px-3 py-3 rounded-lg lg:p-5 ">
                <p>2000</p>
                <p>Sampah terkonfirmasi</p>
              </div>
              <div className="bg-lightBlue px-3 py-3 rounded-lg lg:p-5 ">
                <p>2000</p>
                <p>Sampah terkelola</p>
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-[2.8vw] md:text-[1.5vw] lg:text-[1.1vw]"
          style={borderStyle}
        >
          Catatan: Persentanse penumpukan sampah daerah Banyumas berdasarkan
          Jenisnya
        </p>
      </div>
    </>
  )
}
