import { Skeleton } from "@/components/ui/skeleton";
import { SliderCardSkeleton } from "./slider-card-skeleton";

export function HomePageSkeleton() {
  return Array.from({ length: 3 }).map((_, i) => (
    <div key={i} className="mb-4 space-y-4">
      <div className="border-b pb-2">
        <Skeleton className="h-8 w-72 sm:h-9 md:h-10" />
      </div>

      <div className="grid grid-flow-col grid-rows-2 place-content-start pb-6 sm:gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <SliderCardSkeleton key={i} />
        ))}
      </div>
    </div>
  ));
}