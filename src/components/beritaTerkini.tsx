import Image from "next/image"
import Link from "next/link"

// assests
import img1 from "../../public/assets/BT1.jpg"
import img2 from "../../public/assets/BT2.jpg"
import img3 from "../../public/assets/BT3.jpg"

export default function BeritaTerkini() {
  return (
    <>
      <p className="title-components mt-12 text-primaryGrand lg:mt-28">
        Berita Terkini
      </p>
      <div className="px-6 my-5 md:flex md:my-10 md:gap-7 lg:px-14 lg:gap-10 lg:my-20 xl:px-16">
        <div className="overflow-hidden rounded-xl h-[60vw] md:order-2 md:h-[35vw] md:flex-1 lg:h-[27vw]">
          <Link href="/berita/detail-berita">
            <Image
              src={img1}
              alt="img"
              className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 my-3 md:order-1 md:my-0 md:flex-1">
          <p className="text-primaryRed font-bold text-[4vw] md:text-[2.3vw] lg:text-[1.4vw]">
            Kemproh Temen! Sampah Berserakan di Pasar Ajibarang, Banyumas
          </p>
          <p className="text-[3.8vw] md:text-[2.1vw] lg:text-[1.3vw] line-clamp-6 lg:line-clamp-none">
            Banyumas - Pasar di Kabupaten Banyumas ini jorok banget. Sampah
            menumpuk dan berserakan di jalanan pasar, bau busuk menguar ke
            segala sudut pasar. Kemproh temen!Pasar ini adalah Pasar Ajibarang
            di Kabupaten Banyumas, Jawa Tengah. Tumpukan sampah bahkan sampai
            menutup jalanan dalam pasar.detikcom Do Your Magic mengunjungi Pasar
            Ajibarang pada Minggu (14/3) kemarin.
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
              alt="img"
              className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 my-3 md:my-0 md:flex-1">
          <p className="text-primaryRed font-bold text-[4vw] md:text-[2.3vw] lg:text-[1.4vw]">
            Sampah Alun-alun Banyumas Capai Dua Dump Truk
          </p>
          <p className="text-[3.8vw] md:text-[2.1vw] lg:text-[1.3vw] line-clamp-6 lg:line-clamp-none">
            BANYUMAS-Volume sampah di area Alun-alun Banyumas cukup tinggi.
            Setelah menjadi titik perayaan malam tahun baru 2023.Total sampah
            sampai dua dump truk, beber Ketua Pengabdian Masyarakat Kwarran
            Banyumas Sudarmanto, Minggu (1/1).Dua dump truk sampah juga
            akumulasi dari sampah yang berada di komplek Bale Adipati Mrapat
            Kecamatan Banyumas setelah pagelaran wayang kulit, jalan sekolahan
            dan sekitarnya.
          </p>
          <p className="text-[3vw] md:text-[2vw] lg:text-[1vw]">
            01 Januari 2023
          </p>
        </div>
      </div>
      <div className="px-6 mt-5 mb-20 md:flex md:mt-10 md:gap-7 lg:px-14 lg:gap-10 lg:mt-20 lg:mb-40">
        <div className="overflow-hidden rounded-xl h-[60vw] md:order-2 md:h-[35vw] md:flex-1 lg:h-[27vw]">
          <Link href="/berita/detail-berita">
            <Image
              src={img3}
              alt="img"
              className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 my-3 md:order-1 md:my-0 md:flex-1">
          <p className="text-primaryRed font-bold text-[4vw] md:text-[2.3vw] lg:text-[1.4vw]">
            Kebakaran Hanguskan Tempat Pengolahan Sampah TPS3R Banyumas, Api
            Berasal dari Tumpukan Sampah
          </p>
          <p className="text-[3.8vw] md:text-[2.1vw] lg:text-[1.3vw] line-clamp-6 lg:line-clamp-none">
            PURWOKERTO - Kebakaran melanda tempat pengelolaan sampah Reuse
            Reduce dan Recycle (TPS3R) yang dikelola oleh KSM Mulya Sejati di
            Kelurahan Teluk, Kecamatan Purwokerto Selatan, Kabupaten Banyumas,
            Minggu (16/7/2023) pukul 15.45 WIB. Bangunan gudang sampah,
            kendaraan pengangkut sampah, serta alat pemilah sampah mengalami
            kerusakan seiring insiden kebakaran itu.
          </p>
          <p className="text-[3vw] md:text-[2vw] lg:text-[1vw]">16 Juli 2023</p>
        </div>
      </div>
    </>
  )
}
