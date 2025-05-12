import { create } from 'zustand'

type AuthStore = {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
  setLoginState: (value: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  login: () => {
    localStorage.setItem('isLoggedIn', 'true')
    set({ isLoggedIn: true })
  },
  logout: () => {
    localStorage.setItem('isLoggedIn', 'false')
    set({ isLoggedIn: false })
  },
  setLoginState: (value) => set({ isLoggedIn: value }),
}))
