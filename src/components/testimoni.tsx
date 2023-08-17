import Image, { StaticImageData } from "next/image"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"

// import assets
import ihwan from "../../public/assets/ihwan.png"
import laela from "../../public/assets/laela.jpg"
import tegar from "../../public/assets/tegar.png"

interface CarouselProps {
  img: StaticImageData
  name: string
  title: string
  desc: string
}

const Carousel = ({ img, name, title, desc }: CarouselProps) => {
  return (
    <>
      <div className="flex items-center gap-5 border-b-2 border-slate-400 pb-3">
        <div className="overflow-hidden w-[20vw] h-[20vw] rounded-full md:w-[11vw] md:h-[11vw] lg:w-[6vw] lg:h-[6vw]">
          <Image src={img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[3.8vw] md:text-[2.3vw] lg:text-[1.2vw] xl:text-[1.1vw]">
            {name}
          </p>
          <p className="text-[3.3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[0.9vw]">
            {title}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-[3.5vw] md:text-[2.1vw] lg:text-[1.1vw] xl:text-[1.1vw]">
          {desc}
        </p>
      </div>
    </>
  )
}

export default function Testimoni() {
  return (
    <>
      <div className="px-5 lg:px-0 my-10 md:my-20 pb-10 2xl:px=16">
        <p className="title-components text-primaryGrand">
          Testimoni Teman <span className="underline">Ladampa</span>
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="w-full my-10 lg:w-[95%] lg:mx-auto lg:my-20"
        >
          <SwiperSlide className="bg-gradient-to-r from-gray-300 to-slate-200 shadow-lg rounded-xl py-3 px-5 my-5">
            <Carousel
              img={ihwan}
              name="Ichwan Nugroho"
              title="Presiden Ukraina"
              desc="Sangat Memuaskan untuk sebuah forum pengaduan"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-gray-300 to-slate-200 shadow-lg rounded-xl py-3 px-5 my-5">
            <Carousel
              img={laela}
              name="Lailatul Mukaromah"
              title="Presiden Arab"
              desc="Sangat Memuaskan untuk sebuah forum pengaduan"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-gray-300 to-slate-200 shadow-lg rounded-xl py-3 px-5 my-5">
            <Carousel
              img={tegar}
              name="Tegar Setio"
              title="Presiden Korea Utara"
              desc="Sangat Memuaskan untuk sebuah forum pengaduan"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-gray-300 to-slate-200 shadow-lg rounded-xl py-3 px-5 my-5">
            <Carousel
              img={ihwan}
              name="Ichwan Nugroho"
              title="Presiden Ukraina"
              desc="Sangat Memuaskan untuk sebuah forum pengaduan"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-gray-300 to-slate-200 shadow-lg rounded-xl py-3 px-5 my-5">
            <Carousel
              img={laela}
              name="Lailatul Mukaromah"
              title="Presiden Arab"
              desc="Sangat Memuaskan untuk sebuah forum pengaduan"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-gray-300 to-slate-200 shadow-lg rounded-xl py-3 px-5 my-5">
            <Carousel
              img={tegar}
              name="Tegar Setio"
              title="Presiden Korea Utara"
              desc="Sangat Memuaskan untuk sebuah forum pengaduan"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
