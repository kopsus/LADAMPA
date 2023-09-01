import Image from "next/image"

// assets
import img from "../../../public/assets/aboutladampa.png"
import Goals from "@/components/goals"
import Founder from "@/components/founder"

export default function Page() {
  return (
    <>
      <div className="mt-20 z-10 lg:mt-24 2xl:mt-32">
        <div className="my-5 px-5 md:px-8 lg:my-10 lg:px-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-around lg:items-center">
            <div className="text-primaryGrand  font-bold lg:flex-1 lg:text-center lg:flex flex-col gap-32">
              <p className="text-[5.5vw] md:text-[4.5vw] lg:text-[3.5vw]">
                Apa itu LADAMPA?
              </p>
              <p className="hidden text-[2vw] mx-auto lg:flex">
                DARI KITA UNTUK KITA
              </p>
            </div>
            <div className="overflow-hidden rounded-lg lg:flex-[1.5]">
              <Image
                src={img}
                alt="ladampa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 my-5 lg:my-20">
            <p className="text-primaryGrand text-[5vw] text-center font-bold md:text-[3.5vw] lg:hidden">
              DARI KITA UNTUK KITA
            </p>
            <p className="text-primaryRed text-center text-[4.7vw] font-bold md:text-[3.3vw] lg:text-[2vw]">
              Mari Berkenalan dengan{" "}
              <span className="underline">LADAMPA!!</span>
            </p>
            <p className="indent-8 text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
              Halo, perkenalkan aku ladampa! Ladampa adalah aplikasi inovatif
              yang berfokus pada pengelolaan sampah. Dengan ladampa, kita dapat
              memperkuat gerakan kebersihan dan kelestarian lingkungan. Aplikasi
              ini dirancang untuk memudahkan kita dalam mengelola sampah dengan
              cara yang baik dan benar, di ladampa sendiri tersedia berbagai
              fitur salah satu fiturnya yaitu “edukasi” yang dimana fitur ini,
              pengguna bisa mengetahui jenis sampah dan juga cara memilah sampah
              yang baik dan benar. Mari kita bangun kesadaran akan pentingnya
              menjaga lingkungan dan menjadikan dunia ini tempat yang lebih
              baik. Bersama ladampa untuk masa depan yang lebih bersih dan
              hijau!
            </p>
            <p className="indent-8 text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
              Oleh karena itu, untuk mencapai visi dalam good governance maka
              perlu untuk mengintegrasikan sistem pengelolaan pengaduan
              pelayanan publik dalam satu pintu. Tujuannya, masyarakat memiliki
              satu saluran pengaduan secara Nasional.
            </p>
          </div>
        </div>

        <Goals />
        <Founder />
      </div>
    </>
  )
}
