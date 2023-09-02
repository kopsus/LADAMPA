import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// assets
import img from "../../../../public/assets/detialEdukasi.svg"
import edukasi1 from "../../../../public/assets/edukasi2.svg"
import edukasi2 from "../../../../public/assets/edukasi3.svg"
import edukasi3 from "../../../../public/assets/edukasi4.svg"
import edukasi4 from "../../../../public/assets/edukasi5.svg"

import logo from "../../../../public/assets/logo.png"

interface OtherEdukasiProps {
  desc: string
  date: string
  img: StaticImageData
}

const OtherEdukasi = ({ desc, date, img }: OtherEdukasiProps) => {
  return (
    <div className="flex gap-5">
      <div className="overflow-hidden rounded-xl flex-[0.7] h-[20vw] md:flex-1 md:h-[10vw] lg:h-[8vw] lg:flex-[0.5] lg:cursor-pointer">
        <Link href="/edukasi/detail-edukasi">
          <Image
            src={img}
            alt=""
            className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-110 lg:transition-all"
          />
        </Link>
      </div>
      <div className="flex-1">
        <p className="line-clamp-2 text-[3.5vw] text-primaryRed md:text-[1.7vw] lg:text-[1.1vw]">
          {desc}
        </p>
        <p className="text-[3vw] md:text-[1vw] lg:text-[1vw] xl:text-[0.9vw]">
          {date}
        </p>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="p-5 mt-12 z-10 md:mt-16 lg:px-10 xl:mt-20">
      <div className="md:flex md:gap-7 lg:gap-10">
        <div className="md:flex-[1.5]">
          <p className="text-textBlue text-start title-components">
            Banyumas Bangun Tempat Pengolahan Sampah Senilai Rp50,3 Miliar
          </p>
          <div className="my-5 text-[3.5vw] md:text-[2vw] lg:text-[1vw]">
            <p className="text-slate-400">Minggu, 20 Juli 2023 02:30 WIB</p>
          </div>
          <div className="overflow-hidden w-full h-[60vw] rounded-xl md:h-[40vw] lg:h-[33vw]">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-3 mt-5 text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
            <p className="">
              PURWOKERTO,Upaya Bupati Banyumas Achmad Husein bersama jajaran
              pemerintahan dan masyarakat dalam pengelolaan sampah menjadi
              contoh baik di tingkat nasional. Kendati berangkat dari
              keterpaksaan akibat banyaknya penolakan pembangunan tempat
              pembuangan akhir sampah, Husein menerapkan pengelolaan sampah
              mulai dari hulu, tengah, hingga hilir. ”Saya belajar sampah karena
              keterpaksaan karena ada TPA yang dikelola pemda itu ditutup warga
              sehingga sampah ada di mana-mana, tidak bisa masuk ke TPA,” kata
              Husein dalam talk show yang digelar Universitas Jenderal Soedirman
              dengan Kementerian Lingkungan Hidup dan Kehutanan bertema ”Menuju
              Zero Waste, Zero Emission Indonesia”, di Purwokerto, Banyumas,
              Jawa Tengah, Rabu (15/2/2023).
            </p>
            <p className="text-black font-bold">Baca Juga :</p>
            <div className="border-l-textBlue border-l-4 pl-3 text-textBlue font-semibold">
              <Link href="/berita/detail-berita">
                <p>
                  Penyelidikan Kasus Penumpukan Sampah yang Terjadi Dibeberapa
                  Daerah Khususnya Provinsi Jawa Tengah.
                </p>
              </Link>
            </div>
            <p>
              Bagi Husein, filosofi sampah semula adalah berasal dari
              barang-barang yang bermanfaat. Oleh karena itu, meskipun sudah
              menjadi barang yang bau dan menjijikkan, sebisa mungkin sampah itu
              dikembalikan lagi menjadi barang yang bermanfaat. ”Asal mula
              sampah sebetulnya barang-barang yang berguna. Plastik berguna,
              makanan juga mahal harganya. Kalau begitu, harus dikembalikan
              kepada awalnya,” ujarnya.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:flex-1">
          <p className="font-bold">Baca Juga :</p>
          <div className="overflow-auto mt-5 mb-20 max-h-[85vw] flex flex-col gap-7 pr-3 pb-3 border-b-2 border-slate-400 md:flex-1 md:max-h-[65vw] lg:max-h-[42vw] lg:mb-32 xl:border-b-4">
            <OtherEdukasi
              desc="Banyumas Jadi Contoh Pengolahan Sampah, Sistemnya Luar Biasa!"
              date="20 agustus 2023"
              img={edukasi1}
            />
            <OtherEdukasi
              desc="Edukasi dan Gerakan Kolektif Pengelolaan Sampah Perlu Diintensifkan"
              date="19 agustus 2023"
              img={edukasi2}
            />
            <OtherEdukasi
              desc="IT Telkom Purwokerto dukung Pemkab Banyumas Tangani Permasalahan Sampah"
              date="30 Januari 2023"
              img={edukasi3}
            />
            <OtherEdukasi
              desc="Sampah Alun-alun Banyumas Capai Dua Dump Truk"
              date="09 Juni 2023"
              img={edukasi4}
            />
            <OtherEdukasi
              desc="Kebakaran Hanguskan Tempat Pengolahan Sampah TPS3R Banyumas, Api Berasal dari Tumpukan Sampah"
              date="16 Juli 2023"
              img={img}
            />
          </div>
          <div className="hidden md:flex md:mx-auto md:my-20 md:w-[60%]">
            <Image src={logo} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}
