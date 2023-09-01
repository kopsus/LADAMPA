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
          position={[-7.467708998303383, 109.3003460527841]}
          draggable={true}
        >
          <Popup>TPS PUSAT KALIBAGOR</Popup>
        </Marker>
        <Marker
          position={[-7.481665617128672, 109.22515836915825]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            TPS PUSAT PATIKRAJA
          </Popup>
        </Marker>
        <Marker
          position={[-7.510598647634356, 109.29382292041474]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            TPS PUSAT BANYUMAS
          </Popup>
        </Marker>
        <Marker
          position={[-7.435018404128583, 109.24912478085912]}
          draggable={true}
        >
          <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
            Ini Kampus Gw
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
