"use client"

import { useEffect, useState } from "react"
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table"
import { DataTableProps, FilterRange } from "./types"
import DataTableFilter from "./DataTableFilter"
import DataTableBody from "./DataTableBody"
import DataTablePagination from "./DataTablePagination"

export default function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [pageSize, setPageSize] = useState(10)
  const [filter, setFilter] = useState<FilterRange>(null)
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if (!filter) {
      setFilteredData(data)
      return
    }

    const now = Date.now()
    const filtered = data.filter((item: any) => {
      const time = new Date(item.date).getTime()
      switch (filter) {
        case "1d": return now - time <= 86400000
        case "1w": return now - time <= 604800000
        case "1m": return now - time <= 2592000000
        case "1y": return now - time <= 31536000000
        default: return true
      }
    })

    setFilteredData(filtered)
  }, [filter, data])

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })

  return (
    <div className="space-y-4 rounded-2xl">
      <DataTableFilter filter={filter} setFilter={setFilter} />
      <DataTableBody table={table} />
      <DataTablePagination table={table} pageSize={pageSize} setPageSize={setPageSize} />
    </div>
  )
}
