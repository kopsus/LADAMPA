// assets
import img from "../../../public/assets/wrapperEdukasi.svg"

// components
import EdukasiSampah from "@/components/edukasiSampah"
import Articles from "@/components/articles"

export default function Page() {
  return (
    <div className="mt-20 z-10 md:mt-20 xl:mt-24 2xl:mt-32">
      <div
        className="relative mb-7 mx-auto w-[90%] h-[45vw] md:mt-24 lg:h-[35vw] rounded-xl lg:w-[90%]"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full absolute top-0 bg-black opacity-20 rounded-xl"></div>
        <div className="flex flex-col h-full justify-center absolute gap-3 text-white px-7 md:px-16 lg:justify-start xl:top-24 lg:w-[60%]">
          <p className="text-[5vw] md:text-[4.5vw] lg:text-[2.8vw] font-bold">
            Apa yang anda ketahuin tentang jenis jenis sampah?
          </p>
          <p className="text-[3vw] md:text-[2.5vw] lg:text-[1.7vw] xl:text-[1.3vw]">
            Masih banyak orang yang belum mengetahuin mengenai jenjs-jenis
            Sampah. Sampah sendiri di golongkan kedalam beberapa jenis
            berdasarkan sifat.
          </p>
        </div>
      </div>

      {/* EDUKASI SAMPAH */}
      <EdukasiSampah />
      <Articles />
    </div>
  )
}
