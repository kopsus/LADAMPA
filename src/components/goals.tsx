export default function Goals() {
  return (
    <>
      <div className="px-6 my-10 md:px-8 lg:w-[80%] lg:mx-auto">
        <div className="flex flex-col gap-3">
          <p className="text-primaryRed text-center text-[4.7vw] font-bold md:text-[3.3vw] lg:text-[2vw]">
            Apa sih Tujuan LADAMPA!?
          </p>
          <p className="indent-8 text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
            SP4N-LAPOR! dibentuk untuk merealisasikan kebijakan “no wrong door
            policy” yang menjamin hak masyarakat agar pengaduan dari manapun dan
            jenis apapun akan disalurkan kepada penyelenggara pelayanan publik
            yang berwenang menanganinya. SP4N bertujuan agar:
          </p>
        </div>
        <ul className="list-disc list-outside px-5 my-3 text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.3vw]">
          <li>
            Penyelenggara dapat mengelola pengaduan dari masyarakat secara
            sederhana, cepat, tepat, tuntas, dan terkoordinasi dengan baik;
          </li>
          <li>
            Penyelenggara memberikan akses untuk partisipasi masyarakat dalam
            menyampaikan pengaduan; dan
          </li>
          <li>Meningkatkan kualitas pelayanan publik.</li>
        </ul>
      </div>

      <div className="w-[80%] pb-10 mx-auto text-white flex flex-col gap-8 my-10 border-b-4 border-b-slate-400 md:flex-row lg:w-[70%] lg:mb-20">
        <div className="bg-primaryGrand  mx-auto rounded-lg px-10 py-5">
          <p className="text-center mb-3 font-bold text-[5vw] md:text-[3vw] lg:text-[1.7vw] xl:text-[1.4vw] 2xl:text-[1.5vw]">
            VISI
          </p>
          <ul className="list-disc xl:text-[1.2vw] 2xl:text-[1.2vw]">
            <li>
              Penyelenggara dapat mengelola pengaduan dari masyarakat secara
              sederhana, cepat, tepat, tuntas, dan terkoordinasi dengan baik;
            </li>
            <li>
              Penyelenggara memberikan akses untuk partisipasi masyarakat dalam
              menyampaikan pengaduan; dan
            </li>
            <li>Meningkatkan kualitas pelayanan publik.</li>
          </ul>
        </div>
        <div className="bg-primaryGrand  mx-auto rounded-lg px-10 py-5">
          <p className="text-center mb-3 font-bold text-[5vw] md:text-[3vw] lg:text-[1.7vw] xl:text-[1.4vw] 2xl:text-[1.5vw]">
            MISI
          </p>
          <ul className="list-disc xl:text-[1.2vw] 2xl:text-[1.2vw]">
            <li>
              Penyelenggara dapat mengelola pengaduan dari masyarakat secara
              sederhana, cepat, tepat, tuntas, dan terkoordinasi dengan baik;
            </li>
            <li>
              Penyelenggara memberikan akses untuk partisipasi masyarakat dalam
              menyampaikan pengaduan; dan
            </li>
            <li>Meningkatkan kualitas pelayanan publik.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
