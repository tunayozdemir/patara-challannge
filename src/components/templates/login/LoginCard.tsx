'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/atoms/button'

export const LoginCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="z-10 rounded-[20px] bg-[#0D0D0D] px-8 py-10 text-center shadow-xl backdrop-blur-xl"
    >
      <div className="mb-8 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-inner">
        P
      </div>
      <h1 className="text-xl font-semibold text-white">Refer friends and earn with Patara!</h1>
      <p className="mt-2 text-sm text-gray-400">
        Invite your friends to Patara and earn a share of their on-chain rewards forever!
      </p>
      <Button variant="customBlue" className="mt-6" text=' Connect / Sign in' />
    </motion.div>
  )
}
