'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Design, Rectangle } from '@/assets/icons'
import { CardA, CardC, CardF, CardG, CardM, CardP, CardS, CardW } from '@/assets/icons'
import { radialIconsClasses as classes } from './classnames'

const icons = [
  { label: CardA, angle: 0 },
  { label: CardW, angle: 45 },
  { label: CardC, angle: 90 },
  { label: CardG, angle: 135 },
  { label: CardF, angle: 180 },
  { label: CardS, angle: 225 },
  { label: CardP, angle: 270 },
  { label: CardM, angle: 315 },
]

const RadialIcons = () => {
  const radius = 130

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>

        {/* Soft radial glow effect in background */}
        <div className={classes.glow} />

        {/* Çizgiler (SVG) */}
        <Image src={Rectangle} alt="Radial lines" className={classes.lines} />

        {/* Merkez ikon */}
        <div className={classes.centerWrapper}>
          <div className={classes.centerIcon}>
            <Image width={83.59} height={83.59} src={Design} alt="Center Icon" />
          </div>
        </div>

        {/* Etrafı saran ikonlar */}
        {icons.map(({ label, angle }, index) => {
          const rad = (angle * Math.PI) / 180
          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)

          return (
            <motion.div
              key={index}
              className={classes.iconWrapper}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
              animate={{ x, y, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.1, 0.8, 0.2, 1],
              }}
              style={{
                left: '44%',
                top: '44%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
              }}
            >
              <div className={classes.iconInner}>
                <Image src={label} alt="label" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default RadialIcons
