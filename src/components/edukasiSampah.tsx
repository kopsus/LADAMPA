import Image, { StaticImageData } from "next/image"

// components
import "../app/globals.css"

// assets
import S1 from "../../public/assets/S1.png"
import S2 from "../../public/assets/S2.png"
import S3 from "../../public/assets/S3.png"
import S4 from "../../public/assets/S4.png"
import S5 from "../../public/assets/S5.png"

interface ContentEdukasiSampahProps {
  img: StaticImageData
  title: string
  desc: string
  img2: StaticImageData
  title2: string
  desc2: string
  img3: StaticImageData
  title3: string
  desc3: string
  img4: StaticImageData
  title4: string
  desc4: string
  img5: StaticImageData
  title5: string
  desc5: string
}

const ContentEdukasiSampah = ({
  img,
  title,
  desc,
  img2,
  title2,
  desc2,
  img3,
  title3,
  desc3,
  img4,
  title4,
  desc4,
  img5,
  title5,
  desc5,
}: ContentEdukasiSampahProps) => {
  return (
    <div className="flex flex-col gap-5 lg:px-10">
      <div className="item-edukasi-sampah">
        <div className="img-edukasi-sampah md:order-1 mx-auto">
          <Image src={img} alt="" className="" />
        </div>
        <div className="md:order-2 flex-1 lg:text-[1.3vw]">
          <p className="title-edukasi-sampah">{title}</p>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.4vw]">
            {desc}
          </p>
        </div>
      </div>
      <div className="item-edukasi-sampah">
        <div className="img-edukasi-sampah md:order-2 mx-auto">
          <Image src={img2} alt="" className="" />
        </div>
        <div className="md:order-1 flex-1 lg:text-[1.3vw]">
          <p className="title-edukasi-sampah">{title2}</p>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.4vw]">
            {desc2}
          </p>
        </div>
      </div>
      <div className="item-edukasi-sampah">
        <div className="img-edukasi-sampah md:order-1 mx-auto">
          <Image src={img3} alt="" className="" />
        </div>
        <div className="md:order-2 flex-1 lg:text-[1.3vw]">
          <p className="title-edukasi-sampah">{title3}</p>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.4vw]">
            {desc3}
          </p>
        </div>
      </div>
      <div className="item-edukasi-sampah">
        <div className="img-edukasi-sampah md:order-2 mx-auto">
          <Image src={img4} alt="" className="" />
        </div>
        <div className="md:order-1 flex-1 lg:text-[1.3vw]">
          <p className="title-edukasi-sampah">{title4}</p>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.4vw]">
            {desc4}
          </p>
        </div>
      </div>
      <div className="item-edukasi-sampah">
        <div className="img-edukasi-sampah md:order-1 mx-auto">
          <Image src={img5} alt="" className="" />
        </div>
        <div className="md:order-2 flex-1 lg:text-[1.3vw]">
          <p className="title-edukasi-sampah">{title5}</p>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.4vw]">
            {desc5}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function EdukasiSampah() {
  return (
    <>
      <p className="title-components my-5 text-primaryGrand md:mt-16 lg:mt-20 lg:mb-10">
        Yuk, Mengenal 5 Jenis Sampah
      </p>
      <div className="px-5 pb-5 bg-blueGreen lg:px-20">
        <ContentEdukasiSampah
          img={S1}
          title="SAMPAH ORGANIK"
          desc="Sampah organik merupakan sampah yang sifatnya mudah terurai di alam (mudah busuk) seperti sisa makanan, daun-daunan, atau ranting pohon. Sampah organik umumnya diwadahi dengan tempat sampah berwarna hijau. Dengan memisahkan sampah organik dalam wadah tersendiri, maka dapat memudahkan sampah organik diproses menjadi pupuk kompos."
          img2={S2}
          title2="SAMPAH ANORGANIK"
          desc2="Sampah anorganik merupakan sampah yang sifatnya lebih sulit diurai seperti sampah plastik, kaleng, dan styrofoam. Sampah anorganik umumnya diwadahi dengan tempat sampah berwarna kuning. Dengan adanya tempat sampah khusus maka dapat mempermudah pemanfaatan sampah anorganik sebagai kerajinan daur ulang atau daur ulang di pabrik."
          img3={S3}
          title3="SAMPAH B3"
          desc3="Sampah B3 umumnya diwadahi dengan tempat sampah berwarna merah. Sampah B3 merupakan sampah yang dapat membahayakan manusia, hewan, atau lingkungan sekitar. Contoh sampah B3 yaitu sampah kaca, kemasan detergen atau pembersih lainnya, serta pembasmi serangga dan sejenisnya. Agar meminimalisir dampak yang mungkin ditimbulkan, sampah B3 perlu dikelompokkan secara khusus dalam satu wadah."
          img4={S4}
          title4="SAMPAH KERTAS"
          desc4="Sampah kertas juga merupakan jenis sampah yang dapat dipilah secara khusus dalam wadah tempat sampah berwarna biru.Pemilahan sampah kertas berguna untuk memudahkan proses daur ulang kertas. Karton, potongan kertas, pamflet, bungkus kemasan berbahan kertas, dan buku juga termasuk dalam jenis sampah kertas."
          img5={S5}
          title5="SAMPAH RESIDU"
          desc5="Sampah residu merupakan sampah sisa di luar keempat jenis sampah di atas. Tempat sampah yang diperuntukan bagi tempat sampah residu umumnya berwarna abu-abu. Contoh sampah residu yaitu seperti popok bekas, bekas pembalut, bekas permen karet, atau puntung rokok."
        />

        <p className="text-center my-5 mx-3 text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-10 lg:mx-10 xl:text-[1.4vw]">
          Setelah mengenal kelima jenis sampah di atas, semoga Sobat dapat
          mengelompokkan sampah-sampah yang hendak dibuang dengan tepat ya. Akan
          lebih baik lagi kalau Sobat dapat memilah sampah yang ada di rumah
          sesuai dengan jenis sehingga memudahkan proses daur ulang.
        </p>
      </div>
    </>
  )
}
