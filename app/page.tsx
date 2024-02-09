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
import Sliding from "./components/Sliding";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
         <div className="flex flex-col min-h-screen">
          <Navbar />
      <main className="flex-grow">
        <Sliding />
      </main>
      <Footer />
    </div>
    </main>
  );
}
