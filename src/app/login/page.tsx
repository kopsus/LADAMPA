import Link from "next/link"
import Image from "next/image"

import img from "../../../public/assets/iconForm.png"

// components
import "../../app/globals.css"

export default function Page() {
  return (
    <div className="mt-20 z-10">
      <div className="lg:flex lg:gap-10 lg:px-20 lg:my-10 lg:mb-20">
        <div className="w-[80%] my-10 mx-auto text-primaryGrand text-[6vw] text-center font-bold md:text-[4vw] md:w-[60%] lg:w-[90%] lg:text-[3vw] xl:text-[2.7vw]">
          <p className="">Bersama Lawan Sampah</p>
          <p className="">Suara Kita, Aksi Nyata!</p>
          <div className="hidden lg:flex lg:overflow-hidden lg:w-[70%] mx-auto">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="border-2 border-primaryGrand shadow-md w-[90%] mx-auto mb-20 rounded-xl p-5 md:w-[60%] lg:my-10">
          <div className="flex flex-col gap-1 mb-5 border-b-2 border-slate-400">
            <p className="text-[5vw] font-bold md:text-[3vw] lg:text-[1.7vw] xl:text-[1.5vw]">
              Selamat Datang
            </p>
            <p>Silakan masukkan detail Anda</p>
          </div>
          <form className="flex flex-col gap-3">
            <div>
              <label>Email atau Nomor Telepone</label>
              <input type="text" className="login" required />
            </div>
            <div>
              <label>Nama Pengguna</label>
              <input type="text" className="login" required />
            </div>
            <div>
              <label>Kata Sandi</label>
              <input type="password" className="login" required />
            </div>
            <button className="bg-primaryGrand font-bold py-1 text-center rounded-md text-white md:py-2 lg:py-1 xl:text-[1vw]">
              MASUK
            </button>
            <p className="text-[3.5vw] mt-5 md:text-[2.3vw] lg:text-[1.1vw] xl:text-[1vw]">
              Belum Punya Akun?{" "}
              <Link href="/sign-up">
                <span className="font-bold">DAFTAR</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
