import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  return (
    <div className=''>
    <div className='flex flex-row gap-9'>
      <div>
        <img src="../../public/next.svg" />
      </div>
      <Link href='/'><Button>Home</Button></Link>
      <Link href='/about'><Button>about</Button></Link>
      <Link href='/join'><Button>Join Us as Guide</Button></Link>

    </div>

    <Separator className='my-1'  />
    </div>
  )
}
