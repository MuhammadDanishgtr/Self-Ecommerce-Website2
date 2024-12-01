import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="logo">
          <Image src="/newlogo.jpg" alt="Danish Garments" width={60} height={60} />
        </div>
        {/* Responsive Navbar: Stack links on smaller screens */}
        <ul className=" md:flex space-x-6">
          <li>
            <a href="./Components/Hero" target='blank' className="hover:text-yellow-500 pl-6">Home</a>
          </li>
          <li>
            <a href="./Components/About" target='blank' className="hover:text-yellow-500">About</a>
          </li>
          <li>
            <a href="./Components/Products" target='blank' className="hover:text-yellow-500">Products</a>
          </li>
          <li>
            <a href="./Components/Contact" target="blank" className="hover:text-yellow-500">Contact</a>
          </li>
        </ul>
      </nav>

    </>
  );
}


