import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import img1 from './pngwing.com (1).png'
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white">
   <div className="max-w-5xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-gray-900 font-semibold">Logo</span>
      <div className="flex space-x-4 text-gray-900">
      <Link href='/'><Button>Home</Button></Link>
      <Link href='/about'><Button>about</Button></Link>
      <Link href='/join'><Button>Join Us as Guide</Button></Link>
      </div>
    </div>
  </div>
    <Separator className='my-1'  />
    </nav>
  )
}
