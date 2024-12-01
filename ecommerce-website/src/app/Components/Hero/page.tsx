import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <> 
       {/* Hero Section with Responsive Text */}
      <section id="home" className="bg-beige-50 text-gray-900 text-center md:py-24 h-screen">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">Welcome to Danish Garment</h1>
        <p className="mt-4 text-lg md:text-xl font-semibold ">Discover premium clothing with style.</p>

<Link href="#">
<button className=" mt-4 mr-8 bg-[#4a7a8c] text-white border-2 border-[#2c2c2c] py-2 px-4 rounded-3xl transition-all hover:bg-[#5b8ea0] hover:border-[#1f1f1f] hover:shadow-md w-[200px]">
  Shop Men
</button>
</Link>
<Link href="#">
<button className=" mt-4 mr-8 bg-[#4a7a8c] text-white border-2 border-[#2c2c2c] py-2 px-4 rounded-3xl transition-all hover:bg-[#5b8ea0] hover:border-[#1f1f1f] hover:shadow-md w-[200px]">
  Shop Women
</button>
</Link>
<Link href="#">
<button className=" mt-4  mr-8 bg-[#4a7a8c] text-white border-2 border-[#2c2c2c] py-2 px-4 rounded-3xl transition-all hover:bg-[#5b8ea0] hover:border-[#1f1f1f] hover:shadow-md w-[200px]">
  Shop Children
</button>
</Link>
      <div>
        <img src="/garments.jpg" alt="designs" className='mt-4 h-[380px] w-screen'/> 
      </div>
      </section>
    </>
  )
}

export default Hero