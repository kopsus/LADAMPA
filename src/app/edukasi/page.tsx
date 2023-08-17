import Image from "next/image"

// assets
import img from "../../../public/assets/wrapperEdukasi.png"

// components
import EdukasiSampah from "@/components/edukasiSampah"
import Articles from "@/components/articles"

export default function Page() {
  return (
    <div className="mt-20 z-10 md:mt-20 xl:mt-24 2xl:mt-32">
      <div className="overflow-hidden my-7 mx-auto w-[90%] h-[45vw] rounded-xl lg:h-[35vw] lg:w-[90%]">
        <Image src={img} alt="" className="w-full h-full object-cover" />
      </div>

      {/* EDUKASI SAMPAH */}
      <EdukasiSampah />
      <Articles />
    </div>
  )
}
