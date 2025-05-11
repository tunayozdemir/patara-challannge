import { useRouter } from 'next/router'
import { Navbar } from '@/components/organisms'
import { ConnectWalet } from '@/components/templates'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (


      <div className="min-h-screen flex flex-col" >
        <Navbar onConnect={handleLogin} />
        <div className="flex-1 flex items-center justify-center">
          <ConnectWalet />
        </div>
      </div>


  )
}
