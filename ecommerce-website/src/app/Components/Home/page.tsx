import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="logo">
          <Image src="/newlogo.jpg" alt="Danish Garment Logo" width={50} height={50} />
        </div>
        {/* Responsive Navbar: Stack links on smaller screens */}
        <ul className=" md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-yellow-500 pl-6">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">About</a>
          </li>
          <li>
            <a href="#products" className="hover:text-yellow-500">Products</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section with Responsive Text */}
      {/* <section id="home" className="bg-beige-50 text-gray-900 text-center py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to Danish Garment</h1>
        <p className="mt-4 text-lg md:text-xl">Discover premium clothing with style.</p>
      </section> */}
    </>
  );
}


