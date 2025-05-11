import { Navbar } from '@/components/organisms'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-2 justify-between items-center">
      <Navbar />
      <main className='w-full pl-[30px] pr-[30px]'>{children}</main>
    </div>
  )
}
