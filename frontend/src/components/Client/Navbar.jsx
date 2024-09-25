import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import img from '../../assets/logo.png'
import { FaChevronDown } from 'react-icons/fa'; 

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);


    // hamburger ka menu
    // const [isVegOpen, setIsVegOpen] = useState(false);
    // const [isNonVegOpen, setIsNonVegOpen] = useState(false);
    // const [isChineseOpen, setIsChineseOpen] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    // const [isAboutOpen, setIsAboutOpen] = useState(false);
  
    // GSAP animation for navbar
    // useEffect(() => {
    //   gsap.from(".navbar", { duration: 1.5, y: -100, opacity: 0, ease: "bounce" });
    // }, []);
  
    // Toggle dropdowns
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
    const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
    const toggleContact = () => setIsContactOpen(!isContactOpen);
  return (
    <>
    <div>
    <div className="fixed top-0 left-0 w-full text-center mb-[100px] text-white py-3 bg-yellow-800 z-50">
  <p className="text-sm font-semibold inline-block">
    Tasty sauces available at London Drugs –{' '}
    <span className="underline cursor-pointer hover:text-white">
      Learn More
    </span>
  </p>
</div>


      
        <div>
        <nav className="navbar bg-black text-white fixed w-full shadow-lg z-10 -top-[-48px]">
  <div className="container mx-auto flex justify-between items-center p-6">
    {/* Left Side - Logo */}
    <div className="text-3xl font-bold">
    <Link to='/'><img src={img} alt="Logo" className="absolute bottom-[-70px] left-[-1px] h-60" /></Link>
      {/* <Link to="/" className="hover:text-yellow-800 transition-colors duration-300">Indian Rasoi</Link> */}
    </div>

    {/* Middle - Links with dropdowns */}
    <ul className="hidden lg:flex space-x-6 font-semibold text-lg">
    <li className="relative group">
  <button
    onClick={toggleMenu}
    className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none"
  >
    Menu
  </button>
  {isMenuOpen && (
    <ul className="absolute left-0 top-8 bg-black text-white shadow-lg p-4 space-y-2">
      <li>
        <Link 
          to="/vegnav" 
          onClick={() => setIsMenuOpen(false)} // Close the menu on click
        >
          Veg
        </Link>
      </li>
      <li>
        <Link 
          to="/nonvegnav" 
          onClick={() => setIsMenuOpen(false)} // Close the menu on click
        >
          Non-veg
        </Link>
      </li>
      <li>
        <Link 
          to="/chinese" 
          onClick={() => setIsMenuOpen(false)} // Close the menu on click
        >
          Chinese
        </Link>
      </li>
    </ul>
  )}
</li>

      <li><Link to="/location" className="hover:text-yellow-800 transition-colors duration-300">Locations</Link></li>
      <li className="relative group">
        <Link
         to='/about'
          
          className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none"
        >
          About
        </Link>
        
      </li>
      

      <li className="relative group">
        <Link to='/contact'
          onClick={toggleContact}
          className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none"
        >
          Contact Us
        </Link>
        
      </li>

      <li className="relative group">
        <Link to='/menupage'
          onClick={toggleContact}
          className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none"
        >
          Menu List
        </Link>
        
      </li>
    </ul>

    {/* Right Side - Buttons */}
    <div className="hidden lg:flex space-x-4">
      <button className="border border-yellow-600 bg-black text-white px-4 py-2 rounded-lg font-semibold transition-transform transform hover:bg-yellow-600 hover:scale-105 duration-300">
        Order Now
      </button>
     
    </div>



    {/* Hamburger Menu for Mobile */}
    <div className="lg:hidden">
      <button className="text-white focus:outline-none" onClick={toggleMenu}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
       <div className="lg:hidden bg-skin-color p-4">
       <ul className="space-y-4 font-semibold">
         <li>
           {/* Button to toggle dropdown */}
           <button
             onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state
             className="hover:text-black flex items-center w-full"
           >
             Menu
             <svg
               className={`ml-2 w-4 h-4 transform ${
                 isMenuOpen ? "rotate-180" : ""
               } transition-transform duration-300`}
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M19 9l-7 7-7-7"
               />
             </svg>
           </button>
 
           {/* Dropdown menu, shown when isMenuOpen is true */}
           {isMenuOpen && (
             <ul className="space-y-2 pl-4">
               <li>
                 <Link 
                   to="/vegnav"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                 >
                   Veg
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/nonvegnav"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                 >
                   Non Veg
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/chinese"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                 >
                   Chinese
                 </Link>
               </li>
             </ul>
           )}
         </li>
 
         {/* Other Links */}
         <li>
           <Link
             to="/location"
             className="hover:text-white"
             onClick={() => setIsMenuOpen(false)} // Close menu on click
           >
             Location
           </Link>
         </li>
         <li>
           <Link
             to="/about"
             className="hover:text-white"
             onClick={() => setIsMenuOpen(false)} // Close menu on click
           >
             About
           </Link>
         </li>
         <li>
           <Link
             to="/contact"
             className="hover:text-white"
             onClick={() => setIsMenuOpen(false)} // Close menu on click
           >
             Contact Us
           </Link>
         </li>
         <li>
           <Link
             to="/menupage"
             className="hover:text-white"
             onClick={() => setIsMenuOpen(false)} // Close menu on click
           >
            Menu List
           </Link>
         </li>
 
         {/* Buttons for Order */}
         <div className="space-y-4">
           <button className="bg-black text-white w-full py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300">
             Order Now
           </button>
         </div>
       </ul>
     </div>
  )}
</nav>

    </div>
    </div>
    </>
  )
}
