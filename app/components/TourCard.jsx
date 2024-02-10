import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Imaage1 from "/public/57.jpg"
export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <Image src={Imaage1}></Image>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <h3>Sana</h3>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h4>⭐⭐⭐⭐ (100) </h4>
                <h4> </h4>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">More Info</Button>
        <Button>Contact</Button>
      </CardFooter>
    </Card>
  )
}
