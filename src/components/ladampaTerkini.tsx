import Image from "next/image"

import posterLadampaTerkini from "../../public/assets/posterLadampaTerkini.png"
import posterParentBerita from "../../public/assets/berita.png"
import Link from "next/link"

export default function LadampaTerkini() {
  const borderStyle = {
    borderBottom: "2px solid #D9D9D9",
    paddingBottom: "10vw",
  }

  return (
    <>
      <p className="text-primaryGrand title-components mt-12">
        <span className="underline">LADAMPA</span> Terkini
      </p>
      <div className="px-5 py-5 mt-5 bg-blueGreen md:px-10 lg:px-16 lg:py-1 2xl:px-14">
        <div className="lg:my-10">
          {/* deskripsi */}
          <div className="mb-7 md:my-5 lg:my-0 flex flex-col gap-3 order-1">
            <p className="text-primaryRed text-[3.9vw] md:text-[2.4vw] lg:text-[1.4vw] font-bold">
              BANYUMAS BERSIH, BANYUMAS SEHAT!
            </p>
            <div className="text-[3.8vw] md:text-[2.1vw] lg:text-[1.3vw] flex flex-col gap-3">
              <p>
                Seiring dengan perkembangan zaman dan gaya hidup modern,
                peningkatan sampah telah menjadi isu serius yang mengancam
                keberlanjutan lingkungan kita. Tumpukan sampah yang terus
                bertambah ini tidak hanya menciptakan dampak negatif terhadap
                ekosistem alam, tetapi juga mengancam kesehatan masyarakat dan
                kualitas hidup kita.
              </p>
              <p>
                Peningkatan sampah, khususnya plastik, telah menjadi masalah
                global. Jutaan ton plastik yang dibuang setiap tahunnya
                mencemari lautan, merusak kehidupan laut, dan menciptakan
                &ldquo;efek rumah kaca&rdquo; yang mengerikan di beberapa
                wilayah. Selain itu, limbah plastik juga terurai menjadi
                partikel kecil, yang akhirnya berakhir dalam rantai makanan
                manusia.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:gap-7 md:border-t-2 md:border-slate-400 md:my-10 md:pt-10">
          <div className="border-t-2 border-slate-400 pt-5 md:border-none lg:flex lg:gap-3">
            <div className="w-full h-[40vw] overflow-hidden rounded-xl md:h-[25vw] lg:h-[12vw] lg:cursor-pointer">
              <Link href="/edukasi/detail-edukasi">
                <Image
                  src={posterParentBerita}
                  alt=""
                  className="w-full h-full object-cover lg:hover:scale-110 lg:transition-all"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2 my-3 lg:my-0">
              <p className="text-primaryRed font-bold lg:text-[1.3vw]">
                LADAMPA Edukasi
              </p>
              <p className="text-[3.5vw] font-bold md:text-[1.8vw] lg:text-[1.1vw] xl:text-[0.9vw]">
                Banjir yang Dusebabkan oleh Penumpukan Sampah pada Area Tanggul
                Purwokerto Timur
              </p>
              <p className="text-[2.7vw] md:text-[1.5vw] lg:text-[0.9vw] xl:text-[0.8vw]">
                17 Juli 2023
              </p>
              <Link
                href="/edukasi"
                className="text-[3.5vw] text-primaryBlue font-bold text-end md:text-[2vw] lg:text-[1.1vw]"
              >
                Edukasi lainnya →
              </Link>
            </div>
          </div>
          <div className="border-t-2 border-slate-400 pt-5 md:border-none lg:flex lg:gap-3">
            <div className="w-full h-[40vw] overflow-hidden rounded-xl md:h-[25vw] lg:h-[12vw] lg:cursor-pointer">
              <Link href="/berita/detail-berita">
                <Image
                  src={posterParentBerita}
                  alt=""
                  className="w-full h-full object-cover lg:hover:scale-110 lg:transition-all"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2 my-3 lg:my-0">
              <p className="text-primaryRed font-bold lg:text-[1.3vw]">
                LADAMPA Berita
              </p>
              <p className="text-[3.5vw] font-bold md:text-[1.8vw] lg:text-[1.1vw] xl:text-[0.9vw]">
                Banjir yang Dusebabkan oleh Penumpukan Sampah pada Area Tanggul
                Purwokerto Timur
              </p>
              <p className="text-[2.7vw] md:text-[1.5vw] lg:text-[0.9vw] xl:text-[0.8vw]">
                17 Juli 2023
              </p>
              <Link
                href="/berita"
                className="text-[3.5vw] text-primaryBlue font-bold text-end md:text-[2vw] lg:text-[1.1vw]"
              >
                Berita lainnya →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-5 text-center border-b-2 border-slate-400 pb-10">
        <p className="text-[2.7vw] md:text-[1.8vw] lg:text-[1.1vw] xl:text-[0.9vw] font-semibold mb-4">
          *Info pengaduan penumpukan sampah Banyumas dan Sekitarnya
        </p>
        <Link href="/pengaduan">
          <button className="px-3 py-1 rounded-md bg-primaryBlue text-[2.5vw] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[0.9vw] text-white hover:bg-darkBlue">
            LANJUT KE PENGADUAN
          </button>
        </Link>
      </div>
    </>
  )
}
