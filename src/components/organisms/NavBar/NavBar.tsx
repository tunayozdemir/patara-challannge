"use client";
import React from 'react'
import clsx from "clsx"
import { Button } from "@/components/atoms/button";
import { HamburgerButton } from '@/components/molecules'
import { LogoText, InputSearch, NotificationBell, Setting } from '@/components/atoms'
import { navHeaderClass, navLeftClass, navButtonWrapperClass } from './classnames'

const NavLinks = () => {
  return (
    <header className={navHeaderClass}>
      <div className={navLeftClass}>
        <HamburgerButton />
        <LogoText />
      </div>

      <InputSearch placeholder='Enter Accounts, Platforms, NFTs, Token' type='text' />

      <div className='hidden md:block'>
        <div className={clsx(navButtonWrapperClass, 'flex items-center gap-2')}>
          <NotificationBell />
          <Setting />
          <Button className='h-[40px] max-w-[170px]' variant="customBlue" text='Connect/Sign in' />
        </div>
      </div>
    </header>
  )
}

export default NavLinks
