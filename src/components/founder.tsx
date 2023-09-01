import Image from "next/image"

// assets
import ihwan from "../../public/assets/ihwan.png"
import tegar from "../../public/assets/tegar.png"
import laela from "../../public/assets/laela.jpg"
import partner from "../../public/assets/logo.png"

export default function Founder() {
  return (
    <>
      <p className="text-primaryGrand text-[6vw] font-bold text-center mt-16 md:text-[5vw] lg:text-[3vw]">
        FOUNDER
      </p>
      <div className="flex flex-col justify-center gap-10 my-10 md:px-10 md:flex-row md:justify-around md:flex-wrap md:my-16 lg:gap-32">
        <div className="flex flex-col gap-3">
          <div
            className="overflow-hidden w-[45vw] h-[45vw] rounded-full mx-auto 
          md:w-[17vw] md:h-[17vw] lg:w-[15vw] lg:h-[15vw]"
          >
            <Image
              src={ihwan}
              alt=""
              className="w-full h-full object-cover lg:hover:scale-110 lg:cursor-pointer lg:transition-all"
            />
          </div>
          <div className="mx-auto text-center">
            <p className="font-bold md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.2vw]">
              Ichwan Nugroho
            </p>
            <p className="md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw]">
              S1 Teknik Elektro
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="overflow-hidden w-[45vw] h-[45vw] rounded-full mx-auto 
          md:w-[17vw] md:h-[17vw] lg:w-[15vw] lg:h-[15vw]"
          >
            <Image
              src={laela}
              alt=""
              className="w-full h-full object-cover lg:hover:scale-110 lg:cursor-pointer lg:transition-all"
            />
          </div>
          <div className="mx-auto text-center">
            <p className="font-bold md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.2vw]">
              Lailatul Mukaromah
            </p>
            <p className="md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw]">
              S1 Teknik Elektro
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="overflow-hidden w-[45vw] h-[45vw] rounded-full mx-auto 
          md:w-[17vw] md:h-[17vw] lg:w-[15vw] lg:h-[15vw]"
          >
            <Image
              src={tegar}
              alt=""
              className="w-full h-full object-cover lg:hover:scale-110 lg:cursor-pointer lg:transition-all"
            />
          </div>
          <div className="mx-auto text-center">
            <p className="font-bold md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.2vw]">
              Tegar Setio
            </p>
            <p className="md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw]">
              S1 Teknik Informatika
            </p>
          </div>
        </div>
      </div>

      <p className="text-primaryGrand text-[6vw] font-bold text-center mt-20 mb-10 md:text-[5vw] lg:text-[3vw]">
        PARTNERSHIP
      </p>
      <div className="w-[45%] mx-auto mb-20 md:w-[40%] lg:w-[20%] lg:mb-32">
        <Image
          src={partner}
          alt=""
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
    </>
  )
}
