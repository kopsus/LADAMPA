import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// assets
import img1 from "../../public/assets/edukasi1.png"
import img2 from "../../public/assets/detailEdukasi.jpg"

interface itemArticles {
  desc: string
  date: string
  img: StaticImageData
}

const ItemArticles = ({ desc, date, img }: itemArticles) => {
  return (
    <div className="flex gap-5">
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-[3.5vw] md:text-[1.8vw] lg:text-[1.2vw]">{desc}</p>
        <p className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">{date}</p>
      </div>
      <div className="overflow-hidden rounded-xl flex-[0.7] h-[20vw] md:flex-1 md:h-[13vw] lg:h-[8vw] lg:flex-[0.5] lg:cursor-pointer">
        <Link href="/edukasi/detail-edukasi">
          <Image
            src={img}
            alt=""
            className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-110 lg:transition-all"
          />
        </Link>
      </div>
    </div>
  )
}

export default function Articles() {
  return (
    <>
      <div className="px-6 pt-10 lg:px-10 md:mb-20 lg:mt-12 xl:px-16">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-primaryGrand text-[5vw] text-center font-bold md:text-[3.5vw] lg:text-[2vw]">
            Artikel & Event Terbaru
          </p>
          <p className="text-[4.3vw] text-center md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.3vw]">
            Baca dan ikuti event serta program-program yang kami lakukan untuk
            bumi yang lebih baik{" "}
          </p>
        </div>
        <div className="md:flex md:gap-7 lg:gap-14">
          <div className="mt-10 mb-10 md:flex-1">
            <div className="flex flex-col gap-5 my-10 md:my-0">
              <div className="overflow-hidden rounded-xl">
                <Link href="/edukasi/detail-edukasi">
                  <Image
                    src={img2}
                    alt=""
                    className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-110 lg:transition-all"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold text-[4.3vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.3vw]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="xl:text-[1.2vw]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-auto mt-10 mb-20 max-h-[85vw] flex flex-col gap-7 pr-3 md:pr-5 border-b-4 border-slate-400 md:flex-1 md:max-h-[65vw] lg:max-h-[42vw] lg:mb-32">
            <ItemArticles
              desc="Kenali Pengertian, Fungsi dan Jenis Sampah"
              date="1 Januari 2022"
              img={img1}
            />
            <ItemArticles
              desc="Kenali Pengertian, Fungsi dan Jenis Sampah"
              date="1 Januari 2022"
              img={img1}
            />
            <ItemArticles
              desc="Kenali Pengertian, Fungsi dan Jenis Sampah"
              date="1 Januari 2022"
              img={img1}
            />
            <ItemArticles
              desc="Kenali Pengertian, Fungsi dan Jenis Sampah"
              date="1 Januari 2022"
              img={img1}
            />
            <ItemArticles
              desc="Kenali Pengertian, Fungsi dan Jenis Sampah"
              date="1 Januari 2022"
              img={img1}
            />
          </div>
        </div>
      </div>
    </>
  )
}
