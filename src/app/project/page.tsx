
import React from 'react'
import Navbar from "../Navbar/page"


export default function () {
  return (
    <div className="bg-cyan-400 h-screen w-screen absolute bg-cover">
       <p className="absolute left-9 top-4 text-2xl font-serif text-black border-2 border-black p-2">
        Mahar <br /> Ahmad <br /> Sarfraz
      </p>
        <div>
            <Navbar/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className=" flex flex-col items-center justify-center">
  {/* Title */}
  <div className="text-center text-5xl font-serif mb-6">
    Projects
  </div>
  <br />
  <br />

  {/* Image */}
  <div className="flex items-center justify-center">
    
  </div>
  <p className=' font-serif text-xl text-black'>
    a dynamic resume builder created 
  </p>
  <p className='font-serif text-xl text-black'>
  with the help of  next.js and tailwind css
  </p>
</div>

    


    </div>
  )
}
