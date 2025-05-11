import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '@/layouts/DashboardLayout'
import { BackgroundAnimated } from '@/components/organisms'
import { ContextProvider } from '@/context/ContextProvider'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const isDashboard = router.pathname.startsWith('/dashboard')
  const Layout = isDashboard ? DashboardLayout : ({ children }: any) => <>{children}</>

  return (
    <>
      {!isDashboard && <BackgroundAnimated />}
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  )
}
