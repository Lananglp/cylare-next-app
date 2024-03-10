'use client'
import React, { useEffect, useState } from 'react'
import SingleMenu from '../menu/SingleMenu'
import MultiMenu from '../menu/MultiMenu'
import Image from 'next/image'

function RightSidebar() {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const [speed, setSpeed] = useState(null);

    useEffect(() => {
        const updateSpeed = () => {
        if (navigator.connection) {
            const connection = navigator.connection;
            const mbps = (connection.downlink / 1024).toFixed(2); // konversi ke mbps
            setSpeed(`${mbps} Mbps`);
        }
        };

        updateSpeed();

        // Menambahkan event listener untuk mengupdate kecepatan saat terjadi perubahan koneksi
        if (navigator.connection) {
        navigator.connection.addEventListener('change', updateSpeed);
        }

        return () => {
        // Membersihkan event listener saat komponen tidak lagi digunakan
        if (navigator.connection) {
            navigator.connection.removeEventListener('change', updateSpeed);
        }
        };
    }, []);

  return (
      <div className="hidden lg:block lg:col-span-3 transition-all duration-500">
          <div className="sticky top-[4.5rem]">
                <div className="overflow-y-scroll h-[88lvh] px-4 pb-8">
                    <div className='sticky top-0 z-10 bg-black border-b border-zinc-800 py-4 mb-8'>
                        <div className='flex justify-between items-center'>
                            {isOnline ? <p className='text-xs'><i className='fa fa-xs fa-fw fa-circle text-green-400 me-1'/> Online</p> : <p className='text-xs'><i className='fa fa-xs fa-fw fa-circle text-red-400 me-1'/> Offline</p>}
                            <p><i className={`fa fa-xs fa-fw fa-wifi ${isOnline ? 'text-green-400' : 'text-red-400'}`}/> <span className='ms-1 text-xs'>{speed}</span></p>
                        </div>
                    </div>
                    {/* <div className='sticky top-0 z-10 bg-black py-4 mb-8'>
                        <Image
                            className='w-full mb-4'
                            src="/myMakanan.png"
                            width={186}
                            height={186}
                            alt="myMakanan.png"
                        />
                        <p className='text-xs'>This is section for your ads.</p>
                    </div> */}
                    <h6 className="mb-4 mt-4">On this page</h6>
                    <div className='mt-4 flex flex-col gap-y-2 text-sm'>
                        <SingleMenu href="#" type="subMenu" text="What is Next.js?" />
                        <SingleMenu href="#" type="subMenu" text="Main Features" />
                        <SingleMenu href="#" type="subMenu" text="How to Use These Docs" />
                        <SingleMenu href="#" type="subMenu" text="App Router vs Pages Router" />
                        <SingleMenu href="#" type="subMenu" text="Pre-Requisite Knowledge" />
                        <SingleMenu href="#" type="subMenu" text="Accessibility" />
                        <SingleMenu href="#" type="subMenu" text="Join our Community" />
                        <MultiMenu />
                        <MultiMenu />
                    </div>
              </div>
          </div>
      </div>
  )
}

export default RightSidebar