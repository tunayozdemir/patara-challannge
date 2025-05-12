import { ColumnDef } from "@tanstack/react-table"
import { Table } from "@tanstack/react-table"

export type FilterRange = "1d" | "1w" | "1m" | "1y" | null

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export interface DataTableFilterProps {
  filter: FilterRange
  setFilter: (value: FilterRange) => void
}

export interface DataTableBodyProps<TData, TValue> {
  table:  Table<TData>
}


export interface DataTablePaginationProps {
  table: any
  pageSize: number
  setPageSize: (value: number) => void
}

export interface PageSizeSelectorProps {
  pageSize: number
  setPageSize: (value: number) => void
}

export interface PaginationNavProps {
  table: any
}