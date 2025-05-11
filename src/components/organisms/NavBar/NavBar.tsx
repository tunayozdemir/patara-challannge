"use client"
import React, { useEffect, useState } from 'react'
import clsx from "clsx"
import { Button } from "@/components/atoms/button"
import { HamburgerButton } from '@/components/molecules'
import { LogoText, InputSearch, NotificationBell, Setting } from '@/components/atoms'
import { useSearchContext } from '@/context/ContextProvider'


type NavbarProps = {
  onConnect?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onConnect }) => {
  const [scrolled, setScrolled] = useState(false)
  const { setSearchTerm } = useSearchContext()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx('flex items-center justify-between w-full',
        'w-full bg-background fixed top-0 left-0 z-50 h-[72px] px-4 md:px-8 transition-opacity duration-300 flex-auto',
        scrolled ? 'opacity-80 backdrop-blur-md' : 'opacity-100'
      )}
    >
      <HamburgerButton />

      <div className="w-full flex items-center justify-between ">
        <div className="md:flex md:flex-grow items-center gap-4 md:flex-1 ">
          <LogoText />
        </div>

        {/* Orta: Arama */}
        <div className="
        flex 
        justify-start
        flex-grow 
        flex-shrink-0 
        md:flex-1 
        md:justify-center
        md:items-center
        md:max-w-[464px]
        ">
          <InputSearch
            className="w-full "
            placeholder="Enter Accounts, Platforms, NFTs, Token"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>

        {/* Sağ: Bildirim, Ayar, Buton */}
        <div className="hidden md:flex flex-grow justify-end gap-2 flex-shrink-0 flex-1">
          <NotificationBell />
          <Setting />
          <Button
            onClick={onConnect}
            className="h-[40px] max-w-[170px]"
            variant="customBlue"
            text="Connect/Sign in"
          />
        </div>

      </div>
    </header>

  )
}

export default Navbar
