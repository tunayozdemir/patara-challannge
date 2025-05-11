'use client'
import { motion } from 'framer-motion'
import { RadialIcons } from '@/components/molecules'

const RadialIconsAnimated = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ scale: [0.95, 1, 0.95], opacity: [0.8, 1, 0.8] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }}
    >
      <RadialIcons />
    </motion.div>
  )
}

export default RadialIconsAnimated
