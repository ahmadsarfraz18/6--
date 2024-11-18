


// Ensure "use client" is at the top for client-side rendering in Next.js
'use client';
import Navbar from "../Navbar/page"

import {motion} from "framer-motion"; // Import motion from framer-motion

// Define variants for animation (staggerContainer and fadeInUp)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animations for child elements
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SkillsSection() {
  return (
    <motion.div
      id="skills"
      className="bg-cyan-400 h-screen w-screen absolute bg-cover py-20 px-4"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
    >
        <motion.div>
            <Navbar/>
        </motion.div>
           <motion.div className="absolute left-9 top-4 text-2xl font-serif text-black border-2 border-black p-2 ">
  Mahar <br /> Ahmad <br /> Sarfraz
</motion.div>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-gray-800">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
         
          <motion.div
            className="bg-slate-400 rounded-xl shadow-xl p-6 shadow-black hover:animate-bounce "
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-2 text-black">HTML</h2>
            
          </motion.div>
          <motion.div
            className="bg-slate-400 rounded-xl shadow-xl p-6 shadow-black hover:animate-bounce"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-2 text-black">CSS</h2>
            
          </motion.div>
          <motion.div
            className="bg-slate-400 rounded-xl shadow-xl p-6 shadow-black hover:animate-bounce"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-2 text-black">JavaScript</h2>
            
          </motion.div>
          <motion.div
            className="bg-slate-400 rounded-xl shadow-xl p-6 shadow-black hover:animate-bounce"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-2 text-black">React</h2>
            
          </motion.div>
          <motion.div
            className="bg-slate-400 rounded-xl shadow-xl p-6 shadow-black hover:animate-bounce"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-2 text-black">Next.js</h2>
            
          </motion.div>
          <motion.div
            className="bg-slate-400 rounded-xl shadow-xl p-6 shadow-black hover:animate-bounce"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-2 text-black ">Tailwind CSS</h2>
            
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

      
