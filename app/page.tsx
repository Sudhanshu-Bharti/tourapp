import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Navbar from "./components/Navbar"
import Sliding from "./components/sliding";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
        <Navbar/> 
          <Sliding/>
    </main>
  );
}
