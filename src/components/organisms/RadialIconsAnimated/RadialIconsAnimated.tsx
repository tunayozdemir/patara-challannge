'use client'
import { motion } from 'framer-motion'
import { RadialIcons } from '@/components/molecules'

const RadialIconsAnimated = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <RadialIcons />
    </motion.div>
  )
}
export default RadialIconsAnimated
