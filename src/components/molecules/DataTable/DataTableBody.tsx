import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { flexRender } from "@tanstack/react-table"
import { DataTableBodyProps } from "./types"

export default function DataTableBody<TData, TValue>({ table }: DataTableBodyProps<TData, TValue>) {
  return (
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
  )
}
