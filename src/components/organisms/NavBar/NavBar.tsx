"use client"
import clsx from "clsx"
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/atoms/button"
import { HamburgerButton } from '@/components/molecules'
import { LogoText, InputSearch, NotificationBell, Setting } from '@/components/atoms'
import { useSearchContext } from '@/context/ContextProvider'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useAuthStore } from '@/store/useAuthStore'
import { User } from '@/assets/icons'


type NavbarProps = {
  onClick?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const router = useRouter()
  const { setSearchTerm, } = useSearchContext()
  const [scrolled, setScrolled] = useState(false)

  const isLoggedIn = useAuthStore(state => state.isLoggedIn)
  const logout = useAuthStore(state => state.logout)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoggedIn])

  const handleSelect = (value: string) => {
    if (value === "logout") {
      logout()
      router.push("/");
    } else if (value === "profile") {
      router.push("/profile");
    } else if (value === "settings") {
      router.push("/settings");
    }
  };

  return (
    <header
      className={clsx('flex items-center justify-between w-full',
        'w-full bg-background fixed top-0 left-0 z-50 h-[72px] px-4 md:px-8 transition-opacity duration-300 flex-auto',
        scrolled ? 'opacity-80 backdrop-blur-md' : 'opacity-100'
      )}
    >
      <HamburgerButton />

      <div className="w-full flex items-center justify-between">
        <div className="md:flex md:flex-grow items-center gap-4 md:flex-1">
          <LogoText />
        </div>

        <div className="flex justify-start flex-grow flex-shrink-0 md:flex-1 md:justify-center md:items-center md:max-w-[464px]">
          <InputSearch
            className="w-full"
            placeholder="Enter Accounts, Platforms, NFTs, Token"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="hidden md:flex flex-grow justify-end gap-2 flex-shrink-0 flex-1">
          <NotificationBell />
          <Setting />

          {isLoggedIn ? (
            <Select onValueChange={handleSelect}>
              <SelectTrigger className="w-[170px] h-[40px] rounded-xl border border-gray-700 bg-[#1F1F1F] text-white px-2 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Image width={32} height={32} src={User} alt="Design"/>
                  <span className="text-sm">@patara.sui</span>
                </div>
              </SelectTrigger>

              <SelectContent className="bg-black rounded-xl w-[170px] text-white">
                <SelectItem value="profile">Profile</SelectItem>
                <SelectItem value="settings">Settings</SelectItem>
                <SelectItem value="logout">Logout</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <Button
              onClick={onClick}
              className="h-[40px] max-w-[170px]"
              variant="customBlue"
              text="Connect/Sign in"
            />
          )}
        </div>
      </div>
    </header>

  )
}

export default Navbar
