import React from 'react'
import Image from 'next/image'
import { LogoText, LogoImage } from '@/assets/icons'

const Logo = () => {
  return (
    <div className='flex flex-row gap-2 hidden md:flex text-sm text-muted-foreground'>
      <Image src={LogoImage} alt='LogoImage' />
      <Image src={LogoText} alt='LogoText' />
    </div>
  )
}

export default Logo