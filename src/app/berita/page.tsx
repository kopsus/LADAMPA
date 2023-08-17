// components
import Berita from "@/components/berita"
import BeritaTerkini from "@/components/beritaTerkini"

// assets
import img from "../../../public/assets/wrapperBerita.png"

export default function Page() {
  return (
    <div className="z-10 mt-20 2xl:mt-32">
      <div
        className="mb-7 mx-auto w-[90%] h-[45vw] md:mt-24 lg:h-[35vw] rounded-xl lg:w-[90%]"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col h-full justify-center gap-3 text-white px-7 md:px-16 lg:justify-start lg:py-14 lg:w-[60%]">
          <p className="text-[5vw] md:text-[4.5vw] lg:text-[2.8vw] font-bold">
            Testing your code doesnt have to be painful.
          </p>
          <p className="text-[3vw] md:text-[2.5vw] lg:text-[1.7vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <Berita />
      <BeritaTerkini />
    </div>
  )
}
