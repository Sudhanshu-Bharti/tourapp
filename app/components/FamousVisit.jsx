import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function FamousVisit() {
  const [isOpen, setIsOpen] = React.useState(false)

  const famousCities = [
    { city: "Paris", rating: "High" },
    { city: "London", rating: "Medium" },
    { city: "Tokyo", rating: "High" },
    { city: "New York", rating: "Medium" },
  ]

  return (
    <div className="bg-favBlue">
    <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2 "
        >
                <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">Famous Cities</h4>
                    <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                    </CollapsibleTrigger>
                </div>
        <CollapsibleContent className="space-y-2">
            {famousCities.map((city, index) => (
            <div key={index} className="rounded-md border px-4 py-3 font-mono text-sm">
                <span className="font-semibold">{city.city}</span>: {city.rating}
            </div>
            ))}
        </CollapsibleContent>
        </Collapsible>
    </div>
   
  )
}
