"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"

export default function Maps() {
  const borderStyle = {
    borderBottom: "2px solid #D9D9D9",
    paddingBottom: "10vw",
  }

  return (
    <div className="px-6 lg:px-10 2xl:px-14">
      <p className="title-components md:text-center text-primaryGrand">
        Peta Daerah Banyumas Terkonfrimasi Teridentifikasi
      </p>
      <MapContainer
        className="h-[80vw] md:h-[30vw] mt-[10vw] lg:h-[35vw] lg:mt-[2vw] mb-[3vw] sticky"
        center={[-7.511355786277065, 109.29566548517346]}
        scrollWheelZoom={false}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-7.409113745689558, 109.15060635447183]}
          draggable={true}
        >
          <Popup>Tpst3R Cilongok</Popup>
        </Marker>
        <Marker
          position={[-7.384194886983897, 109.08123009407198]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            TPST Desa Karangklesem
          </Popup>
        </Marker>
        <Marker
          position={[-7.532292806944477, 109.28528051553798]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            TPST Kedunggede
          </Popup>
        </Marker>
        <Marker
          position={[-7.532817213939626, 109.18771556366345]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            TPST Desa Rawalo
          </Popup>
        </Marker>
        <Marker
          position={[-7.444418424552904, 109.27576452504003]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            TPST Desa Sokaraja Kulon
          </Popup>
        </Marker>
        <Marker
          position={[-7.370170049538218, 109.2341922213329]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            TPST 3R REMPOAH
          </Popup>
        </Marker>
      </MapContainer>
      <p
        className="text-[2.8vw] md:text-[1.5vw] lg:text-[1.1vw]"
        style={borderStyle}
      >
        Catatan: Titik wilayah transmisi lokal kasus tertumpuknya sampah
        didasarkan pada node geografis pada kecamatan daerah Banyumas
      </p>
    </div>
  )
}
