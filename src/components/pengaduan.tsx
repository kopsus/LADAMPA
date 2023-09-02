import React from "react"
import Image from "next/image"

// assets
import img from "../../public/assets/logo.png"

// components
import "../app/globals.css"

const kecamatan = [
  "	Ajibarang",
  "Banyumas",
  "	Baturaden",
  "	Cilongok",
  "	Gumelar",
  "Kalibagor",
  "Karanglewas",
  "Kebasen",
  "Kedung Banteng",
  "Kembaran",
  "Kemranjen",
  "Jatilawang",
  "	Lumbir",
]

const Kelurahan = [
  "Sudagaran",
  "Purwokerto Wetan",
  "Purwokerto Kulon",
  "Sokaraja",
  "Kembaran",
  "Purwokerto Selatan",
  "Purwokerto Utara",
  "Purbalingga Lor",
  "Karangreja",
  "Patikraja",
]

const rt: any[] = []
for (var i = 1; i <= 20; i++) {
  rt.push([i])
}

const rw: any[] = []
for (var i = 1; i <= 20; i++) {
  rw.push([i])
}

export default function Pengaduan() {
  return (
    <div className="">
      <div className="w-[90%] mx-auto border-b-4 border-slate-400 lg:flex lg:gap-10 xl:w-[80%]">
        <div className="border-2 border-primaryGrand shadow-md mx-auto my-10 p-5 rounded-xl md:p-10 lg:flex-1 lg:mb-20">
          <div className="flex flex-col gap-2 mb-5">
            <p className="text-[4.5vw] font-bold md:text-[3vw] lg:text-[1.7vw] xl:text-[1.4vw] 2xl:text-[1.2vw]">
              PENGADUAN
            </p>
            <p className="text-[4vw] md:text-[2.8vw] xl:text-[1.2vw] 2xl:text-[1.1vw]">
              Selamat Datang Tegar Setio. Silahkan ajukan pengaduan anda
            </p>
          </div>

          <div>
            <p className="text-[4.5vw] font-bold border-b-2 border-slate-400 md:text-[3vw] md:pb-5 lg:text-[1.7vw] xl:text-[1.4vw] 2xl:text-[1.2vw]">
              FORM PENGADUAN
            </p>

            <form className="my-5 flex flex-col gap-5 overflow-hidden">
              <div className="flex flex-col gap-5 lg:flex-row">
                <div className="item-form-pengaduan flex flex-col w-full">
                  <label className="">Nama Depan</label>
                  <input type="text" className="" placeholder="" />
                </div>
                <div className="item-form-pengaduan flex flex-col w-full">
                  <label>Nama Belakang</label>
                  <input type="text" className="" placeholder="" />
                </div>
              </div>
              <div className="item-form-pengaduan flex flex-col">
                <label>Email atau Nomor Telepon</label>
                <input type="text" className="" placeholder="" />
              </div>
              <p className="text-[4.5vw] text-center font-bold my-5 md:text-[3vw] xl:text-[1.4vw] 2xl:text-[1.2vw]">
                Lokasi Kejadian
              </p>
              <div className="flex flex-col gap-5 md:flex-row md:gap-5">
                <div className="item-form-pengaduan w-full flex flex-col">
                  <label className="">Kecamatan</label>
                  <select>
                    {kecamatan.map((value, i) => {
                      return (
                        <option key={i} value="">
                          {value}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className="item-form-pengaduan w-full flex flex-col">
                  <label className="">Kelurahan</label>
                  <select className="">
                    {Kelurahan.map((value, i) => {
                      return (
                        <option key={i} value="">
                          {value}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className="item-form-pengaduan flex flex-col">
                <label className="">RT / RW</label>
                <div className="flex gap-5">
                  <select className="">
                    {rt.map((value, i) => {
                      return (
                        <option key={i} value="">
                          {value}
                        </option>
                      )
                    })}
                  </select>
                  <select className="">
                    {rw.map((value, i) => {
                      return (
                        <option key={i} value="">
                          {value}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className="item-file flex flex-col">
                <label>Masukan gambar yang mendukung</label>
                <input type="file" className="" />
              </div>
              <div className="flex items-center justify-between text-[3.5vw] md:text-[2.7vw] md:justify-start md:gap-7 lg:text-[1.3vw] xl:text-[1.1vw] 2xl:text-[1vw]">
                <p>Banyak Sampah :</p>
                <div className="flex items-center gap-3 mx-auto md:mx-0">
                  <div className="flex items-center gap-1 md:gap-3">
                    <input type="radio" name="gender" value="Sedang" />
                    <label>Sedang</label>
                  </div>
                  <div className="flex items-center gap-1 md:gap-3">
                    <input type="radio" name="gender" value="Banyak" />
                    <label>Banyak</label>
                  </div>
                </div>
              </div>
              <div className="item-form-pengaduan flex flex-col">
                <label>Deskripsi</label>
                <textarea className="h-[30vw] rounded-md lg:h-[15vw] border-2 border-slate-400 p-2 outline-primaryGrand" />
              </div>
              <button
                type="submit"
                className="bg-primaryGrand hover:bg-darkGreen text-white py-1 rounded-md text-[3vw] md:text-[2.5vw] md:py-1 lg:py-1 xl:text-[1vw] 2xl:text-[1.2vw]"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
        <div className="hidden lg:my-40 lg:flex lg:flex-col lg:flex-1 xl:flex-[0.8]">
          <div className="w-[60%] mx-auto">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text-center my-10 text-[2vw] font-bold">
            <p className="text-primaryRed">BANYUMAS</p>
            <p>BEBAS SAMPAH</p>
          </div>
        </div>
      </div>
    </div>
  )
}
