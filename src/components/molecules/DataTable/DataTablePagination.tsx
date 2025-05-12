import { DataTablePaginationProps } from "./types"
import PageSizeSelector from "./PageSizeSelector"
import PaginationNav from "./PaginationNav"

export default function DataTablePagination({ table, pageSize, setPageSize }: DataTablePaginationProps) {
  return (
    <div className="flex items-center justify-between">
      <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      <PaginationNav table={table} />
    </div>
  )
}
