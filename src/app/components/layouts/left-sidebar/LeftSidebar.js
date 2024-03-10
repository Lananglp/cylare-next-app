'use client'
import React, { useEffect, useRef, useState } from 'react'
import MultiMenu from '../menu/MultiMenu'
import SingleMenu from '../menu/SingleMenu'
import Link from 'next/link'

function LeftSidebar() {

    const [show, setShow] = useState(false);
    const menuButtonRef = useRef(null);
    const menuRef = useRef(null);
    const menuTransitionRef = useRef(null);

    const toggleMenu = () => {
        setShow(!show);
    }

    useEffect(() => {
        const body = document.body;
        if (show) {
            body.classList.add("overflow-hidden");
            menuTransitionRef.current.classList.add("duration-500");
        } else {
            body.classList.remove("overflow-hidden");

            menuTransitionRef.current.classList.add("duration-500");
            setTimeout(() => {
                menuTransitionRef.current.classList.remove("duration-500");
            }, 500);
        }

        const resizeMenu = () => {
            if (window.innerWidth > 768) {
                setShow(false);
            }
        }

        const clickInOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && !menuButtonRef.current.contains(e.target)) {
               setShow(false); 
            }
        }

        document.addEventListener("resize", resizeMenu);
        window.addEventListener("mousedown", clickInOutside);

        return () => {
            document.addEventListener("mousedown", clickInOutside);
            window.addEventListener("resize", resizeMenu);
        };
    }, [show, menuRef, menuButtonRef]);

  return (
    <>
    <div className='block md:hidden py-[0.6rem]'></div>
    <div ref={menuButtonRef} className='block md:hidden fixed inset-x-0 top-[4.4rem] -mt-4 z-30'>
        <button onClick={toggleMenu} className='bg-zinc-950 border-b border-zinc-800 px-4 py-2 text-end w-full'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <p className='text-xs'><i className='fa fa-xs fa-fw fa-circle text-green-400 me-1'/> Online</p>
                    <p><i className="fa fa-xs fa-fw fa-wifi text-green-400"/> <span className='ms-1 text-xs'>0.99 Mbps</span></p>
                </div>
                <p>{show ? <i className='fa fa-fw fa-close'/> : <i className='fa fa-fw fa-bars'/>} Menu</p>
            </div>
        </button>
    </div>

    <div className={`${show ? 'show' : 'hidden'} fixed z-10 inset-0 bg-black/50`}></div>
    <div ref={menuRef} className="fixed md:static z-20 start-0 top-0 overflow-hidden md:overflow-visible h-screen md:h-auto md:col-span-3 lg:col-span-3">
        <div ref={menuTransitionRef} className={`${show ? 'w-72 opacity-100' : 'w-0 opacity-50'} md:opacity-100 md:w-full pt-28 md:pt-0 bg-black pb-2 md:pb-0 h-full border-r md:border-r-0 border-zinc-800 transition-[width, opacity]`}>
            <div className="sticky top-[4.5rem] h-full md:h-[80vh] lg:h-[85vh] xl:h-[88vh]">
                <div className='relative overflow-x-hidden overflow-y-auto md:overflow-y-scroll h-full'>
                    <div className="mx-4 py-4 sticky z-10 top-0 pb-4 bg-black border-b border-zinc-800 flex items-center gap-2">
                        <div className="relative inline-block bg-zinc-800 rounded p-6">
                            <i className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fa fa-fw fa-user text-xl" />
                        </div>
                        <div className='line-clamp-none md:line-clamp-1 xl:line-clamp-none'>
                            <Link href="/" className="group/edit text-sm">Mr.Cylare Bladespace <i className='opacity-0 group-hover/edit:opacity-100 fa fa-fw fa-edit duration-200'/></Link>
                            <p className="text-zinc-400 text-xs">lananglanusaputera@gmail.com</p>
                        </div>
                    </div>
                    <div className="px-4 pb-8">
                        <div className='mt-4 flex flex-col gap-y-3 text-sm'>
                            <SingleMenu href="#" type="mainMenu" text="Getting Started"/>
                            <SingleMenu href="#" type="subMenu" text="Installation"/>
                            <SingleMenu href="#" type="subMenu" text="Project Structure"/>
                            <SingleMenu href="#" type="mainMenu" text="Building Your Application"/>
                            <MultiMenu/>
                            <MultiMenu/>
                            <MultiMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    // <div className="basis-1/4">
    //     <div className="sticky top-[4.5rem]">
    //         <div className='relative h-full'>
    //             <div className="mx-4 py-4 top-0 pb-4 bg-black border-b border-zinc-800 flex items-center gap-2">
    //                 <div className="relative inline-block bg-zinc-800 rounded p-6">
    //                     <i className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fa fa-fw fa-user text-xl" />
    //                 </div>
    //                 <div>
    //                     <p className="text-sm">Mr.Cylare Bladespace</p>
    //                     <p className="text-zinc-400 text-xs">lananglanusaputera@gmail.com</p>
    //                 </div>
    //             </div>
    //             <div className="px-4 pb-8 h-[70vh] bg-red-500 overflow-y-scroll">
    //                 <ul className="mt-4">
    //                     <li className="flex flex-col gap-y-3 text-sm">
    //                         <SingleMenu href="#" type="mainMenu" text="Getting Started"/>
    //                         <SingleMenu href="#" type="subMenu" text="Installation"/>
    //                         <SingleMenu href="#" type="subMenu" text="Project Structure"/>
    //                         <SingleMenu href="#" type="mainMenu" text="Building Your Application"/>
    //                         <MultiMenu/>
    //                         <MultiMenu/>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default LeftSidebar