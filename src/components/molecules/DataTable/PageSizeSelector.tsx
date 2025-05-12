interface PageSizeSelectorProps {
  pageSize: number
  setPageSize: (value: number) => void
}

export default function PageSizeSelector({ pageSize, setPageSize }: PageSizeSelectorProps) {
  return (
    <div className="text-xs text-muted-foreground flex gap-1 items-center">
      Rows per page:
      <select
        className="bg-transparent outline-none border-none"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 20, 30, 40, 50].map((size) => (
          <option key={size} value={size} className="text-black">
            {size}
          </option>
        ))}
      </select>
    </div>
  )
}
