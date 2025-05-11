import React, { createContext, useContext, useState, ReactNode } from 'react'

type ContextType = {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const Context = createContext<ContextType | undefined>(undefined)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Context.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </Context.Provider>
  )
}

export const useSearchContext = () => {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('useSearchContext must be used within ContextProvider')
  return ctx
}
