'use client'

import { MouseEvent } from "react"

// Kartlar üzerinde mouse hareket ettiğinde arkaplanda çıkan yeşil kabarcıkların modülü
export default function createRadialGradient(e: MouseEvent<HTMLDivElement>): string {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  return `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25) 0%, transparent 25%)`;
}
