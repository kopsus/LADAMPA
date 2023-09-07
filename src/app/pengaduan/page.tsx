import KritikSaran from "@/components/kritikSaran"
import Pengaduan from "@/components/pengaduan"

export default function Page() {
  return (
    <div className="mt-20 z-10 md:mt-24 lg:mt-16">
      <Pengaduan />
      <KritikSaran />
    </div>
  )
}
