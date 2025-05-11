import React from 'react'
import { RadialIconsAnimated } from '@/components/organisms'
import { ReferralLink } from '@/components/molecules'

const text = "Invite your friends to Patara and earn a share of their on-chain rewards forever!"

const ReferAndEarn = () => {

  const splitText = text.match(/.{1,50}/g)?.join('\n')


  return (
    <div className="w-full bg-primaryShiny rounded-xl p-[40px] flex flex-col-reverse lg:flex-row justify-between lg:h-[400px]">
      <div className="flex flex-col justify-between items-baseline">
        <div>
          <span className="text-2xl md:text-[32px] text-white">Refer and Earn</span>
          <p className="whitespace-pre-line text-sm md:text-base text-[#808080] leading-5 mt-3">
            {splitText}
          </p>
        </div>
        <ReferralLink />
      </div>
      <div className='flex items-center justify-center'>
        <RadialIconsAnimated />
      </div>

    </div>
  )
}

export default ReferAndEarn
