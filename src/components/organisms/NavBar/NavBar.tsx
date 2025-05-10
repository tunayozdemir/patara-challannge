"use client";
import React from 'react'
import { Button } from "@/components/atoms/button";
import Image from "next/image";
import { motion } from "framer-motion";

import { LogoText, InputSearch } from '@/components/atoms'
import { HamburgerButton } from '@/components/molecules'
import { navHeaderClass, navLeftClass, navButtonWrapperClass } from './classnames'

const NavLinks = () => {
  return (
    <header className={navHeaderClass}>
      <div className={navLeftClass}>
        <HamburgerButton />
        <LogoText />
      </div>

      <InputSearch
        placeholder='Enter Accounts, Platforms, NFTs, Token'
        type='text'
      />

      <div className={navButtonWrapperClass}>
        <Button variant="default">Sign up</Button>
      </div>
    </header>
  )
}

export default NavLinks
