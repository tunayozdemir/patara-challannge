import React from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/atoms/button";
import { RadialIconsAnimated } from '@/components/organisms'



const ConnectWalet = () => {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (
    <div className='w-full max-w-[464px] rounded-[20px] bg-primaryDark p-6 pt-[16.5px] pb-[40px] text-center shadow-xl backdrop-blur-xl mx-auto'>
      <RadialIconsAnimated />
      <div className='flex flex-col gap-4'>
        <span className='text-[28px]'>Refer friends and earn with Patara!</span>
        <p className='text-[16px] text-[#808080] pl-[20px] pr-[20px]'>Invite your friends to Patara and earn a share of their on-chain rewards forever!</p>
      </div>
          <Button className='h-[40px] max-w-[170px] mt-[40.5px]' variant="customBlue" text='Connect/Sign in' onClick={handleLogin}/>
          </div>
  )  
}
      
export default ConnectWalet