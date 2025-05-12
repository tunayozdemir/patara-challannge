import React, { ReactNode } from "react"

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full px-4 md:px-4">
        {children}
      </div>
    </div>
  )
}
