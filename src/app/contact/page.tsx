
import ContactForm from "../contform/page";

import React from 'react'
import Navbar from "../Navbar/page"

function page() {
  return (
    <div className="bg-cyan-400 h-screen w-screen absolute bg-cover">
      <Navbar/>
      <p className="absolute left-9 top-4 text-2xl font-serif text-black border-2 border-black p-2 ">
  Mahar <br /> Ahmad <br /> Sarfraz
</p>

      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
        <ContactForm />
    </div>
  )
}

export default page
