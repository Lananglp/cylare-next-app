'use client'
import React, { useEffect, useRef, useState } from 'react'

function MultiMenu(props) {

    const {index, children} = props;
    const dropdown = useRef(null);
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    useEffect(() => {
        const getHeight = dropdown.current && dropdown.current.scrollHeight;
        if (show) {
            dropdown.current.classList.remove("opacity-0");
            dropdown.current.classList.add("opacity-100");

            dropdown.current.style.maxHeight = getHeight.toString() + "px";
        } else {
            dropdown.current.classList.remove("opacity-100");
            dropdown.current.classList.add("opacity-0");

            dropdown.current.style.maxHeight = 0 + "px";
        }
    }, [show, dropdown]);

  return (
    <div className="ps-2">
        <button onClick={toggleShow} className="mb-2 flex justify-between items-center text-zinc-400 hover:text-white duration-500 w-full">Routing <i className={`${show && 'rotate-90'} fa fa-fw fa-sm fa-chevron-right duration-200`} /></button>
        <div className="overflow-hidden mt-2">
            <div ref={dropdown} style={{maxHeight: '0px'}} className="opacity-0 border-l border-zinc-800 ms-4 transition-all duration-500">
                <div className="flex flex-col gap-y-2 ps-2">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MultiMenu