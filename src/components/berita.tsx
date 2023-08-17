"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// assets
import imgBerita from "../../public/assets/berita.png"

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
  Desc: string
  Date: string
}

const ContentCarouselBerita = ({
  Img,
  Title,
  Desc,
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

      <div className="flex flex-col gap-2 text-[4vw] md:text-[2vw] my-2 lg:my-2 lg:gap-1">
        <p className="text-primaryRed font-semibold md:text-[2vw] lg:text-[1vw]">
          {Title}
        </p>
        <p className="text-[3.8vw] md:text-[2vw] lg:text-[1vw]">{Desc}</p>
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
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentCarouselBerita
            Img={imgBerita}
            Title="Sampah Merajalela Menghantui Dunia"
            Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            Date="19 agustus 2022"
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
      <div className="bg-blueGreen p-5 lg:px-12">
        <p className="lg:hidden text-primaryRed text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] md:w-[60%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-7 mb-16">
          <div className="md:flex-1 overflow-hidden h-[55vw] rounded-xl md:h-[40vw] lg:h-[30vw] xl:h-[25vw]">
            <Link href="/berita/detail-berita">
              <Image
                src={imgBerita}
                alt=""
                className="w-full h-full object-cover lg:cursor-pointer lg:hover:scale-105 lg:transition-all"
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-1 gap-3 text-[3.8vw] md:text-[2.5vw] lg:text-[1.3vw]">
            <p className="hidden font-bold lg:block text-primaryRed lg:text-[1.5vw] lg:mb-5 xl:text-[1.3vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="font-bold lg:text-[1.5vw] xl:text-[1.3vw]">
              Lorem Ipsum is simply
            </p>
            <p className="text-[3.8vw] md:text-[2.5vw] lg:text-[1.3vw] xl:text-[1.2vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.1vw] xl:text-[0.9vw]">
              15 Agustus 2021
            </p>
          </div>
        </div>
        <CarouselBerita />
      </div>
    </>
  )
}
