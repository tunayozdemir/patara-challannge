'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { A, C, F, G, M, P, S, W } from '@/assets/icons'
import { useEffect, useState } from 'react'

const iconPositions = [
  { icon: P, left: '15%', top: '15%' },
  { icon: S, left: '12%', top: '40%' },
  { icon: F, left: '25%', top: '58%' },
  { icon: G, left: '8%', top: '83%' },
  { icon: M, left: '90%', top: '15%' },
  { icon: C, left: '70%', top: '36%' },
  { icon: W, left: '85%', top: '56%' },
  { icon: A, left: '80%', top: '80%' },
]

export const BackgroundIcons = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none blur-[2px]">
      {iconPositions.map(({ icon, left, top }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={mounted ? { opacity: 0.5, scale: 1 } : {}}
          transition={{ delay: 0.2 + index * 0.05, duration: 0.6, ease: 'easeOut' }}
          style={{ position: 'absolute', left, top }}
        >
          <div className="
            w-[70px] 
            h-[70px] 
            rounded-full 
            p-2 
            flex 
            items-center 
            justify-center 
            bg-gradient-to-b 
          from-white/30
           to-black/40 
            shadow-[inset_0_8px_14px_rgba(255,255,255,0.25)] 
            shadow-xl 
            backdrop-blur-sm
            "
          >
            <Image src={icon} alt="bg-icon" width={50} height={50} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
