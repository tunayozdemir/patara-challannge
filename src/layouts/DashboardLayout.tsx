import { Navbar } from '@/components/organisms'
import { ReactNode } from 'react'
import { DefaultLayout } from '@/layouts'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col ">
      <Navbar />
      <DefaultLayout>
        <main className="w-full pt-[82px]">
          {children}
        </main>
      </DefaultLayout>
    </div>
  )
}
