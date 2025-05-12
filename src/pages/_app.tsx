import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import DashboardLayout from '@/layouts/DashboardLayout'
import { BackgroundAnimated } from '@/components/organisms'
import { ContextProvider } from '@/context/ContextProvider'
import { useAuthStore } from '@/store/useAuthStore'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const isDashboard = router.pathname.startsWith('/dashboard')
  const Layout = isDashboard ? DashboardLayout : ({ children }: any) => <>{children}</>

  const setLoginState = useAuthStore(state => state.setLoginState)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setLoginState(loggedIn)
  }, [])

  return (

    <ContextProvider>
      {!isDashboard && <BackgroundAnimated />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>

  )
}
