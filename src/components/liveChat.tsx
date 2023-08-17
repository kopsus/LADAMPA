"use client"

import Image from "next/image"

// assets
import chat from "../../public/assets/chat.png"
import send from "../../public/assets/send.png"
import { useState } from "react"

export default function LiveChat() {
  const [change, setChange] = useState(false)
  const [startChart, setStartChart] = useState(false)
  const [nama, setNama] = useState("")
  const [clientInput, setClientInput] = useState("")
  const [clientHistory, setClientHistory] = useState<string[]>([])

  const handleChange = () => {
    setChange(!change)
  }

  return (
    <div className="relative">
      <div className="fixed bottom-5 right-5 z-50">
        <div
          className="overflow-hidden w-[10vw] md:w-[7vw] lg:w-[4vw] lg:cursor-pointer"
          onClick={handleChange}
        >
          <Image src={chat} alt="" className="w-full h-full" />
        </div>
      </div>

      {/* LIVE CHAT */}
      <div
        className={`z-50 overflow-auto fixed bottom-16 right-5 w-[70%] rounded-md shadow-lg bg-slate-100 md:w-[40%] lg:w-[30%] xl:bottom-20 2xl:bottom-24 
      ${change ? "border-2" : ""} ${change ? "border-black" : ""}`}
      >
        {change && (
          <>
            {startChart ? (
              <div className="">
                <div className="bg-primaryGrand border-b-2 border-black text-white p-3">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Modi necessitatibus et fuga minima distinctio sequi.{" "}
                    <span
                      onClick={() => {
                        setStartChart(!startChart)
                        setClientHistory([])
                      }}
                      className="cursor-pointer underline text-black font-bold"
                    >
                      log out
                    </span>
                  </p>
                </div>
                <div className="p-3">
                  <div className="overflow-auto h-[90vw] md:h-[40vw] lg:h-[25vw]">
                    <div className="w-full">
                      <div className="">
                        <div className="bg-secondPrimary text-white text-[3.5vw] rounded-tr-lg rounded-br-lg rounded-bl-lg w-[70%] p-2 mb-2 md:text-[2.3vw] lg:text-[1vw]">
                          <p className="font-bold">Halo : {nama}</p>
                          <p className="font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam voluptas voluptates eaque inventore atque
                            tempora veritatis unde placeat?
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 w-[70%] float-right text-[3.5vw] md:text-[2.3vw] lg:text-[1vw]">
                          {clientHistory.map((client, i) => {
                            return (
                              <div
                                style={{
                                  overflow: "hidden",
                                  wordWrap: "break-word",
                                }}
                                key={i}
                                className="bg-secondPrimary text-white rounded-tl-lg rounded-br-lg rounded-bl-lg p-2"
                              >
                                <p
                                  className="w-full"
                                  style={{ whiteSpace: "pre-wrap" }}
                                >
                                  {client}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (clientInput) {
                        setClientHistory([...clientHistory, clientInput])
                        setClientInput("")
                      }
                    }}
                    className="w-full overflow-hidden flex items-center justify-between gap-3 md:gap-3 mt-3 "
                  >
                    <input
                      type="text"
                      value={clientInput}
                      onChange={(e) => setClientInput(e.target.value)}
                      className="border-2 p-1 border-slate-400 outline-primaryGrand rounded-md w-full h-[8vw] md:h-[5vw] lg:h-[2.5vw]"
                    />
                    <button type="submit">
                      <Image
                        src={send}
                        alt=""
                        className="h-[8vw] md:h-[5vw] lg:h-[2.5vw]"
                      />
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-primaryGrand border-b-2 border-black text-white p-3 flex flex-col gap-2 2xl:p-5">
                  <p className="font-bold md:text-[3.5vw] lg:text-[1.7vw] xl:text-[1.3vw]">
                    Hello! We would like to talk to you
                  </p>
                  <p className="text-[3vw] font-light md:text-[2vw] lg:text-[1vw]">
                    Please fill the details below to start chatting with us.
                  </p>
                </div>
                <form
                  onSubmit={() => setStartChart(!startChart)}
                  className="flex flex-col gap-3 p-3 2xl:p-5"
                >
                  <div>
                    <label className="text-[3.5vw] md:text-[2.5vw] lg:text-[1vw]">
                      Nama
                    </label>
                    <input
                      type="text"
                      required
                      onChange={(e) => setNama(e.target.value)}
                      className="text-[3.5vw] border-2 border-slate-400 outline-primaryGrand w-full rounded-md p-1 md:text-[2.5vw] lg:text-[1vw]"
                    />
                  </div>
                  <div>
                    <label className="text-[3.5vw] md:text-[2.5vw] lg:text-[1vw]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="text-[3.5vw] border-2 border-slate-400 outline-primaryGrand w-full rounded-md p-1 md:text-[2.5vw] lg:text-[1vw]"
                    />
                  </div>
                  <div>
                    <label className="text-[3.5vw] md:text-[2.5vw] lg:text-[1vw]">
                      Nomor Telepone
                    </label>
                    <input
                      type="text"
                      required
                      className="text-[3.5vw] border-2 border-slate-400 outline-primaryGrand w-full rounded-md p-1 md:text-[2.5vw] lg:text-[1vw]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-[3.5vw] bg-primaryGrand w-full rounded-md text-white mt-3 py-1 hover:bg-darkGreen md:text-[2.5vw] lg:text-[1vw]"
                  >
                    Mulai Chat
                  </button>
                  <p className="text-center text-primaryGrand font-bold mt-12 mb-3">
                    powered by LADAMPA
                  </p>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
