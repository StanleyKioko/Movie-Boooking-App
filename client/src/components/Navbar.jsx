import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 backdrop-blur">
      <Link to="/" className="max-md:flex-1">
        <img src={logo} alt="Logo" className="w-36 h-auto" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row items-center gap-10">
        <Link to="/" onClick={() => scrollTo(0, 0)}>Home</Link>
        <Link to="/movies" onClick={() => scrollTo(0, 0)}>Movies</Link>
        <Link to="/" onClick={() => scrollTo(0, 0)}>Theaters</Link>
        <Link to="/" onClick={() => scrollTo(0, 0)}>Releases</Link>
        <Link to="/favorites" onClick={() => scrollTo(0, 0)}>Favorites</Link>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-black/90 z-50 flex flex-col items-start gap-8 px-8 py-10 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <XIcon className='absolute top-6 right-6 w-6 h-6 cursor-pointer text-white' onClick={() => setIsOpen(false)} />
        <Link to="/" className="text-white" onClick={() => {scrollTo(0, 0); setIsOpen(false)}}>Home</Link>
        <Link to="/movies" className="text-white" onClick={() => {scrollTo(0, 0); setIsOpen(false)}}>Movies</Link>
        <Link to="/" className="text-white" onClick={() => {scrollTo(0, 0); setIsOpen(false)}}>Theaters</Link>
        <Link to="/" className="text-white" onClick={() => {scrollTo(0, 0); setIsOpen(false)}}>Releases</Link>
        <Link to="/favorites" className="text-white" onClick={() => {scrollTo(0, 0); setIsOpen(false)}}>Favorites</Link>
      </div>

      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Login</button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={() => setIsOpen(true)} />
    </div>
  )
}

export default Navbar