
import React from 'react'
import Navbar from "../app/Navbar/page"

export default function page() {
  return (
    <div className="bg-cyan-400 h-screen w-screen absolute bg-cover">
      <div >
      <p className="absolute left-9 top-4 text-2xl font-serif text-black border-2 border-black p-2">
        Mahar <br /> Ahmad <br /> Sarfraz
      </p>
      <Navbar />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=' text-gradient-to-r from-cyan-400 to-lime-400 font-serif text-6xl px-4 py-2 '>
        Welcome To My PortFolio
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className=' font-serif text-2xl shadow-black'>
        Hello ! Im Maher Ahmed Sarfarz The Front Develpor ...
      </p>
      <p className='font-serif text-2xl  shadow-black'>
        Im maher ahmed sarfarz a front end develpor passionate about building functional websites with the help of 
      </p>
      <p className='font-serif text-2xl  shadow-black'>
        Nextjs and tailwind css and typescript . Lets create something amazing
        
      </p>
    </div>
  )
}
