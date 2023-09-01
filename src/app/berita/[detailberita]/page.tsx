import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// assets
import img from "../../../../public/assets/berita1.jpg"
import berita2 from "../../../../public/assets/berita2.jpg"
import berita3 from "../../../../public/assets/berita3.jpg"
import berita4 from "../../../../public/assets/berita4.jpg"
import berita5 from "../../../../public/assets/berita terkini 2.jpg"
import berita6 from "../../../../public/assets/berita terkini 3.jpg"
import logo from "../../../../public/assets/logo.png"

interface OtherBeritaProps {
  desc: string
  date: string
  img: StaticImageData
}

const OtherBerita = ({ desc, date, img }: OtherBeritaProps) => {
  return (
    <div className="flex gap-5">
      <div className="overflow-hidden rounded-xl flex-[0.7] h-[20vw] md:flex-1 md:h-[10vw] lg:h-[8vw] lg:flex-[0.5] lg:cursor-pointer">
        <Link href="/edukasi/detail-berita">
          <Image
            src={img}
            alt=""
            className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-110 lg:transition-all"
          />
        </Link>
      </div>
      <div className="flex-1">
        <p className="mb-2 text-[3.5vw] text-primaryRed md:text-[1.3vw] lg:text-[1.2vw] xl:text-[1.1vw]">
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
          <div className="flex flex-col gap-3 mt-5">
            <p className="">
              PEMERINTAH Kabupaten Banyumas, Jawa Tengah, mengalokasikan dana
              Rp50,3 miliar untuk membangun tempat pembuangan akhir berbasis
              lingkungan dan edukasi (TPA BLE) di Desa Wlahar Wetan, Kecamatan
              Kalibagor. TPA BLE menempati areal 3,5 hektare (ha). Alokasi
              anggaran senilai Rp50,3 miliar tersebut rinciannya ialah Rp44
              miliar bantuan dari APBN dan Rp6,3 miliar lainnya dari APBD
              kabupaten sebagai pendamping. Pembangunan ini dalam rangka
              mengatasi permasalahan sampah. TPA BLE memiliki konsep yang
              berbeda dengan pengolahan sampah yang berfokus pada 3R, yakni
              reduce, reuse, recycle. TPA BLE lebih dari itu karena akan
              dilengkapi dengan kolam renang, pabrik plastik, kolam, dan
              lainnya, jelas Bupati Banyumas Achmad Husein, kemarin. Bupati
              mengatakan bahwa pembangunan TPA BLE direncanakan akan rampung
              pada akhir 2021. Mudah-mudahan akhir tahun ini sudah bisa
              beroperasi sehingga permasalahan sampah di Banyumas Berkurang
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
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:flex-1">
          <p className="font-bold">Baca Juga :</p>
          <div className="overflow-auto mt-5 mb-20 max-h-[85vw] flex flex-col gap-7 pr-3 pb-3 border-b-4 border-slate-400 md:flex-1 md:max-h-[65vw] lg:max-h-[42vw] lg:mb-32">
            <OtherBerita
              desc="Banyumas Jadi Contoh Pengolahan Sampah, Sistemnya Luar Biasa!"
              date="20 agustus 2023"
              img={berita2}
            />
            <OtherBerita
              desc="Edukasi dan Gerakan Kolektif Pengelolaan Sampah Perlu Diintensifkan"
              date="19 agustus 2023"
              img={berita3}
            />
            <OtherBerita
              desc="IT Telkom Purwokerto dukung Pemkab Banyumas Tangani Permasalahan Sampah"
              date="30 Januari 2023"
              img={berita4}
            />
            <OtherBerita
              desc="Sampah Alun-alun Banyumas Capai Dua Dump Truk"
              date="09 Juni 2023"
              img={berita5}
            />
            <OtherBerita
              desc="Kebakaran Hanguskan Tempat Pengolahan Sampah TPS3R Banyumas, Api Berasal dari Tumpukan Sampah"
              date="16 Juli 2023"
              img={berita6}
            />
          </div>
          <div className="hidden md:flex md:mx-auto md:my-20 md:w-[60%]">
            <Image src={logo} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
