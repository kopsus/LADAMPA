import Image from "next/image"

// assets
import brand from "../../public/assets/brand.png"
import ig from "../../public/assets/ig.svg"
import wa from "../../public/assets/wa.svg"
import email from "../../public/assets/email.svg"

import dynamic from "next/dynamic"
const MapsFooter = dynamic(() => import("@/components/mapsFooter"), {
  ssr: false,
})

export default function Footer() {
  return (
    <>
      <div className="p-5 md:px-10 lg:p-10 bg-primaryGrand text-[3.5vw] md:mt-14 md:text-[2vw] xl:text-[1.1vw] xl:py-7 xl:px-16 2xl:text-[1vw] text-white">
        {/* Address */}
        <div className="grid grid-cols-2 gap-5 md:gap-10 xl:grid-cols-3 xl:py-0">
          <div className="xl:order-2 xl:mx-auto">
            <div className=" flex flex-col gap-3 text-white">
              <p className="font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
                Link Terkait
              </p>
              <div className="text-[3.2vw] md:text-[2vw] xl:text-[1.1vw] flex flex-col gap-2">
                <p>Pemerintah Banyumas</p>
                <p>Pengelola Sampah</p>
                <p>IT Telkom Purwokerto</p>
              </div>
            </div>
            <div className="hidden text-white xl:flex xl:flex-col xl:gap-5 xl:text-[1vw] xl:mt-10 2xl:text-[1vw]">
              <p className="font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
                Contact
              </p>
              <div className="flex gap-7 items-center">
                <div className="gap-3 items-center">
                  <div className="overflow-hidden w-[3.5vh] cursor-pointer">
                    <Image
                      src={ig}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="gap-3 items-center">
                  <div className="overflow-hidden w-[3.5vh] cursor-pointer">
                    <Image
                      src={wa}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="gap-1 items-center">
                  <div className="overflow-hidden w-[3.5vh] cursor-pointer">
                    <Image
                      src={email}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col gap-5 lg:my-0 xl:text-[1vw] xl:hidden 2xl:text-[1vw]">
            <p className="font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
              Contact
            </p>
            <div className="flex gap-7">
              <div className="gap-3 items-center">
                <div className="overflow-hidden w-[3vh]">
                  <Image
                    src={ig}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="gap-3 items-center">
                <div className="overflow-hidden w-[3vh]">
                  <Image
                    src={wa}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="gap-1 items-center">
                <div className="overflow-hidden w-[3vh]">
                  <Image
                    src={email}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* About us */}
          <div className="flex gap-5 xl:order-1">
            <div className="flex flex-col gap-10 flex-1">
              <div className="flex flex-col gap-3 ">
                <p className="font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
                  Tentang Kami
                </p>
                <p className="text-[3.2vw] md:text-[2vw] xl:text-[1.1vw]">
                  Ladampa adalah aplikasi inovatif yang berfokus pada
                  pengelolaan sampah. Dengan ladampa, kita dapat memperkuat
                  gerakan kebersihan dan kelestarian lingkungan.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:order-3">
            <MapsFooter />
          </div>
        </div>
      </div>
      <p className="text-center bg-darkGreen text-white py-2 text-[3vw] md:text-[2vw] lg:text-[1.1vw] xl:text-start xl:px-16">
        Copyright © 2023 Ladampa
      </p>
    </>
  )
}
