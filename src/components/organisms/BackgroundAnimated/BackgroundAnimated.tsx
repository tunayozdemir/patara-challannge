'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const iconPositions = [
  { icon: 'P', xRatio: -0.39, yRatio: -0.37 },
  { icon: 'S', xRatio: -0.43, yRatio: -0.09 },
  { icon: 'F', xRatio: -0.28, yRatio: 0.05 },
  { icon: 'G', xRatio: -0.44, yRatio: 0.31 },
  { icon: 'M', xRatio: 0.40, yRatio: -0.35 },
  { icon: 'C', xRatio: 0.20, yRatio: -0.16 },
  { icon: 'W', xRatio: 0.35, yRatio: 0.03 },
  { icon: 'A', xRatio: 0.32, yRatio: 0.28 },
]

const BackgroundAnimated = () => {
  const [mounted, setMounted] = useState(false)
  const [viewport, setViewport] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (viewport.width > 0) {
      setMounted(true)
    }
  }, [viewport])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none blur-[3px]">
      {iconPositions.map(({ icon, xRatio, yRatio }, index) => {
        const x = viewport.width * xRatio
        const y = viewport.height * yRatio

        return (
          <motion.div
            key={index}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
            animate={
              mounted
                ? { x, y, opacity: 0.5, scale: 1 }
                : {}
            }
            transition={{
              delay: 0.1 + index * 0.08,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="absolute left-1/2 top-1/2"
          >
            <div className="
              w-[70px] 
              h-[70px] 
              rounded-full 
              flex 
              items-center 
              justify-center 
              bg-gradient-to-b
            from-white/30 to-black/40
              shadow-xl 
              backdrop-blur-sm
            text-white text-2xl 
              font-bold
            ">
              <span className='text-[32px]'>{icon}</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default BackgroundAnimated
