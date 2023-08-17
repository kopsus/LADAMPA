import Image from "next/image"
import Link from "next/link"

// assests
import img1 from "../../public/assets/BT1.png"
import img2 from "../../public/assets/BT2.png"
import img3 from "../../public/assets/BT3.png"

export default function BeritaTerkini() {
  return (
    <>
      <p className="title-components mt-12 text-primaryGrand lg:mt-28">
        Berita Terkini
      </p>
      <div className="px-6 my-5 md:flex md:my-10 md:gap-7 lg:px-14 lg:gap-10 lg:my-20">
        <div className="overflow-hidden rounded-xl h-[60vw] md:order-2 md:h-[35vw] md:flex-1 lg:h-[27vw]">
          <Link href="/berita/detail-berita">
            <Image
              src={img1}
              alt=""
              className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 my-3 md:order-1 md:my-0 md:flex-1">
          <p className="text-primaryRed font-bold text-[4vw] md:text-[2.6vw] lg:text-[1.4vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-[3.8vw] md:text-[2.5vw] lg:text-[1.3vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-[3vw] md:text-[2vw] lg:text-[1vw]">
            19 agustus 2022
          </p>
        </div>
      </div>
      <div className="px-6 my-5 md:flex md:my-10 md:gap-7 lg:px-14 lg:gap-10 lg:my-20">
        <div className="overflow-hidden rounded-xl h-[60vw] md:h-[35vw] md:flex-1 lg:h-[27vw]">
          <Link href="/berita/detail-berita">
            <Image
              src={img2}
              alt=""
              className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 my-3 md:my-0 md:flex-1">
          <p className="text-primaryRed font-bold text-[4vw] md:text-[2.6vw] lg:text-[1.4vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.3vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-[3vw] md:text-[2vw] lg:text-[1vw]">
            19 agustus 2022
          </p>
        </div>
      </div>
      <div className="px-6 mt-5 mb-20 md:flex md:mt-10 md:gap-7 lg:px-14 lg:gap-10 lg:mt-20 lg:mb-40">
        <div className="overflow-hidden rounded-xl h-[60vw] md:order-2 md:h-[35vw] md:flex-1 lg:h-[27vw]">
          <Link href="/berita/detail-berita">
            <Image
              src={img3}
              alt=""
              className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 my-3 md:order-1 md:my-0 md:flex-1">
          <p className="text-primaryRed font-bold text-[4vw] md:text-[2.6vw] lg:text-[1.4vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-[3.8vw] md:text-[2.5vw] lg:text-[1.3vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-[3vw] md:text-[2vw] lg:text-[1vw]">
            19 agustus 2022
          </p>
        </div>
      </div>
    </>
  )
}
