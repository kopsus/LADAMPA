"use client"

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"

export default function MapsFooter() {
  return (
    <>
      <div className="flex-1 z-10">
        <p className="mb-4 font-bold xl:text-[1.2vw] 2xl:text-[1.1vw]">
          Peta Lokasi
        </p>
        <MapContainer
          className="h-[50vw] md:h-[25vw] xl:h-[15vw] sticky"
          center={[-7.435018404128583, 109.24912478085912]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[-7.435018404128583, 109.24912478085912]}
            draggable={true}
          >
            <Popup className="text-[3vw] md:text-[1.7vw] lg:text-[0.8vw]">
              Telkom PWT ni bos😎
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}
