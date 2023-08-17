import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// assets
import img from "../../../../public/assets/BT2.png"
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
        <p className="text-[3.5vw] text-primaryRed md:text-[1.7vw] lg:text-[1.2vw]">
          {desc}
        </p>
        <p className="text-[3vw] md:text-[1.4vw] lg:text-[1vw]">{date}</p>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="mt-12 z-10 md:mt-16">
      <div className="p-5 lg:px-10">
        <div className="">
          <p className="text-textBlue text-start title-components">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            earum dicta odio consectetur omnis optio.
          </p>

          <div className="my-5 text-[3.5vw] md:text-[2vw] lg:text-[1vw]">
            <p>
              Tegar Setio - <span className="text-primaryRed">Ladampa</span>
            </p>
            <p className="text-slate-400">Minggu, 20 Juli 2023 02:30 WIB</p>
          </div>
        </div>

        <div className="md:flex md:gap-7 lg:gap-10">
          <div className="flex flex-col gap-5 md:flex-[1.5]">
            <div className="overflow-hidden w-full h-[60vw] rounded-xl md:h-[40vw] lg:h-[33vw]">
              <Image src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="">
                <span className="font-bold">Jakarta</span> - Penyelidikan kasus
                tabrak pacar sendiri yang dilakukan pria AMP naik ke tahap
                penyidikan. Polisi mengatakan sejumlah saksi telah diperiksa di
                tahap penyidikan. Sudah naik ke proses penyidikan, kata Wakil
                Kasat Reskrim Polres Metro Jakarta Selatan (Jaksel) Kompol
                Henrikus Yossi kepada
              </p>
              <p>
                <span className="font-bold">Ladampa</span> di Polres Metro
                Jaksel, Selasa (4/7/2023).Hendrikus mengatakan di tahap
                penyidikan ini pihaknya telah memeriksa sejumlah saksi.
                Pemanggilan para saksi semuanya di tingkat penyidikan, jelas
                Henrikus.Sebelumnya, polisi mengatakan kasus ini berawal dari
                korban perempuan berinisial DAW dan teman-temannya pergi ke kafe
                di Kemang, Jaksel pada 1 Juni 2023. Pelaku yang merupakan pacar
                DAW, berinisial AMP,
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:flex-1">
            <p className="font-bold">Baca Juga :</p>
            <div className="overflow-auto mt-5 mb-20 max-h-[85vw] flex flex-col gap-7 pr-3 pb-3 border-b-4 border-slate-400 md:flex-1 md:max-h-[65vw] lg:max-h-[42vw] lg:mb-32">
              <OtherBerita
                desc="Penumpukan Sampah di Kabupaten Banyumas"
                date="1 Januari 2022"
                img={img}
              />
              <OtherBerita
                desc="Penumpukan Sampah di Kabupaten Banyumas"
                date="1 Januari 2022"
                img={img}
              />
              <OtherBerita
                desc="Penumpukan Sampah di Kabupaten Banyumas"
                date="1 Januari 2022"
                img={img}
              />
              <OtherBerita
                desc="Penumpukan Sampah di Kabupaten Banyumas"
                date="1 Januari 2022"
                img={img}
              />
              <OtherBerita
                desc="Penumpukan Sampah di Kabupaten Banyumas"
                date="1 Januari 2022"
                img={img}
              />
            </div>
            <div className="hidden md:flex md:mx-auto md:my-20 md:w-[60%]">
              <Image src={logo} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
