import React from 'react'
import SingleMenu from '../menu/SingleMenu'
import MultiMenu from '../menu/MultiMenu'
import Image from 'next/image'

function RightSidebar() {
  return (
      <div className="col-span-12 xl:col-span-2">
          <div className="sticky top-[4.5rem]">
                <div className="overflow-y-scroll h-[88lvh] px-4 pb-8">
                    <div className='sticky top-0 z-10 bg-black py-4 mb-8'>
                        <Image
                            className='w-full mb-4'
                            src="/myMakanan.png"
                            width={186}
                            height={186}
                            alt="myMakanan.png"
                        />
                        <p className='text-xs'>This is section for your ads.</p>
                    </div>
                    <h6 className="my-4 font-medium">On this page</h6>
                    <div className='mt-4 flex flex-col gap-y-3 text-sm'>
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