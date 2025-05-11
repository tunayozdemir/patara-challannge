"use client"

import React, { useEffect, useState } from 'react'
import { ReferAndEarn } from '@/components/templates'
import { SummryCard } from '@/components/molecules'

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/templates"

const summaryData = [
  { id: '1', icon: 'TotalEarnedFee', title: 'Total Earned Fee', value: '$1,000.00', button: false },
  { id: '2', icon: 'UnclaimedFee', title: 'Unclaimed Fee', value: '$500.00', button: true },
  { id: '3', icon: 'TotalReferralPoints', title: 'Total Referral Points', value: '1289', button: false },
  { id: '4', icon: 'Referrals', title: 'Referrals', value: '34', button: false }
]

type Transaction = {
  id: string
  name: string
  date: string // ISO string
  formattedDate: string
  amount: number
}

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => {
      const value = getValue() as number
      return `$${value.toFixed(2)}`
    },
  },
  {
    accessorKey: "formattedDate",
    header: "Date",
  },
]

const Dashboard = () => {
  const [tableData, setTableData] = useState<Transaction[]>([])

  useEffect(() => {
    const generateData = () => {
      const newData: Transaction[] = []

      for (let i = 1; i <= 100; i++) {
        const hoursAgo = Math.floor(Math.random() * 240)
        const randomAmount = parseFloat((Math.random() * 100).toFixed(2))
        const rawDate = new Date(Date.now() - hoursAgo * 3600000)
        const formattedDate = rawDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })

        newData.push({
          id: i.toString(),
          name: `Transaction #${i}`,
          date: rawDate.toISOString(),
          formattedDate,
          amount: randomAmount
        })
      }

      return newData
    }

    setTableData(generateData())
  }, [])

  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='w-full flex flex-row gap-3 flex-3'>
        <div className='w-full flex flex-row gap-3 flex-3'>
          <ReferAndEarn />
          <div className='w-full flex flex-2 flex-col gap-7'>
            {summaryData.map((item, index) => (
              <SummryCard key={index} items={item} />
            ))}
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={tableData} />
    </div>
  )
}

export default Dashboard
