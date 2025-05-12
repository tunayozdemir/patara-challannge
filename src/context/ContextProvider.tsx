import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type ContextType = {
  searchTerm: string
  setSearchTerm: (term: string) => void
  isLoggedIn: boolean
  setIsLoggedIn: (status: boolean) => void
}

const Context = createContext<ContextType | undefined>(undefined)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn')
    if (storedLogin === 'true') {
      setIsLoggedIn(false)
    }
    else{
        setIsLoggedIn(true)
    }
  }, [])

  return (
    <Context.Provider value={{ searchTerm, setSearchTerm, isLoggedIn, setIsLoggedIn }}>
      {children}
    </Context.Provider>
  )
}

export const useSearchContext = () => {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('useSearchContext must be used within ContextProvider')
  return ctx
}
