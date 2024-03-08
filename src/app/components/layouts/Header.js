'use client'
import { useState } from "react";

export default function Header() {

  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <header className="fixed z-50 inset-x-0 top-0 border-b border-zinc-800 bg-black">
          <nav className="container mx-auto">
          <div className="md:mx-24 mx-8 flex justify-between items-center py-4 px-4">
              <div className="flex justify-between items-center w-full">
              <a href="/" className="block">Cylare Next</a>
              <button onClick={toggleNavbar} className={`block ${!navbar && 'md:hidden'} text-white hover:text-zinc-400 duration-200`}><i className={`fa fa-fw fa-sm ${navbar ? 'fa-close' : 'fa-bars'}`}/></button>
              </div>
              <ul id="navbar" className={`${navbar ? 'bg-black/75 backdrop-blur-sm px-12 py-4 flex flex-col gap-y-2 absolute inset-x-0 top-14 border-b border-zinc-800 z-50' : 'hidden md:flex items-center gap-4'}`}>
              <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Home</a></li>
              <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Docs</a></li>
              <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Templates</a></li>
              <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Blog</a></li>
              <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Abouts</a></li>
              </ul>
          </div>
          </nav>
      </header>
      <div className="py-7"></div>
    </>
  );
}
