"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pageSize, setPageSize] = React.useState(10)
  const [filter, setFilter] = React.useState<"1g" | "1h" | "1a" | "1y" | null>(null)
  const [filteredData, setFilteredData] = React.useState(data)

  // client-side filter (SSR'den sonra hesaplanır)
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
          return now - itemTime <= 86400000 // 1 gün
        case "1h":
          return now - itemTime <= 3600000 // 1 saat
        case "1a":
          return now - itemTime <= 604800000 // 1 hafta
        case "1y":
          return now - itemTime <= 31536000000 // 1 yıl
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

  return (
    <div className="space-y-4">
      {/* FİLTRE BUTONLARI */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {["1g", "1h", "1a", "1y"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f as any)}
            >
              {f.toUpperCase()}
            </Button>
          ))}
          <Button variant="ghost" onClick={() => setFilter(null)}>Temizle</Button>
        </div>
      </div>

      {/* TABLO */}
      <div className="rounded-md border">
        <Table>
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
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ALT BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
                  className="px-4 py-2 text-sm bg-[#2A2A2A] bg-back"
                >
                  {size} Transaction
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* SAYFALAMA */}
        <div className="flex flex-wrap items-center justify-center gap-1">
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <Button
              key={i}
              variant={i === table.getState().pagination.pageIndex ? "default" : "outline"}
              size="sm"
              onClick={() => table.setPageIndex(i)}
              className="px-3"
            >
              {i + 1}
            </Button>
          ))}
        </div>

        {/* ÖNCEKİ / SONRAKİ */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Önceki
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Sonraki
          </Button>
        </div>
      </div>
    </div>
  )
}
