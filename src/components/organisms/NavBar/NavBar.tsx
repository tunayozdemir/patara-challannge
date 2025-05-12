"use client"
import clsx from "clsx"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/atoms/button"
import { HamburgerButton } from '@/components/molecules'
import { LogoText, InputSearch, NotificationBell, Setting } from '@/components/atoms'
import { useSearchContext } from '@/context/ContextProvider'
import { useAuthStore } from '@/store/useAuthStore'
import { User } from '@/assets/icons'
import { SelectBox } from '@/components/molecules'

type NavbarProps = {
  onClick?: () => void
}

const items = [
  { value: "profile", label: "Profile" },
  { value: "settings", label: "Settings" },
  { value: "logout", label: "Logout" },
];

const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const router = useRouter()
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)
  const logout = useAuthStore(state => state.logout)
  const { setSearchTerm, } = useSearchContext()
  const [scrolled, setScrolled] = useState(false)


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
            <SelectBox
              userImage={User}
              username="@patara.sui"
              onValueChange={handleSelect}
              items={items}
            />
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
};

export default Navbar;
