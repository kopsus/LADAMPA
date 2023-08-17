// components
import "../app/globals.css"

export default function KritikSaran() {
  return (
    <div className="mt-10 mb-20 lg:mb-40 lg:mt-20">
      <p className="text-center text-primaryRed text-[5vw] font-bold md:text-[4.5vw] lg:text-[3vw] xl:text-[2vw]">
        Kotak Kritik dan Saran
      </p>

      <div className="w-[90%] mx-auto my-5 lg:w-[70%]">
        <p className="my-5 md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.3vw]">
          Sampaikan aspirasi, kritik ataupun saran anda mengenai LADAMPA dalam
          mengelola kasus sampah daerah Kabupaten Banyumas!.
        </p>

        <form className="flex flex-col gap-5 xl:mt-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <div className="input-form-KS flex flex-col w-full">
              <label>Nama Lengkap</label>
              <input type="text" className="" />
            </div>
            <div className="input-form-KS flex flex-col w-full">
              <label>Email atau Nomor Telepone</label>
              <input type="text" className="" />
            </div>
          </div>
          <div className="input-form-KS flex flex-col">
            <label>Saran</label>
            <textarea className="border-2 border-slate-400 outline-primaryGrand rounded-md p-2 h-[30vw] lg:h-[15vw]" />
          </div>
          <button
            type="submit"
            className="bg-primaryGrand hover:bg-darkGreen text-white rounded-md py-1 md:py-3 lg:py-1 xl:text-[1vw] 2xl:text-[1.3vw]"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  )
}
