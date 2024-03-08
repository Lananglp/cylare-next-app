import React from 'react'
import MultiMenu from './MultiMenu'
import SingleMenu from './SingleMenu'

function LeftSidebar() {
  return (
      <div className="basis-1/4">
          <div className="p-4">
              <div className="pb-4 border-b border-zinc-700 flex items-center gap-2">
                  <div className="relative inline-block bg-zinc-800 rounded p-6">
                      <i className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fa fa-fw fa-user text-xl" />
                  </div>
                  <div>
                      <p className="text-sm">Mr.Cylare Bladespace</p>
                      <p className="text-zinc-400 text-xs">lananglanusaputera@gmail.com</p>
                  </div>
              </div>
              <div>
                  <ul className="mt-4">
                      <li className="flex flex-col gap-y-3 text-sm">
                          <a href="#" className="mt-4 text-white block w-full">Getting Started</a>
                          <a href="#" className="ps-2 text-zinc-400 hover:text-white block w-full">Installation</a>
                          <SingleMenu/>
                          <a href="#" className="mt-4 text-white block w-full">Building Your Application</a>
                          <MultiMenu/>
                          <MultiMenu/>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default LeftSidebar