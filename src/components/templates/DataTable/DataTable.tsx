"use client"

import * as React from "react"
import Image from "next/image"
import { Fragment } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from '@/assets/icons'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, } from "@tanstack/react-table"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export default function DataTable<TData, TValue>({ columns, data, }: DataTableProps<TData, TValue>) {

  const [pageSize, setPageSize] = React.useState(10)
  const [filter, setFilter] = React.useState<"1D" | "1W" | "1M" | "1Y" | null>(null)
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
        case "1g":
          return now - itemTime <= 86400000
        case "1h":
          return now - itemTime <= 3600000
        case "1a":
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
        <div className="text-white font-medium text-sm sm:text-base">Earnings</div>
        <div className="flex gap-2">
          {["1D", "1W", "1M", "1Y"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f as any)}
            >
              {f.toUpperCase()}
            </Button>
          ))}
          <Button onClick={() => setFilter(null)}>ALL</Button>
        </div>
      </div>

      {/* TABLO */}
      <div className="rounded-xl bg-[#181818] p-5  ">
        <Table className="border-separate border-spacing-y-2 w-full [&_th]:bg-transparent [&_td]:bg-[#282828] [&_td]:text-white [&_th]:text-white rounded-xl">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => {
              const isFirst = rowIndex === 0
              const isLast = rowIndex === table.getRowModel().rows.length - 1

              return (
                <TableRow
                  key={row.id}
                  className={`h-14 rounded-2xl bg-[#282828] ${isFirst ? "rounded-t-xl" : ""
                    } ${isLast ? "rounded-b-xl" : ""} overflow-hidden`}
                >
                  {row.getVisibleCells().map((cell, cellIndex, cells) => {
                    const isFirstCell = cellIndex === 0
                    const isLastCell = cellIndex === cells.length - 1

                    return (
                      <TableCell
                        key={cell.id}
                        className={cn(
                          "text-white px-4 py-3 bg-[#282828]",
                          isFirstCell && "rounded-l-2xl",
                          isLastCell && "rounded-r-2xl"
                        )}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
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
            <SelectTrigger className="w-[160px] h-[40px] rounded-full border border-gray-700 bg-[#1F1F1F] text-sm text-white px-4">
              <SelectValue placeholder="10 Transaction" />
            </SelectTrigger>
            <SelectContent className="bg-black">
              {[10, 20, 30, 50].map((size) => (
                <SelectItem
                  key={size}
                  value={String(size)}
                  className="px-4 py-2 text-sm bg-[#2A2A2A]"
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
          {/* Önceki */}
          <Button
            className="p-[5px] text-white h-[40px]"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Image width={28} height={28} src={ArrowRight} alt="ArrowLeft" className="rotate-180" />
          </Button>

          {/* Sonraki */}
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
