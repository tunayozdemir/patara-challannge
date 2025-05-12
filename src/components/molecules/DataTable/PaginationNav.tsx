import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationNavProps {
  table: any
}

export default function PaginationNav({ table }: PaginationNavProps) {
  return (
    <div className="flex items-center space-x-6 lg:space-x-8">
      <div className="flex w-[100px] items-center justify-center text-sm font-medium text-white">
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="rounded-xl bg-[#141414] text-white border-none w-9 h-9 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="rounded-xl bg-[#141414] text-white border-none w-9 h-9 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
