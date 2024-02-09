import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import img1 from './pngwing.com (1).png'
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white p-4">

    <div className='flex flex-row gap-9'>
      <div>
      <Image 
                    src={img1}
                    height="50"
                    width="50"
                    alt="GFG logo served from external URL"
                /> 
      </div>
      <Link href='/'><Button>Home</Button></Link>
      <Link href='/about'><Button>about</Button></Link>
      <Link href='/join'><Button>Join Us as Guide</Button></Link>

    </div>

    <Separator className='my-1'  />
    </nav>
  )
}
