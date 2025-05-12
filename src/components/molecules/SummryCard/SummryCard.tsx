import React from 'react'
import { Button } from '@/components/atoms/button'
import * as Icons from '@/assets/icons'
import Image from 'next/image'

interface SummaryItem {
  id: string
  icon: string
  title: string
  value: string
  button: boolean
}

interface Props {
  items: SummaryItem
}

const SummryCard = ({ items }: Props) => {

  const IconComponent = (Icons as any)[items.icon] // Dinamik ikon çeker

  return (
    <div className='w-full p-[18px] bg-primaryShiny rounded-xl flex flex-row justify-between items-center '>
      <div className='flex items-center gap-3 '>
        {IconComponent &&
          <div className='bg-[#282828] p-[4px] rounded-md w-[40px] h-[40px]'>
            <Image src={IconComponent} alt={items.icon} width={32} height={32} />
          </div>
        }
        <div className='flex flex-col'>
          <span className='text-[14px] text-[#808080]'>{items.title}</span>
          <div className='text-[24px] text-white font-semibold'>{items.value}</div>
        </div>
      </div>
      {items.button && (
        <Button className='w-[70px] h-[48px] rounded-2xl p-0' variant="customBlue" size="default" full text='Claim' />
      )}
    </div>
  )
}

export default SummryCard
