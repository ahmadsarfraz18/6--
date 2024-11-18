import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='font-bold '>
 <Link href="/"  className="absolute left-[190px] top-4 text-xs font-bold text-black px-2 py-3 rounded-sm shadow-md shadow-black hover:text-cyan-600">Home</Link>
<Link href="/about" className="absolute left-[264px] top-4 text-xs font-bold text-black px-2 py-3 rounded-sm shadow-md shadow-black hover:text-cyan-600">About</Link>
<Link href="/project" className="absolute left-[338px] top-4 text-xs font-bold text-black px-2 py-3 rounded-sm shadow-md shadow-black hover:text-cyan-600">Projects</Link>
<Link href="/contact" className="absolute left-[483px] top-4 text-xs font-bold text-black px-2 py-3 rounded-sm shadow-md shadow-black hover:text-cyan-600">Contact</Link>

    </div>
  )
}
