"use client"

import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { ReferAndEarn } from '@/components/templates'
import { SummryCard } from '@/components/molecules'

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/templates"
import { EarningsRow } from "@/components/templates/DataTable/types"
import { DesignCol } from '@/assets/icons'

import { useSearchContext } from '@/context/ContextProvider'

const summaryData = [
  { id: '1', icon: 'TotalEarnedFee', title: 'Total Earned Fee', value: '$1,000.00', button: false },
  { id: '2', icon: 'UnclaimedFee', title: 'Unclaimed Fee', value: '$500.00', button: true },
  { id: '3', icon: 'TotalReferralPoints', title: 'Total Referral Points', value: '1289', button: false },
  { id: '4', icon: 'Referrals', title: 'Referrals', value: '34', button: false }
]

export const columns: ColumnDef<EarningsRow>[] = [
  {
    accessorKey: "account",
    header: () => <span className="text-[#A1A1AA] text-[12px]">ACCOUNT</span>,
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-[14px]">
        <Image src={DesignCol} width={40} height={40} alt="avatar" className="rounded-full" />
        <span className="text-foreground">{row.original.account}</span>
      </div>
    )
  },
  {
    accessorKey: "amountIn",
    header: () => <span className="text-[#A1A1AA] text-[12px]">AMOUNT IN</span>,
    cell: ({ row }) => {
      const [amount, unit] = row.original.amountIn.split(" ")
      return (
        <span className="text-[14px]">
          <span className="text-foreground font-medium">{amount}</span>{" "}
          <span className="text-muted-foreground text-[#808080]">{unit}</span>
        </span>
      )
    }
  },
  {
    accessorKey: "amountOut",
    header: () => <span className="text-[#A1A1AA] text-[12px]">AMOUNT OUT</span>,
    cell: ({ row }) => {
      const [amount, unit] = row.original.amountOut.split(" ")
      return (
        <span className="text-[14px]">
          <span className="text-foreground font-medium">{amount}</span>{" "}
          <span className="text-muted-foreground text-[#808080]">{unit}</span>
        </span>
      )
    }
  },
  {
    accessorKey: "price",
    header: () => <span className="text-[#A1A1AA] text-[12px]">PRICE</span>,
    cell: ({ row }) => (
      <span className="text-[14px] text-foreground">{row.original.price}</span>
    )
  },
  {
    accessorKey: "value",
    header: () => <span className="text-[#A1A1AA] text-[12px]">VALUE</span>,
    cell: ({ row }) => (
      <span className="text-[14px] text-foreground">{row.original.value}</span>
    )
  },
  {
    accessorKey: "earnedFee",
    header: () => <span className="text-[#A1A1AA] text-[12px]">EARNED FEE</span>,
    cell: ({ row }) => (
      <span className="text-[14px] text-foreground">{row.original.earnedFee}</span>
    )
  },
  {
    accessorKey: "time",
    header: () => <span className="text-[#A1A1AA] text-[12px]">TIME</span>,
    cell: ({ row }) => (
      <span className="text-[14px] text-muted-foreground">{row.original.time}</span>
    )
  }
]

const Dashboard = () => {
  const [tableData, setTableData] = useState<EarningsRow[]>([])
  const { searchTerm } = useSearchContext()

  useEffect(() => {
    const generateMockData = (): EarningsRow[] => {
      const data: EarningsRow[] = []

      for (let i = 0; i < 100; i++) {
        const randomDaysAgo = Math.floor(Math.random() * 30)
        const date = new Date()
        date.setDate(date.getDate() - randomDaysAgo)

        data.push({
          id: String(i),
          account: `ABC${i}`,
          avatar: <Image src={DesignCol} width={24} height={24} alt="avatar" className="rounded-full" />,
          amountIn: "1,000.00 SUI",
          amountOut: "2,500.00 USDC",
          price: "$2.50",
          value: "$2,500.00",
          earnedFee: "$0.05",
          time: `${randomDaysAgo} day ago`,
          date: date.toISOString(), // ✅ eklendi
        })
      }

      return data
    }

    setTableData(generateMockData())
  }, [])

  const filteredData = useMemo(() => {
    return tableData.filter(row =>
      row.account.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [tableData, searchTerm])

  return (
    <div className='w-full flex flex-col gap-10'>

      <div className="w-full flex  flex-col xl:flex-row gap-6">
        <div className="xl:md:w-5/6 w-full">
          <ReferAndEarn />
        </div>
        <div className="w-full xl:md:w-1/4 flex flex-col gap-[9px]">
          {summaryData.map((item, index) => (
            <SummryCard key={index} items={item} />
          ))}
        </div>
      </div>
      <div className='mb-10 '>
        <DataTable columns={columns} data={filteredData} />
      </div>
    </div>
  )
}

export default Dashboard
