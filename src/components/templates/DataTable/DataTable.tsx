"use client"

import * as React from "react"
import Image from "next/image"
import { Fragment } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from '@/assets/icons'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { motion } from "framer-motion" // 👈 Yeni eklenen import

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export default function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {

  const [pageSize, setPageSize] = React.useState(10)
  const [filter, setFilter] = React.useState<"1d" | "1w" | "1m" | "1y" | null>(null)
  const [filteredData, setFilteredData] = React.useState(data)

  React.useEffect(() => {
    if (!filter) {
      setFilteredData(data)
      return
    }

    const now = Date.now()

    const filtered = data.filter((item: any) => {
      const itemTime = new Date(item.date).getTime()
      switch (filter) {
        case "1d":
          return now - itemTime <= 86400000
        case "1w":
          return now - itemTime <= 3600000
        case "1m":
          return now - itemTime <= 604800000
        case "1y":
          return now - itemTime <= 31536000000
        default:
          return true
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

  function getPaginationRange(current: number, total: number) {
    const delta = 1
    const range: (number | "...")[] = []

    const left = 1
    const right = total

    for (let i = 1; i <= total; i++) {
      if (
        i <= 3 ||
        i > total - 3 ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i)
      } else if (range[range.length - 1] !== "...") {
        range.push("...")
      }
    }

    return range
  }

  return (
    <div className="space-y-4 rounded-2xl">
      {/* FİLTRE BUTONLARI */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-white font-medium text-[24px]">Earnings</div>
        <div className="flex gap-0 bg-primaryShiny p-[4px] rounded-xl">
          {["1d", "1w", "1m", "1y"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : 'select'}
              onClick={() => setFilter(f as any)}
              className="border-none w-[36px] h-[32px] rounded-md"
            >
              {f.toUpperCase()}
            </Button>
          ))}
          <Button
            className="border-none w-[36px] h-[32px] rounded-md"
            variant={filter ? 'select' : 'default'}
            onClick={() => setFilter(null)}>
            ALL
          </Button>
        </div>
      </div>

      {/* TABLO */}
      <div className="rounded-xl bg-primaryShiny p-5 overflow-x-auto">
        <div className="min-w-[900px]">
          <Table className="border-separate border-spacing-y-2 w-full [&_th]:bg-transparent [&_td]:bg-[#282828] [&_td]:text-white [&_th]:text-white rounded-xl">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      <div className="px-4 py-2 text-[#808080] font-medium text-[12px] whitespace-nowrap">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.map((row, rowIndex) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: rowIndex * 0.05, duration: 0.3 }}
                  className="h-[72px] bg-[#282828] rounded-xl overflow-hidden"
                >
                  {row.getVisibleCells().map((cell, cellIndex, cells) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "text-white px-4 py-3 bg-[#282828] h-[72px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]",
                        cellIndex === 0 && "rounded-l-2xl",
                        cellIndex === cells.length - 1 && "rounded-r-2xl"
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* ALT BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-h-6">
        {/* SAYFA BOYUTU */}
        <div className="flex items-center gap-2">
          <Select
            value={String(pageSize)}
            onValueChange={(value) => {
              const newSize = Number(value)
              setPageSize(newSize)
              table.setPageSize(newSize)
            }}
          >
            <SelectTrigger className="w-[139px] h-[40px] rounded-xl border border-gray-700 bg-[#1F1F1F] text-sm text-white px-3 text-[14px] flex items-center justify-between">
              <SelectValue placeholder="10 Transaction" />
            </SelectTrigger>
            <SelectContent className="bg-black rounded-2xl flex justify-between w-[150px]">
              {[10, 20, 30, 50].map((size) => (
                <SelectItem
                  key={size}
                  value={String(size)}
                  className=" px-4 py-2 text-sm bg-[#2A2A2A] rounded-[0] cursor-pointer"
                >
                  {size} Transaction
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* SAYFALAMA */}
        <div className="flex items-center justify-center gap-2">
          {getPaginationRange(table.getState().pagination.pageIndex + 1, table.getPageCount()).map((page, idx) => (
            <Fragment key={idx}>
              {page === "..." ? (
                <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#3a3a3a] text-white text-lg">
                  &#x2022;&#x2022;&#x2022;
                </div>
              ) : (
                <button
                  onClick={() => table.setPageIndex(page - 1)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-xl text-white text-base border transition-colors",
                    page - 1 === table.getState().pagination.pageIndex
                      ? "bg-[#2A2A2A] border-[#3a3a3a]"
                      : "border-[#3a3a3a] hover:bg-[#2A2A2A]"
                  )}
                >
                  {page}
                </button>
              )}
            </Fragment>
          ))}
        </div>

        {/* ÖNCEKİ / SONRAKİ */}
        <div className="flex items-center gap-2">
          <Button
            className="p-[5px] text-white h-[40px]"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Image width={28} height={28} src={ArrowRight} alt="ArrowLeft" className="rotate-180" />
          </Button>

          <Button
            className="p-[5px] h-[40px]"
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <Image width={28} height={28} src={ArrowRight} alt="ArrowRight" />
          </Button>
        </div>
      </div>
    </div>
  )
}
