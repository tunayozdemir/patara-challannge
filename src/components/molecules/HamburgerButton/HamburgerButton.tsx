"use client";
import { motion } from "framer-motion";
import { HamburgerMenu } from "@/assets/icons";
import Image from "next/image";

const HamburgerButton = () => {

  return (
    <motion.button
    className="flex md:hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image width={40} height={40} src={HamburgerMenu} alt="Hamburger Menu" />
    </motion.button>
  )
}

export default HamburgerButton