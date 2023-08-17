import Image from "next/image"

// assets
import brand from "../../public/assets/brand.png"
import dynamic from "next/dynamic"

const MapsFooter = dynamic(() => import("@/components/mapsFooter"), {
  ssr: false,
})

export default function Footer() {
  return (
    <>
      <div className="p-5 lg:p-10 bg-primaryGrand text-[3.5vw] md:text-[2vw] lg:text-[1.3vw] text-white">
        <div className="flex items-center gap-3">
          <div className="overflow-hidden w-[10vw] border-r-2 border-white pr-3 md:w-[7vw] lg:w-[4.5vw] xl:w-[4vw] 2xl:w-[3vw]">
            <Image className="w-full h-full object-cover" src={brand} alt="" />
          </div>
          <p className="underline text-[4vw] md:text-[2.5vw] lg:text-[1.7vw]  font-bold xl:text-[1.5vw] 2xl:text-[1.3vw]">
            LADAMPA
          </p>
        </div>

        {/* Address */}
        <div className="lg:flex lg:items-start lg:pt-16 lg:gap-10">
          <div className="my-10 lg:my-0 flex flex-col gap-5 text-white xl:text-[1vw] 2xl:text-[1vw]">
            <p className="font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
              Gedung DC Lantai 3
            </p>
            <p>
              Jl. D.I Panjaitan No. 128 Purwokerto 53147, Jawa Tengah -
              Indonesia
            </p>
            <p>Email: Ladampa@gmail.com</p>
            <p>Negara: Indonesia</p>
          </div>

          {/* About us */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-10 flex-1 xl:text-[1vw] 2xl:text-[1vw]">
              <div className="flex flex-col gap-3 ">
                <p className="font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
                  Tentang Kami
                </p>
                <p>
                  Forum pengelolaan sampah masyarakat kabupaten banyumas yang
                  bekerja sama langsung dengan pemerintah kabupaten banyumas
                </p>
              </div>

              <div className=" flex flex-col gap-5 text-white">
                <p className="font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
                  Link Terkait
                </p>
                <p>Pemerintah Banyumas</p>
                <p>Pengelola Sampah</p>
                <p>IT Telkom Purwokerto</p>
              </div>
            </div>

            <MapsFooter />
          </div>
        </div>
      </div>
      <p className="text-center bg-darkGreen text-white py-2 text-[3vw] md:text-[2vw] lg:text-[1.1vw]">
        Copyright © 2023 Ladampa
      </p>
    </>
  )
}
