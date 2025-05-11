import React from 'react'
import { ReferAndEarn } from '@/components/templates'
import { SummryCard } from '@/components/molecules'

const data = [
  { id: '1', icon: 'TotalEarnedFee', title: 'Total Earned Fee', value: '$1,000.00', button: false },
  { id: '2', icon: 'UnclaimedFee', title: 'Unclaimed Fee', value: '$500.00', button: true },
  { id: '3', icon: 'TotalReferralPoints', title: 'Total Referral Points', value: '1289', button: false },
  { id: '4', icon: 'Referrals', title: 'Referrals', value: '34', button: false }
]

const Dashboard = () => {
  return (
    <div className='w-full flex gap-3'>
      <div className='w-full flex flex-row gap-3'>
        <ReferAndEarn />
        <div className='w-full flex flex-col gap-7'>
          {
            data.map((item, index) => {
              return (
                <SummryCard key={index} items={item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard