import React, { useState } from 'react'
import { Button } from "@/components/atoms/button"
import { ShareFat } from "@/assets/icons"
import Image from 'next/image'

const ReferralLink = () => {
  const [copied, setCopied] = useState(false)
  const [isShareEnabled, setIsShareEnabled] = useState(false)

  const referralAddress = '0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralAddress)
      setCopied(true)
      setIsShareEnabled(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Kopyalama başarısız:', err)
    }
  }

  const handleShare = () => {
    const shareUrl = `https://www.google.com/search?q=${referralAddress}`
    window.open(shareUrl, '_blank')
  }

  return (
    <div className='w-full flex flex-col'>
      <div className='pt-[24px] pr-[23px] pb-[24px] pl-[16px] bg-[#282828] rounded-xl  h-[96px]'>
        <span className='text-[#808080] text-[14px]'>Your Referral Link</span>
        <p className='text-[#FFFFFF] text-[14px] sm:text-[16px] md:text-[18px] break-all sm:truncate max-w-full'>{referralAddress}</p>
      </div>

      <div className='w-full flex flex-row gap-4 mt-[20px]'>
        <Button
          className='h-[48px]'
          variant="customBlue"
          full
          onClick={handleCopy}
          text={copied ? 'Copied!' : 'Copy Link'}
        />

        <div className='w-full rounded-xl'>
          <Button
            className='h-[48px] rounded-xl text-white'
            variant="success"
            full
            disabled={!isShareEnabled}
            onClick={handleShare}
          >
            <Image src={ShareFat} alt='ShareFat' width={20} height={20} />
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReferralLink
