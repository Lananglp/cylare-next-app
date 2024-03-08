'use client'
import React, { useEffect, useRef, useState } from 'react'

function MultiMenu(props) {

    const {index} = props;
    const dropdown = useRef(null);
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    useEffect(() => {
        // const dropItem = document.getElementById("dropDown"+{index});
        if (show) {
            dropdown.current.classList.remove("hidden");
            setTimeout(() => {
                dropdown.current.classList.remove("-translate-y-full");
                dropdown.current.classList.add("-translate-y-0");
            }, 1);
        } else {
            dropdown.current.classList.remove("-translate-y-0");
            dropdown.current.classList.add("-translate-y-full");
            setTimeout(() => {
                dropdown.current.classList.add("hidden");
            }, 200);
        }
    }, [show, dropdown]);

  return (
    <div className="ps-2">
        <button onClick={toggleShow} className="mb-2 flex justify-between items-center text-zinc-400 hover:text-white duration-200 w-full">Routing <i className={`${show && 'rotate-90'} fa fa-fw fa-sm fa-chevron-right duration-200`} /></button>
        <div className="overflow-hidden mt-2">
            <div ref={dropdown} className="hidden -translate-y-full border-l border-zinc-800 ms-4 duration-200">
                <ul className="flex flex-col gap-y-2">
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Pages and Layouts</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Dynamic Routes</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Linking and Navigating</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Redirecting</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Custom App</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Custom Document</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">API Routes</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Custom Errors</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Internationalization</a></li>
                    <li><a href="#" className="ps-4 text-zinc-400 hover:text-white hover:translate-x-1 duration-200 block w-full">Middleware</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MultiMenu