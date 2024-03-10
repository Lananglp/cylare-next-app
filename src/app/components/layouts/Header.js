'use client'
import { useEffect, useRef, useState } from "react";

export default function Header() {

  const [navbar, setNavbar] = useState(false);
  const navbarRef = useRef(null);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    if (navbar) {
      navRef.current.classList.remove("max-h-0", "opacity-0");
      navRef.current.classList.add("max-h-lvh", "opacity-100");

      navRef.current.classList.add("duration-500");
    } else {
      navRef.current.classList.remove("max-h-lvh", "opacity-100");
      navRef.current.classList.add("max-h-0", "opacity-0");
      
      setTimeout(() => {
        navRef.current.classList.remove("duration-500");
      }, 500);
    }

    const handleClickOutside = (event) => {
      if (navRef.current && !navbarRef.current.contains(event.target) && !navRef.current.contains(event.target)) {
        setNavbar(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbar(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [navbar, navRef, navbarRef]);


  return (
    <>
      {/* <header className="fixed z-50 inset-x-0 top-0 border-b border-zinc-800 bg-black">
          <nav className="container mx-auto">
          <div className="md:mx-24 mx-8 flex justify-between items-center py-4 px-4">
              <div className="flex justify-between items-center w-full">
              <a href="/" className="block">Cylare Next</a>
              <button onClick={toggleNavbar} className={`block ${!navbar && 'md:hidden'} text-white hover:text-zinc-400 duration-200`}><i className={`fa fa-fw fa-sm ${navbar ? 'fa-close' : 'fa-bars'}`}/></button>
              </div>
              <div ref={navRef} className="max-h-0 md:max-h-lvh max-w-0 md:max-w-full overflow-hidden absolute inset-x-0 top-14 bg-black/50 backdrop-blur-sm z-50 border-b border-zinc-800 transition duration-500">
                <ul className={`${navbar ? 'px-12 py-4' : 'flex items-center gap-4'} transition-all duration-500`}>
                  <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Home</a></li>
                  <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Docs</a></li>
                  <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Templates</a></li>
                  <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Blog</a></li>
                  <li className="text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Abouts</a></li>
                </ul>
              </div>
          </div>
          </nav>
      </header> */}
      <header ref={navbarRef} className="fixed z-50 inset-x-0 top-0 border-b border-zinc-800 bg-black">
          <nav className="xl:container xl:mx-auto">
          <div className="xl:mx-32 md:flex md:justify-between md:items-center py-4 px-4">
              <div className="flex justify-between items-center w-full">
              <a href="/" className="block">Cylare Next</a>
              <button onClick={toggleNavbar} className={`block ${!navbar && 'md:hidden'} text-white hover:text-zinc-400 duration-200`}><i className={`fa fa-fw fa-sm ${navbar ? 'fa-close' : 'fa-bars'}`}/></button>
              </div>
              <div ref={navRef} className="max-h-0 opacity-0 md:opacity-100 md:max-h-lvh overflow-hidden md:overflow-visible transition-[max-height, opacity]">
                <ul className={`md:flex md:items-center md:gap-4 pt-4 md:pt-0 mt-4 md:mt-0 border-t md:border-t-0 border-zinc-800`}>
                  <li className="my-1 text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Home</a></li>
                  <li className="my-1 text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Docs</a></li>
                  <li className="my-1 text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Templates</a></li>
                  <li className="my-1 text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Blog</a></li>
                  <li className="my-1 text-zinc-400 hover:text-white text-sm hover:translate-x-1 duration-200"><a href="#" className="block w-full">Abouts</a></li>
                </ul>
              </div>
          </div>
          </nav>
      </header>
      <div className="py-7"></div>
    </>
  );
}
