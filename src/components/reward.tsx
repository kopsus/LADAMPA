"use client"

import React, { useState } from "react"
import Image from "next/image"
import padlock from "../../public/assets/padlock.png"

const ComponentsExp = ({
  text,
  index,
  onClick,
  selected,
}: {
  text: string
  index: number
  onClick: () => void
  selected: boolean
}) => {
  const handleActive = () => {
    onClick() // Memanggil fungsi onClick dengan indeks komponen ini
  }

  return (
    <div>
      <div
        className={`overflow-hidden w-[10vw] rounded-full p-2 md:w-[7vw] lg:w-[3.5vw] xl:w-[2.5vw] xl:cursor-pointer ${
          selected ? "bg-secondPrimary" : "bg-white"
        }`}
        onClick={handleActive}
      >
        <Image
          src={padlock}
          alt="padlock"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center text-white text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[0.8vw]">
        {text}
      </p>
    </div>
  )
}

const ComponentReward = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-5 mt-3">
      <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw]">
        {text}
      </p>
      <button className="bg-primaryGrand text-white px-5 py-1 rounded-md text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[0.8vw] xl:hover:bg-darkGreen">
        Klaim
      </button>
    </div>
  )
}

const Reward = () => {
  const [selectedReward, setSelectedReward] = useState<number | null>(null)
  const [reward, setReward] = useState(true)

  const handleSelected = (index: number) => {
    setReward(!reward)
    setSelectedReward(index)
  }

  return (
    <div className="mb-10">
      <div className="bg-primaryGrand rounded-md px-5 py-3 shadow-md md:px-7 md:py-5">
        <p className="text-white font-bold text-[4.5vw] md:text-[3.5vw] lg:text-[2vw] xl:text-[1.4vw]">
          Reward
        </p>
        <div className="border-t-2 border-slate-300 mt-3 pt-3">
          <p className="text-white text-[4vw] md:text-[3vw] lg:text-[1.5vw] xl:text-[1.2vw]">
            5 XP
          </p>

          {/* exp */}
          <div className="h-[10vw] flex items-center relative mt-3 md:h-[7vw] lg:h-[3.5vw] xl:h-[2.5vw]">
            <div className="w-full absolute top-0 flex justify-between pl-10 md:pl-20 lg:pl-10">
              <ComponentsExp
                text="20 xp"
                index={0}
                onClick={() => handleSelected(0)}
                selected={selectedReward === 0}
              />
              <ComponentsExp
                text="20 xp"
                index={1}
                onClick={() => handleSelected(1)}
                selected={selectedReward === 1}
              />
              <ComponentsExp
                text="30 xp"
                index={2}
                onClick={() => handleSelected(2)}
                selected={selectedReward === 2}
              />
              <ComponentsExp
                text="40 xp"
                index={3}
                onClick={() => handleSelected(3)}
                selected={selectedReward === 3}
              />
            </div>
            <div className="bg-slate-400 w-full h-1/2 rounded-full">
              <div className="bg-primaryBlue w-[10%] h-full rounded-full lg:w-[20%] xl:w-[10%]"></div>
            </div>
          </div>

          {/* reward */}
          <div className="bg-white rounded-md px-5 py-3 mt-10 mb-3">
            <p className="text-[4vw] font-bold md:text-[3vw] lg:text-[1.5vw] xl:text-[1.2vw]">
              Reward
            </p>
            {reward === true ? (
              <ComponentReward text="handphone Iphone 14 Pro Max" />
            ) : (
              <>
                {selectedReward === 0 ? (
                  <ComponentReward text="Pulsa Internet Sebesar 5000" />
                ) : null}
                {selectedReward === 1 ? (
                  <ComponentReward text="Vocher kuota sebesar 10 GB" />
                ) : null}
                {selectedReward === 2 ? (
                  <ComponentReward text="1 Tiket Brangkat Haji" />
                ) : null}
                {selectedReward === 3 ? (
                  <ComponentReward text="Bebas Keliling Dunia" />
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reward
