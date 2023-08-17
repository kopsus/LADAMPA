import Image from "next/image"

// components
import "../../app/globals.css"

// assets
import img from "../../../public/assets/iconForm.png"

export default function Page() {
  const tanggal = []
  const bulan = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ]
  const tahun = []

  for (var i = 1; i <= 31; i++) {
    tanggal.push(i)
  }

  for (var i = 2000; i <= 2023; i++) {
    tahun.push(i)
  }

  return (
    <div className="mt-20 md:mt-24 z-10 2xl:mt-32">
      <div className="lg:flex lg:gap-10 lg:px-14 lg:my-10 lg:mb-20 lg:justify-end">
        <div className="px-6 flex flex-col gap-3 text-center md:px-10 lg:flex-1 lg:order-2">
          <div className="text-primaryGrand text-[6vw] font-bold md:text-[4.3vw] lg:text-[2.7vw] xl:text-[2.5vw] 2xl:text-[2vw]">
            <p>Bersama Lawan Sampah</p>
            <p>Suara Kita, Aksi Nyata!</p>
          </div>
          <div className="hidden lg:flex lg:w-[80%] mx-auto lg:mt-14 xl:w-[70%]">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="md:text-[2.7vw] lg:hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="flx flex-col border-2 border-primaryGrand w-[90%] mx-auto mt-5 mb-20 p-5 rounded-xl shadow-md md:w-[80%] md:p-7 lg:flex-1 lg:my-0 lg:order-1">
          <div className="border-b-2 border-slate-400 pb-3">
            <p className="text-[5vw] font-bold md:text-[3.3vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.3vw]">
              MENDAFTAR
            </p>
            <p className="text-[3.3vw] md:text-[2.5vw] lg:text-[1.2vw] xl:text-[1.1vw] 2xl:text-[1vw]">
              Pengguna Baru, Silahkan mendaftar untuk mengakses forum LADAMPA
            </p>
          </div>
          <form className="flex flex-col gap-5 my-5 md:gap-7 lg:gap-5">
            <div className="">
              <input type="text" placeholder="NIK" className="input-sign-up" />
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Nama Depan"
                className="input-sign-up"
              />
              <input
                type="text"
                placeholder="Nama Belakang"
                className="input-sign-up"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email atau Nomor Telepone"
                className="input-sign-up"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Nama Pengguna"
                className="input-sign-up"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Kata Sandi"
                className="input-sign-up"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Ulangi Kata Sandi"
                className="input-sign-up"
              />
            </div>
            <div className="flex items-center justify-between text-[3.5vw] md:text-[2.7vw] md:justify-start md:gap-7 lg:text-[1.3vw] xl:text-[1.1vw] 2xl:text-[1vw]">
              <p>Jenis Kelamin :</p>
              <div className="flex items-center gap-3 mx-auto md:mx-0">
                <div className="flex items-center gap-1 md:gap-3">
                  <label>Laki-laki</label>
                  <input type="radio" name="gender" value="Laki - laki" />
                </div>
                <div className="flex items-center gap-1 md:gap-3">
                  <label>Perempuan</label>
                  <input type="radio" name="gender" value="Perempuan" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-between text-[3.5vw] md:text-[2.7vw] md:justify-start md:gap-7 lg:text-[1.3vw] xl:text-[1.1vw] 2xl:text-[1vw]">
              <label className="flex 1 md:flex-none">Tanggal Lahir :</label>
              <div className="flex gap-3 flex-1 mx-auto md:flex-none md:gap-7 md:mx-0 lg:gap-3">
                <select className="input-date flex-[0.5]">
                  {tanggal.map((value, i) => {
                    return (
                      <option
                        className="text-[2vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[0.7vw]"
                        key={i}
                      >
                        {value}
                      </option>
                    )
                  })}
                </select>
                <select className="input-month flex-1 px-0">
                  {bulan.map((value, i) => {
                    return (
                      <option
                        className="text-[2vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[0.7vw]"
                        key={i}
                      >
                        {value}
                      </option>
                    )
                  })}
                </select>
                <select className="input-year flex-1 px-0">
                  {tahun.map((value, i) => {
                    return (
                      <option
                        className="text-[2vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[0.7vw]"
                        key={i}
                      >
                        {value}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="flex items-start gap-3 my-5 md:my-3">
              <input type="checkbox" className=" h-[26px]" />
              <p className="text-[2.7vw] md:text-[2vw] lg:text-[1vw]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <button
              type="submit"
              className="bg-primaryGrand font-bold py-1 text-center rounded-md text-white text-[3.5vw] hover:bg-darkGreen md:text-[2vw] md:py-2 lg:text-[1.2vw] lg:py-1 xl:text-[1vw] 2xl:text-[0.9vw]"
            >
              DAFTAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
