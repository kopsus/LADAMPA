// components
import Berita from "@/components/berita"
import BeritaTerkini from "@/components/beritaTerkini"

// assets
import img from "../../../public/assets/wrapperBerita.svg"

export default function Page() {
  return (
    <div className="z-10 mt-20 2xl:mt-32">
      <div
        className="relative mb-7 mx-auto w-[90%] h-[55vw] md:mt-24 md:h-[50vw] lg:h-[35vw] rounded-xl lg:w-[90%]"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full absolute top-0 bg-black opacity-20 rounded-xl"></div>
        <div className="flex flex-col h-full justify-center absolute gap-3 text-white px-7 md:px-16 lg:justify-start xl:top-24 lg:w-[60%]">
          <p className="text-[5vw] md:text-[4.5vw] lg:text-[2.8vw] font-bold">
            Penimbunan sampah yang mengkhawatirkan
          </p>
          <p className="text-[3vw] md:text-[2.5vw] lg:text-[1.7vw] xl:text-[1.3vw]">
            sebanyak 31,13 juta ton sampah tertimbun di tahun 2021 dan sebanyak
            19.45 juta ton sampah tertimbun di tahun 2022
          </p>
        </div>
      </div>
      <Berita />
      <BeritaTerkini />
    </div>
  )
}
