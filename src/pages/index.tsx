import Head from 'next/head'
import { useRouter } from 'next/router'
import { Navbar } from '@/components/organisms'
import { ConnectWalet } from '@/components/templates'
import { useAuthStore } from '@/store/useAuthStore'

export default function LoginPage() {
  const router = useRouter()
  const login = useAuthStore(state => state.login)

  const handleLogin = () => {
    login()
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col" >
      <Head>
        <title>Patara App | Hoşgeldiniz</title>
        <meta name="description" content="Patara App - Hoşgeldiniz" />
      </Head>
      <Navbar onClick={handleLogin} />
      <div className="flex-1 flex items-center justify-center">
        <ConnectWalet />
      </div>
    </div>
  )
}
