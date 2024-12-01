import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Brand Info */}
    <div>
      <h2 className="text-xl font-bold mb-4">Danish Garment</h2>
      <p className="text-gray-400">Elevating fashion with quality garments for men, women, and children. Discover your style with us.</p>
    </div>

    {/*Quick Links */}
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Shop Men</a></li>
        <li><a href="#" className="hover:text-gray-300">Shop Women</a></li>
        <li><a href="#" className="hover:text-gray-300">Shop Children</a></li>
        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </div>

    {/*Social Media & Newsletter */}
    <div>
      <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
      <p className="text-gray-400 mb-4">Follow us on social media and subscribe to our newsletter for the latest updates.</p>
      <div className="flex space-x-4 mb-4">
        <a href="https://www.facebook.com"  target="blank" className="text-gray-400 hover:text-white"><i><FontAwesomeIcon icon={faFacebook}/></i></a>
        <a href="https://www.instagram.com" target="blank" className="text-gray-400 hover:text-white"><i><FontAwesomeIcon icon={faInstagram}/></i></a>
        <a href="https://www.twitter.com" target="blank" className="text-gray-400 hover:text-white"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
        <a href="https://www.youtube.com" target="blank" className="text-gray-400 hover:text-white"><i><FontAwesomeIcon icon={faYoutube}/></i></a>
      </div>
      <form className="flex space-x-2">
        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none" />
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white">Subscribe</button>
      </form>
    </div>
  </div>
  
  {/*Copyright */}
  <div className="text-center text-gray-500 mt-8">
    <p>&copy; 2024 Danish Garment. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer