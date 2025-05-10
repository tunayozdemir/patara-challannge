'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/atoms/button'
import { Rectangle } from '@/assets/icons'
import { RadialIcons } from '@/components/molecules'

export const LoginCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-[464px] rounded-[20px] bg-primaryDark p-6 text-center shadow-xl backdrop-blur-xl mx-auto "
    >
      <RadialIcons />

    </motion.div>
  )
}
