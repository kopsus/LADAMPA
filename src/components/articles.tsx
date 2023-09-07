import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// assets
import img1 from "../../public/assets/detialEdukasi.svg"
import img2 from "../../public/assets/edukasi2.svg"
import img3 from "../../public/assets/edukasi3.svg"
import img4 from "../../public/assets/edukasi4.svg"
import img5 from "../../public/assets/edukasi5.svg"
import img6 from "../../public/assets/edukasi6.svg"

interface itemArticles {
  desc: string
  date: string
  img: StaticImageData
}

const ItemArticles = ({ desc, date, img }: itemArticles) => {
  return (
    <div className="flex gap-5">
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-[3.5vw] line-clamp-2 text-primaryRed md:text-[2vw] lg:text-[1.2vw] xl:text-[1.1vw]">
          {desc}
        </p>
        <p className="text-[3vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.8vw]">
          {date}
        </p>
      </div>
      <div className="overflow-hidden rounded-xl flex-[0.7] h-[20vw] md:flex-1 md:h-[10vw] lg:h-[8vw] lg:flex-[0.5] lg:cursor-pointer">
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
        <div className="md:flex md:gap-7 lg:gap-14">
          <div className="mb-10 md:flex-1 xl:flex-[1.5]">
            <p className=" text-primaryGrand text-[5vw] font-bold md:text-[3.5vw] lg:text-[2vw]">
              Artikel & Event Terbaru
            </p>
            <p className=" my-5 text-[4.3vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.3vw]">
              Baca dan ikuti event serta program-program yang kami lakukan untuk
              bumi yang lebih baik{" "}
            </p>
            <div className="flex flex-col gap-5 my-10 md:my-0 text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
              <div className="overflow-hidden rounded-xl">
                <Link href="/edukasi/detail-edukasi">
                  <Image
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-110 lg:transition-all"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold">
                  Pengelolaan Sampah di Banyumas Jadi Percontohan Nasional
                </p>
                <p className="xl:text-[1.2vw]">
                  Pengelolaan sampah mulai dari hulu, tengah, hingga hilir perlu
                  terus digencarkan untuk mengatasi masalah sampah di
                  masyarakat. Banyumas jadi contoh baik dalam pengolahan sampah.
                </p>
                <p className="xl:text-[1.2vw] line-clamp-2">
                  Bupati Banyumas Achmad Husein (tengah) menjadi narasumber
                  dalam talk show yang digelar Universitas Jenderal Soedirman
                  dengan Kementerian Lingkungan Hidup dan Kehutanan bertema
                  Menuju Zero Waste, Zero Emission Indonesia”, di Purwokerto,
                  Banyumas, Jawa Tengah.
                </p>
                <p className="text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[0.9vw]">
                  {" "}
                  Rabu 15 februari 2023
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-bold text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
              Baca Juga :
            </p>
            <div className="overflow-auto mb-20 max-h-[85vw] flex flex-col gap-7 pr-3 md:pr-5 border-b-2 border-slate-400 py-5 md:flex-1 md:max-h-[65vw] lg:max-h-[42vw] lg:mb-32 xl:border-b-4">
              <ItemArticles
                desc="Mahasiswa Unsoed Purwokerto Bantu Kelola Sampah Desa Papringan Banyumas"
                date="3 Desember 2021"
                img={img2}
              />
              <ItemArticles
                desc="Sekretariat Wapres Lirik Pengolahan Sampah di Banyumas"
                date="09 Pebruari 2023"
                img={img3}
              />
              <ItemArticles
                desc="Banyumas bangun tempat pembuangan akhir berbasis lingkungan-edukasi"
                date="27 Juli 2021"
                img={img4}
              />
              <ItemArticles
                desc="Tempat Pembuangan Akhir Sampah Di Banyumas Siap Disulap Jadi Wahana Wisata"
                date="2 Agustus 2021"
                img={img5}
              />
              <ItemArticles
                desc="Diresmikan, TPA BLE Tingkatkan Kualitas Pengelolaan Sampah di Kabupaten Banyumas"
                date="1 Januari 2022"
                img={img6}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
