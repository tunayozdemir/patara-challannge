// src/pages/_app.tsx

import type { AppProps } from 'next/app'
import DashboardLayout from '@/layouts/DashboardLayout'
import { BackgroundAnimated } from '@/components/organisms'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const isDashboard = router.pathname.startsWith('/dashboard')
  const Layout = isDashboard ? DashboardLayout : ({ children }: any) => <>{children}</>

  return (
    <>
      {!isDashboard && <BackgroundAnimated />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
