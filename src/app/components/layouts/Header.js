'use client'
import { useEffect, useRef, useState } from "react";
import SingleMenu from "./menu/SingleMenu";
import Modal from "../Modal";
import MultiMenu from "./menu/MultiMenu";

export default function Header() {

  // const [navbar, setNavbar] = useState(false);
  // const navbarRef = useRef(null);
  // const navRef = useRef(null);

  // const toggleNavbar = () => {
  //   setNavbar(!navbar);
  // };

  // useEffect(() => {
  //   const getHeight = navRef.current && navRef.current.scrollHeight;

  //   if (navbar) {
  //     navRef.current.classList.remove("max-h-0", "opacity-0");
  //     navRef.current.classList.add("max-h-screen", "opacity-100");

  //     navRef.current.classList.add("duration-500");
  //   } else {
  //     navRef.current.classList.remove("max-h-screen", "opacity-100");
  //     navRef.current.classList.add("max-h-0", "opacity-0");
      
  //     setTimeout(() => {
  //       navRef.current.classList.remove("duration-500");
  //     }, 500);
  //   }

  //   const handleClickOutside = (event) => {
  //     if (navRef.current && !navbarRef.current.contains(event.target) && !navRef.current.contains(event.target)) {
  //       setNavbar(false);
  //     }
  //   };

  //   const handleResize = () => {
  //     if (window.innerWidth > 768) {
  //       setNavbar(false);
  //     }
  //   };
  
  //   window.addEventListener("resize", handleResize);
  //   document.addEventListener('mousedown', handleClickOutside);
  
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };

  // }, [navbar, navRef, navbarRef]);

  const [navbar, setNavbar] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };
  
  useEffect(() => {

    const body = document.body;

    if (navbar) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    const clickInOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNavbar(false);
      }
    }

    document.addEventListener("mousedown", clickInOutside);

    return () => {
      body.style.overflow = '';
      document.addEventListener("mousedown", clickInOutside);
    }

  }, [navbar, navRef]);

  return (
    <>
      {/* <header ref={navbarRef} className="fixed z-50 inset-x-0 top-0 border-b border-zinc-800 bg-black">
          <nav className="xl:container xl:mx-auto">
          <div className="xl:mx-32 md:flex md:justify-between md:items-center py-4 px-4">
              <div className="flex justify-between items-center w-full">
              <a href="/" className="block">Cylare Next</a>
              <button onClick={toggleNavbar} className={`block ${!navbar && 'md:hidden'} text-white hover:text-zinc-400 duration-200`}><i className={`fa fa-fw fa-sm ${navbar ? 'fa-close' : 'fa-bars'}`}/></button>
              </div>
              <div ref={navRef} className="max-h-0 opacity-0 md:opacity-100 md:max-h-full overflow-hidden md:overflow-visible transition-[max-height, opacity]">
                <ul className={`md:flex md:items-center md:gap-4 pt-4 md:pt-0 mt-4 md:mt-0 border-t md:border-t-0 border-zinc-800`}>
                  <li><SingleMenu href="#" type="subMenu" text="Home"/></li>
                  <li><SingleMenu href="#" type="subMenu" text="Docs"/></li>
                  <li><SingleMenu href="#" type="subMenu" text="Templates"/></li>
                  <li><SingleMenu href="#" type="subMenu" text="Blog"/></li>
                  <li><SingleMenu href="#" type="subMenu" text="Abouts"/></li>
                  <li className="flex items-center gap-2 py-2 md:py-0">
                    <SignIn/>
                    <button type="button" className="btn btn-outline-primary">Sign Up</button>
                  </li>
                </ul>
              </div>
          </div>
          </nav>
      </header> */}
      {/* desktop navbar */}
      <header className="fixed z-50 inset-x-0 top-0 border-b border-zinc-800 bg-black">
        <nav className="xl:container xl:mx-auto">
          <div className="xl:mx-32 md:flex md:justify-between md:items-center py-4 px-4">
            <div className="flex justify-between items-center w-full">
              <a href="/" className="block">Cylare Next</a>
              <button onClick={toggleNavbar} className={`block ${!navbar && 'md:hidden'} text-white hover:text-zinc-400 duration-200`}><i className={`fa fa-fw fa-sm ${navbar ? 'fa-close' : 'fa-bars'}`} /></button>
            </div>
            <ul className="hidden md:flex md:items-center md:gap-4">
              <li><SingleMenu href="#" type="subMenu" text="Home" /></li>
              <li><SingleMenu href="#" type="subMenu" text="Docs" /></li>
              <li><SingleMenu href="#" type="subMenu" text="Templates" /></li>
              <li><SingleMenu href="#" type="subMenu" text="Blog" /></li>
              <li><SingleMenu href="#" type="subMenu" text="Abouts" /></li>
              <li className="flex items-center gap-2">
                <SignIn />
                <button className="btn btn-outline-primary w-full">Sign Up</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="py-7"></div>

      {/* Mobile navbar */}
      <div className={`${navbar ? 'fixed' : 'hidden'} inset-0 bg-black/50`}/>
      <nav className={`${navbar ? 'translate-x-0' : 'translate-x-full'} fixed md:hidden z-50 end-0 inset-y-0 transition duration-500`}>
        <button onClick={closeNavbar} className={`${navbar ? '-start-10' : '-start-0'} absolute top-1/2 -translate-y-1/2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-900 rounded px-2 py-12 text-white hover:text-zinc-400 duration-200`}><i className="fa fa-fw fa-sm fa-angles-right"/></button>
        <div ref={navRef} className="w-72 p-4 border-l border-l-zinc-800 bg-black h-full flex flex-col gap-4 overflow-y-scroll">
          <SingleMenu href="#" type="subMenu" text="Home" />
          <SingleMenu href="#" type="subMenu" text="Docs" />
          <SingleMenu href="#" type="subMenu" text="Templates" />
          <SingleMenu href="#" type="subMenu" text="Blog" />
          <SingleMenu href="#" type="subMenu" text="Abouts" />
          <SingleMenu href="#" type="mainMenu" text="Getting Started"/>
          <SingleMenu href="#" type="subMenu" text="Installation"/>
          <SingleMenu href="#" type="subMenu" text="Project Structure"/>
          <SingleMenu href="#" type="mainMenu" text="Building Your Application"/>
          <MultiMenu>
              <SingleMenu href="#" type="subMenu" text="Pages and Layouts"/>
              <SingleMenu href="#" type="subMenu" text="Dynamic Routes"/>
              <SingleMenu href="#" type="subMenu" text="Linking and Navigating"/>
              <SingleMenu href="#" type="subMenu" text="Redirecting"/>
              <SingleMenu href="#" type="subMenu" text="Custom App"/>
              <SingleMenu href="#" type="subMenu" text="Custom Document"/>
              <SingleMenu href="#" type="subMenu" text="API Routes"/>
              <SingleMenu href="#" type="subMenu" text="Custom Errors"/>
              <SingleMenu href="#" type="subMenu" text="Internationalization"/>
              <SingleMenu href="#" type="subMenu" text="Middleware"/>
          </MultiMenu>
          <MultiMenu>
              <SingleMenu href="#" type="subMenu" text="Pages and Layouts"/>
              <SingleMenu href="#" type="subMenu" text="Dynamic Routes"/>
              <SingleMenu href="#" type="subMenu" text="Linking and Navigating"/>
              <SingleMenu href="#" type="subMenu" text="Redirecting"/>
              <SingleMenu href="#" type="subMenu" text="Custom App"/>
              <SingleMenu href="#" type="subMenu" text="Custom Document"/>
              <SingleMenu href="#" type="subMenu" text="API Routes"/>
              <SingleMenu href="#" type="subMenu" text="Custom Errors"/>
              <SingleMenu href="#" type="subMenu" text="Internationalization"/>
              <SingleMenu href="#" type="subMenu" text="Middleware"/>
          </MultiMenu>
          <MultiMenu>
              <SingleMenu href="#" type="subMenu" text="Pages and Layouts"/>
              <SingleMenu href="#" type="subMenu" text="Dynamic Routes"/>
              <SingleMenu href="#" type="subMenu" text="Linking and Navigating"/>
              <SingleMenu href="#" type="subMenu" text="Redirecting"/>
              <SingleMenu href="#" type="subMenu" text="Custom App"/>
              <SingleMenu href="#" type="subMenu" text="Custom Document"/>
              <SingleMenu href="#" type="subMenu" text="API Routes"/>
              <SingleMenu href="#" type="subMenu" text="Custom Errors"/>
              <SingleMenu href="#" type="subMenu" text="Internationalization"/>
              <SingleMenu href="#" type="subMenu" text="Middleware"/>
          </MultiMenu>
          {/* <li className="flex flex-col items-center gap-y-2">
            <SignIn />
            <button type="button" className="btn btn-outline-primary w-full">Sign Up</button>
          </li> */}
        </div>
      </nav>
    </>
  );
}

export const SignIn = () => {

  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
      <button onClick={handleModal} type="button" className="btn btn-primary w-full">Sign In</button>

      <Modal
        onOpen={show}
        onClose={handleClose}
        header={false}
        title="Sign In Cylare"
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center w-full py-12">
            <h6 className="mb-2 text-3xl">Sign in</h6>
            <p className="mb-12 text-sm text-zinc-400">Please enter your email and password to<br />process your sign in information</p>
            <form>
              <div className="flex flex-col gap-y-2">
                <input type="text" className="px-2 py-1 rounded bg-zinc-950 ring-1 ring-zinc-800 focus:ring-blue-800 outline-none w-full duration-200 placeholder:text-sm" placeholder="Email"/>
                <input type="password" className="px-2 py-1 rounded bg-zinc-950 ring-1 ring-zinc-800 focus:ring-blue-800 outline-none w-full duration-200 placeholder:text-sm" placeholder="Password"/>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <p className="mt-4 text-sm text-zinc-400">Not have a account? <a href="#" className="text-blue-500 hover:text-blue-600 duration-200">Sign Up</a> now.</p>
          </div>
        </div>
      </Modal>
    </>
  )
}
