import React from 'react'
import { RadialIconsAnimated } from '@/components/organisms'
import {ReferralLink} from '@/components/molecules'

const ReferAndEarn = () => {
  return (
    <div className='w-full bg-[#181818] rounded-xl p-[40px] pt-[20px] pb-[20px] flex flex-row gap-3  '>
      <div className=' flex flex-col gap-20'>
        <div>
          <span className='text-[32px] text-[#FFFFFF]'>Refer and Earn</span>
          <p className='text-[16px] text-[#808080] max-w-[370px] leading-5 mt-[12px]'>Invite your friends to Patara and earn a share of their on-chain rewards forever!</p>
        </div>
         <ReferralLink/>
      </div>
      <div>
        <RadialIconsAnimated />
      </div>
    </div>
  )
}

export default ReferAndEarn