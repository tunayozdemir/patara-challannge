import React from 'react'
import Image from 'next/image'
import clsx from "clsx"
import { motion, useAnimation } from "framer-motion";
import { bellWrap } from './classnames'
import { Setting } from '@/assets/icons'

const NotificationBell = () => {
  const controls = useAnimation()

  const handleClick = async () => {
    controls.set({ rotate: 0 })
    await controls.start({
      rotate: 30,
      transition: { duration: 0.2, ease: "easeInOut" },
    })
  }

  return (
    <motion.button
      className={clsx(bellWrap)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={handleClick}
    >
      <motion.div animate={controls}>
        <Image width={24} height={24} src={Setting} alt='Setting' />
      </motion.div>
    </motion.button>
  )
}

export default NotificationBell
