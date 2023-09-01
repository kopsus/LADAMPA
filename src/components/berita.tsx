"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// assets
// import imgBerita from "../../public/assets/berita.png"
import berita1 from "../../public/assets/berita1.jpg"
import berita2 from "../../public/assets/berita2.jpg"
import berita3 from "../../public/assets/berita3.jpg"
import berita4 from "../../public/assets/berita4.jpg"
import berita5 from "../../public/assets/berita5.jpg"

// library swiper for carousel
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"

interface ContentCarouselBeritaProps {
  Img: StaticImageData
  Title: string
  Date: string
}

const ContentCarouselBerita = ({
  Img,
  Title,
  Date,
}: ContentCarouselBeritaProps) => {
  return (
    <>
      <div className="overflow-hidden h-[40vw] rounded-xl md:h-[18vw] lg:h-[11vw]">
        <Link href="/berita/detail-berita">
          <Image
            src={Img}
            alt=""
            className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2 mt-2 lg:gap-1">
        <p className="text-primaryRed font-semibold text-[3.8vw] md:text-[1.7vw] lg:text-[1vw]">
          {Title}
        </p>
        <p className="text-[3vw] md:text-[1.3vw] lg:text-[0.8vw]">{Date}</p>
      </div>
    </>
  )
}

const CarouselBerita = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita2}
            Title="Banyumas Jadi Contoh Pengolahan Sampah, Sistemnya Luar Biasa!"
            Date="Rabu, 3 Januari 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita3}
            Title="Edukasi dan Gerakan Kolektif Pengelolaan Sampah Perlu Diintensifkan"
            Date="Selasa ,19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita4}
            Title="IT Telkom Purwokerto dukung Pemkab Banyumas Tangani Permasalahan Sampah"
            Date="Jumat, 30 Juni 2023"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita5}
            Title="Segera Beroperasi, Pengelolaan Sampah di 6 TPST Banyumas"
            Date="Kamis, 09 Juni 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita2}
            Title="Banyumas Jadi Contoh Pengolahan Sampah, Sistemnya Luar Biasa!"
            Date="Rabu, 3 Januari 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita3}
            Title="Edukasi dan Gerakan Kolektif Pengelolaan Sampah Perlu Diintensifkan"
            Date="Selasa ,19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita4}
            Title="IT Telkom Purwokerto dukung Pemkab Banyumas Tangani Permasalahan Sampah"
            Date="Jumat, 30 Juni 2023"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={berita5}
            Title="Segera Beroperasi, Pengelolaan Sampah di 6 TPST Banyumas"
            Date="Kamis, 09 Juni 2022"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default function Berita() {
  return (
    <>
      <p className="text-primaryGrand mb-5 title-components lg:mt-20 lg:mb-10">
        Berita
      </p>
      <div className="bg-blueGreen p-5 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row gap-5 mt-3 mb-16">
          <div className="md:flex-1 overflow-hidden h-[55vw] rounded-xl md:h-[40vw] lg:h-[30vw] xl:h-[25vw]">
            <Link href="/berita/detail-berita">
              <Image
                src={berita1}
                alt=""
                className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-1 gap-3 md:max-h-[38vw] overflow-hidden">
            <p className="text-[4vw] font-bold text-primaryRed md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.4vw]">
              Banyumas Bangun Tempat Pengolahan Sampah Senilai Rp50,3 Miliar
            </p>
            <p className="text-[3.8vw] md:text-[2.1vw] lg:text-[1.3vw] xl:text-[1.2vw] line-clamp-6 lg:line-clamp-none">
              PEMERINTAH Kabupaten Banyumas, Jawa Tengah, mengalokasikan dana
              Rp50,3 miliar untuk membangun tempat pembuangan akhir berbasis
              lingkungan dan edukasi (TPA BLE) di Desa Wlahar Wetan, Kecamatan
              Kalibagor. TPA BLE menempati areal 3,5 hektare (ha). Alokasi
              anggaran senilai Rp50,3 miliar tersebut rinciannya ialah Rp44
              miliar bantuan dari APBN dan Rp6,3 miliar lainnya dari APBD
              kabupaten sebagai pendamping.
            </p>
            <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.1vw] xl:text-[0.9vw]">
              Senin, 02 Agu 2021
            </p>
          </div>
        </div>
        <CarouselBerita />
      </div>
    </>
  )
}
