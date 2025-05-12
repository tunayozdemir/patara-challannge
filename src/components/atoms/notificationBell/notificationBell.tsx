import React, { useState } from 'react'
import Image from 'next/image'
import clsx from "clsx"
import { motion, useAnimation } from "framer-motion";
import { bellWrap } from './classnames'
import { Bell } from '@/assets/icons'

const NotificationBell = () => {
  const controls = useAnimation()

  const handleClick = async () => {
    await controls.start({
      rotate: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
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
        <Image width={24} height={24} src={Bell} alt='bell' />
      </motion.div>
    </motion.button>
  )
}

export default NotificationBell
