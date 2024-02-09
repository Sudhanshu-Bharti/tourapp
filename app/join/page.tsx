import * as React from "react"
import Link from "next/link"
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
import Navbar from "../components/Navbar"
export default function page() {
  return (
    <div className="flex justify-center items-center">    <Card className="w-[350px]">
     <Navbar/> 
    <CardHeader>
      <CardTitle>Create Profile</CardTitle>
      <CardDescription>Already a User?  <Link href='/' className="text-rose-600">Login</Link></CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="Your First Name" />
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Your Last Name" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="">Address</Label>
            <Input placeholder="Your Address" />

          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button>Submit</Button>
    </CardFooter>
  </Card>
</div>
  )
}
