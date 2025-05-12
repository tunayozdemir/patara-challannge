import React from 'react'
import Image from 'next/image'
import { LogoText, LogoImage } from '@/assets/icons'

const Logo = () => {
  return (
    <div className='flex-row gap-2 hidden md:flex text-sm text-muted-foreground'>
      <Image src={LogoImage} alt='LogoImage' width={35.78} height={35.99} />
      <Image src={LogoText} alt='LogoText' width={100} height={32} />
    </div>
  )
}

export default Logo