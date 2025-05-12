import { Button } from "@/components/ui/button"
import { DataTableFilterProps } from "./types"

export default function DataTableFilter({ filter, setFilter }: DataTableFilterProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-white font-medium text-[24px]">Earnings</div>
      <div className="flex gap-0 bg-primaryShiny p-[4px] rounded-xl">
        {["1d", "1w", "1m", "1y"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "select"}
            onClick={() => setFilter(f as any)}
            className="border-none w-[36px] h-[32px] rounded-md"
          >
            {f.toUpperCase()}
          </Button>
        ))}
        <Button
          className="border-none w-[36px] h-[32px] rounded-md"
          variant={filter ? "select" : "default"}
          onClick={() => setFilter(null)}
        >
          ALL
        </Button>
      </div>
    </div>
  )
}
