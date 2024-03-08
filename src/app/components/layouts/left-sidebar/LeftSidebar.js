import React from 'react'
import MultiMenu from './MultiMenu'
import SingleMenu from './SingleMenu'

function LeftSidebar() {
  return (
    <div className="basis-1/4">
        <div className="sticky top-[4.5rem] h-full md:h-[80vh] lg:h-[85vh] xl:h-[88vh]">
            <div className='relative overflow-auto md:overflow-y-scroll h-full'>
                <div className="mx-4 py-4 sticky z-10 top-0 pb-4 bg-black border-b border-zinc-800 flex items-center gap-2">
                    <div className="relative inline-block bg-zinc-800 rounded p-6">
                        <i className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fa fa-fw fa-user text-xl" />
                    </div>
                    <div>
                        <p className="text-sm">Mr.Cylare Bladespace</p>
                        <p className="text-zinc-400 text-xs">lananglanusaputera@gmail.com</p>
                    </div>
                </div>
                <div className="px-4 pb-8">
                    <ul className="mt-4">
                        <li className="flex flex-col gap-y-3 text-sm">
                            <SingleMenu href="#" type="mainMenu" text="Getting Started"/>
                            <SingleMenu href="#" type="subMenu" text="Installation"/>
                            <SingleMenu href="#" type="subMenu" text="Project Structure"/>
                            <SingleMenu href="#" type="mainMenu" text="Building Your Application"/>
                            <MultiMenu/>
                            <MultiMenu/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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