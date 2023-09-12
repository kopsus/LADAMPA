"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

// assests
import brand from "../../public/assets/brand.png"
import Link from "next/link"
import { IonIcon } from "@ionic/react"
import { menu, close } from "ionicons/icons"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const currentRoute = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // active Link
  const LinkActive = "underline font-semibold"

  return (
    <>
      <header className="flex items-center justify-between bg-primaryGrand fixed top-0 w-full text-white py-3 px-5 z-50 lg:px-16 xl:px-20 2xl:px-28">
        <div className="flex items-center gap-3">
          <div className="overflow-hidden border-r-2 border-white w-[10vw] pr-[3vw] md:w-[6vw] md:pr-[1vw] lg:w-[4vw]">
            <Image src={brand} alt="" className="w-full h-full" />
          </div>
          <div>
            <Link href="/">
              <p className="underline text-[4vw] text-white font-bold md:text-[2.3vw] lg:text-[1.7vw] xl:text-[1.3vw] ">
                LADAMPA
              </p>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex gap-5 justify-around lg:gap-10 lg:text-[1.3vw] xl:gap-12 xl:text-[1.2vw] 2xl:gap-16 2xl:text-[1.1vw]">
          <Link
            href="/pengaduan"
            className={`${
              currentRoute === "/pengaduan" ? LinkActive : ""
            } hover:font-semibold`}
          >
            Pengaduan
          </Link>
          <Link
            href="/berita"
            className={`${
              currentRoute === "/berita" ? LinkActive : ""
            } hover:font-semibold`}
          >
            Berita
          </Link>
          <Link
            href="/edukasi"
            className={`${
              currentRoute === "/edukasi" ? LinkActive : ""
            } hover:font-semibold`}
          >
            Edukasi
          </Link>
          <Link
            href="/about"
            className={`${
              currentRoute === "/about" ? LinkActive : ""
            } hover:font-semibold`}
          >
            About
          </Link>
        </div>

        {/* item header mobile */}
        <div
          className={`duration-500 md:static absolute bg-primaryGrand md:min-h-fit left-0 md:w-auto w-full flex items-center px-5 md:hidden z-50 ${
            isMenuOpen ? "top-full" : "-top-[100vw]"
          }`}
        >
          <ul
            className="flex md:flex-row flex-col py-8 md:items-center md:gap-[4vw] gap-8 text-white"
            onClick={onToggleMenu}
          >
            <Link href="/berita">Berita</Link>
            <Link href="/edukasi">Edukasi</Link>
            <Link href="/pengaduan">Pengaduan</Link>
            <Link href="/about">About</Link>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <Link href="/login">
              <button className="text-[3vw] bg-primaryBlue text-white px-3 py-1 rounded-md transition-all shadow-md hover:bg-textBlue md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw]">
                Masuk
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            {isClient && (
              <IonIcon
                onClick={onToggleMenu}
                size="large"
                color="light"
                icon={isMenuOpen ? close : menu}
                className="cursor-pointer flex"
              />
            )}
          </div>
        </div>
      </header>
    </>
  )
}
