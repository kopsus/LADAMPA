export default function Goals() {
  return (
    <>
      <div className="px-6 my-10 md:px-8 lg:w-[80%] lg:mx-auto">
        <div className="flex flex-col gap-3">
          <p className="text-primaryRed text-center text-[4.7vw] font-bold md:text-[3.3vw] lg:text-[2vw]">
            Apa sih Tujuan LADAMPA!?
          </p>
          <ol className="list-decimal text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
            <li className="ml-8">
              Menyediakan informasi jumlah sampah: Aplikasi ini akan memberikan
              data tentang jumlah sampah yang terkumpul setiap harinya, setiap
              bulan, dan setiap tahun.
            </li>
            <li className="ml-8">
              Mempermudah pengaduan dan pelaporan: Ladampa memungkinkan pengguna
              untuk mengirim pengaduan atau melaporkan masalah terkait sampah di
              lingkungan atau daerah mereka.
            </li>
            <li className="ml-8">
              Sosialisasi dampak sampah: Aplikasi ini juga memberikan ruang
              untuk sosialisasi dan edukasi mengenai dampak sampah terhadap
              lingkungan dan kesehatan.
            </li>
          </ol>
        </div>
      </div>

      <div className="w-[90%] pb-10 mx-auto text-white border-b-4 border-b-slate-400 lg:w-[70%] lg:mb-20">
        <div className="bg-primaryGrand mx-auto rounded-lg px-10 py-5">
          <div className="mb-10">
            <p className="text-center mb-3 font-bold text-[5vw] md:text-[3vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.5vw]">
              VISI
            </p>
            <ul className="list-disc text-[3.5vw] md:text-[2.2vw] xl:text-[1.3vw] 2xl:text-[1.2vw]">
              <li>
                Menuju Sistem Pengaduan Pelayanan Publik Terintegrasi dan
                Efektif untuk Kesejahteraan Nasional
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center mb-3 font-bold text-[5vw] md:text-[3vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.5vw]">
              MISI
            </p>
            <ul className="list-disc text-[3.5vw] md:text-[2.2vw] xl:text-[1.3vw] 2xl:text-[1.2vw]">
              <li>
                <span className="font-bold">
                  Peningkatan Kesadaran Masyarakat :
                </span>{" "}
                Mengedukasi masyarakat tentang pentingnya pengelolaan sampah
                yang benar melalui kampanye dan informasi yang mudah diakses.
              </li>
              <li>
                <span className="font-bold">Kolaborasi Stakeholder :</span>{" "}
                Mendorong kerjasama antara pemerintah, lembaga swadaya
                masyarakat, bisnis, dan warga untuk bersama-sama mencari solusi
                inovatif dalam pengurangan sampah dan daur ulang.
              </li>
              <li>
                <span className="font-bold">Pemberdayaan Masyarakat :</span>{" "}
                Meningkatkan partisipasi dan kesadaran masyarakat dalam
                melaporkan pengaduan serta memberikan umpan balik, sehingga
                proses pelayanan publik dapat terus ditingkatkan.
              </li>
              <li>
                <span className="font-bold">Pusat Informasi Nasional : </span>{" "}
                Menyediakan saluran tunggal nasional untuk pengaduan pelayanan
                publik, memberikan akses mudah bagi masyarakat untuk melaporkan
                dan mendapatkan informasi terkait pelayanan di berbagai sektor.
              </li>
              <li>
                <span className="font-bold">Integrasi Total : </span>{" "}
                Mengintegrasikan sistem pengelolaan pengaduan pelayanan publik
                di semua organisasi penyelenggara di Indonesia untuk menghindari
                duplikasi, meminimalkan kesalahan, dan meningkatkan efisiensi
                penanganan pengaduan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
