// import Link from "next/link";
// import Navbar from "../Navbar/page"

// export default function Home() {
//   return (
//     <div className="bg-cyan-400 h-screen w-screen absolute bg-cover">

//       {/* Name Section */}
//       <p className="absolute left-9 top-4 w-[43px] h-[42px] text-2xl font-serif text-black border-2 border-black p-2">
//         Mahar <br /> Ahmad <br /> Sarfraz
//       </p>
//       <Navbar/>
//       <p>
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />

//       </p>
//       {/* Title */}
//       <p className=" text-center justify-center text-5xl font-semibold text-black">
//         &lt;About Me/&gt;
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//        {/* Rectangle Section */}
//        <div className=" text-center justify-center  top-[122px] w-[382px] h-[117px] bg-purple-400">
      
//       {/* Description Text */}
//       <p className=" left-[103px] top-[126px] text-xs font-bold text-black">
//         Hi! I’m Mahar, a passionate software engineer who loves crafting beautiful functional web applications with expertise in
        
//       <br />Next.js, Tailwind CSS, and Typescript. I enjoy building seamless digital experiences. Let’s create something amazing together.
//       </p>
//       </div>
     

//       {/* Action Buttons */}
//       <div className=" absolute left-[91px] top-[271px] w-[137px] h-[44px] bg-red-600 rounded-[30px]"></div>
//       <div className=" absolute left-[325px] top-[271px] w-[137px] h-[44px] bg-red-600 rounded-[30px]"></div>

//       {/* Button Text */}
//       <Link href="/contact" className=" absolute left-[329px] top-[275px] text-2xl font-bold text-yellow-400">Contact Me</Link>
//       <Link href="/project" className=" absolute left-[101px] top-[277px] text-2xl font-bold text-yellow-400">View Project</Link>
//     </div>
//   );
// }

import Link from "next/link";
import Navbar from "../Navbar/page";

export default function Home() {
  return (
    <div className="bg-cyan-400 h-screen w-screen bg-cover flex flex-col items-center justify-center relative">

      {/* Name Section */}
      <p className="absolute left-9 top-4 w-auto h-auto text-2xl font-serif text-black border-2 border-black p-2">
        Mahar <br /> Ahmad <br /> Sarfraz
      </p>

      <Navbar />

      {/* Title */}
      <p className="text-center text-5xl font-semibold text-black mt-16">
        &lt;About Me/&gt;
      </p>

      {/* Rectangle Section */}
      <div className="mt-12 w-[90%] sm:w-[382px] h-[117px] bg-purple-400 rounded-lg mx-auto flex items-center justify-center">
        {/* Description Text */}
        <p className="text-center text-xs font-bold text-black px-4">
          Hi! I’m Mahar, a passionate software engineer who loves crafting beautiful, functional web applications with expertise in
          <br />
          Next.js, Tailwind CSS, and Typescript. I enjoy building seamless digital experiences. Let’s create something amazing together.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-16 flex gap-4">
        <Link
          href="/contact"
          className="w-[137px] h-[44px] bg-red-600 rounded-[30px] flex items-center justify-center text-2xl font-bold text-yellow-400"
        >
          Contact Me
        </Link>
        <Link
          href="/project"
          className="w-[137px] h-[44px] bg-red-600 rounded-[30px] flex items-center justify-center text-2xl font-bold text-yellow-400"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}