import React, { useState, useRef, useEffect } from 'react'
import clsx from "clsx"
import Image from 'next/image'
import { Input } from "@/components/atoms"
import { motion } from "framer-motion"
import { InputSearchProps } from "./types"
import { SearchIcon, macK } from '@/assets/icons'
import { inputSearchClass, rightIcon, leftIcon } from "./classnames"

const InputSearch: React.FC<InputSearchProps> = ({
  type = "text",
  placeholder = "Enter Accounts, Platforms, NFTs, Token",
  className,
  value,
  onChange,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const isActive = isHovered || isFocused || Boolean(value)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC")
      if ((isMac && e.metaKey && e.key === 'k') || (!isMac && e.ctrlKey && e.key === 'k')) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      className="relative w-full max-w-[464px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Icon - Animated */}
      <motion.div
        animate={{ rotate: isActive ? 15 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={leftIcon}
      >
        <Image width={24} height={24} src={SearchIcon} alt='SearchIcon' />
      </motion.div>

      {/* Input */}
      <Input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsx(inputSearchClass, className)}
      />

      {/* Right Icon */}
      <div className={rightIcon}>
        <Image width={32} height={24} src={macK} alt='macK' />
      </div>
    </div>
  )
}

export default InputSearch
