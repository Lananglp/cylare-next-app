'use client'
import React, { useEffect, useRef, useState } from 'react'

function Modal(props) {

    const {onOpen, onClose, title, size, header = true, children} = props;
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {

        const body = document.body;

        if (onOpen) {
            body.classList.add("overflow-hidden");
            modalRef.current.classList.remove("hidden");
            modalRef.current.classList.add("flex");
            setTimeout(() => {
                modalRef.current.classList.remove("opacity-0");
                modalRef.current.classList.add("opacity-100");
            }, 1);
        } else {
            modalRef.current.classList.remove("opacity-100");
            modalRef.current.classList.add("opacity-0");
            setTimeout(() => {
                body.classList.remove("overflow-hidden");
                modalRef.current.classList.remove("flex");
                modalRef.current.classList.add("hidden");
            }, 500);
        }

        const clickInOutside = (e) => {
            if (header) {
                if (modalContentRef.current && !modalContentRef.current.contains(e.target) && !closeButtonRef.current.contains(e.target)) {
                    onClose();
                }
            } else {
                if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
                    onClose();
                }
            }
        }

        document.addEventListener("mousedown", clickInOutside);

        return () => {
            body.classList.remove("overflow-hidden");
            document.addEventListener("mousedown", clickInOutside);
        }

    }, [onOpen, onClose, header, modalRef, modalContentRef, closeButtonRef]);

  return (
    <>
        <div ref={modalRef} className="hidden opacity-0 fixed inset-0 bg-black/50 z-[100] justify-center items-center transition-opacity duration-500">
            <div ref={modalContentRef} className="ring-1 ring-zinc-800 bg-zinc-950/75 backdrop-blur-sm rounded-lg shadow-lg mx-4 w-full sm:w-[32rem] h-2/3">
                {header ?
                    <div className="flex justify-between items-center border-b border-zinc-800 p-4">
                        <h6>{title}</h6>
                        <button ref={closeButtonRef} onClick={onClose} className="text-zinc-400 hover:text-white duration-200 p-1"><i className="fa fa-lg fa-fw fa-close" /></button>
                    </div>
                    :
                    <button ref={closeButtonRef} onClick={onClose} className="absolute top-2 end-2 text-zinc-400 hover:text-white duration-200 p-1"><i className="fa fa-lg fa-fw fa-close" /></button>
                }
                <div className={`p-4 ${header ? 'h-auto' : 'h-full'}`}>
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal