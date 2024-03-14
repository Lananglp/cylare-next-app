import React from 'react'
import SingleMenu from './menu/SingleMenu'

function Footer() {
  return (
      <footer className="xl:container xl:mx-auto border-t border-zinc-800">
          <div className="xl:mx-32 md:grid md:grid-cols-12 gap-x-12 px-4 py-8">
              <div className="md:col-span-2 flex md:flex-col justify-between md:justify-normal items-center md:items-start gap-y-0 md:gap-y-4 w-full md:w-auto mb-8 md:mb-0">
                  <a href="/" className="block">Cylare Next</a>
                  <ul className="flex items-center gap-4">
                      <li><a href="#"><i className="text-zinc-400 hover:text-white hover:-translate-y-1 duration-200 text-xl fa fa-fw fa-brands fa-whatsapp" /></a></li>
                      <li><a href="#"><i className="text-zinc-400 hover:text-white hover:-translate-y-1 duration-200 text-xl fa fa-fw fa-brands fa-instagram" /></a></li>
                      <li><a href="#"><i className="text-zinc-400 hover:text-white hover:-translate-y-1 duration-200 text-xl fa fa-fw fa-brands fa-facebook" /></a></li>
                  </ul>
              </div>
              <div className="md:col-span-10 lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="basis-1/2">
                      <h6 className="mb-4">Resources</h6>
                      <div className="flex flex-col gap-y-3">
                          <SingleMenu href="#" type="subMenu" text="Docs" />
                          <SingleMenu href="#" type="subMenu" text="Learn" />
                          <SingleMenu href="#" type="subMenu" text="Showcase" />
                          <SingleMenu href="#" type="subMenu" text="Blog" />
                          <SingleMenu href="#" type="subMenu" text="Analytics" />
                          <SingleMenu href="#" type="subMenu" text="Next.js Conf" />
                          <SingleMenu href="#" type="subMenu" text="DX Platform" />
                      </div>
                  </div>
                  <div className="basis-1/2">
                      <h6 className="mb-4">Resources</h6>
                      <div className="flex flex-col gap-y-3">
                          <SingleMenu href="#" type="subMenu" text="Docs" />
                          <SingleMenu href="#" type="subMenu" text="Learn" />
                          <SingleMenu href="#" type="subMenu" text="Showcase" />
                          <SingleMenu href="#" type="subMenu" text="Blog" />
                          <SingleMenu href="#" type="subMenu" text="Analytics" />
                          <SingleMenu href="#" type="subMenu" text="Next.js Conf" />
                          <SingleMenu href="#" type="subMenu" text="DX Platform" />
                      </div>
                  </div>
                  <div className="basis-1/2">
                      <h6 className="mb-4">Resources</h6>
                      <div className="flex flex-col gap-y-3">
                          <SingleMenu href="#" type="subMenu" text="Docs" />
                          <SingleMenu href="#" type="subMenu" text="Learn" />
                          <SingleMenu href="#" type="subMenu" text="Showcase" />
                          <SingleMenu href="#" type="subMenu" text="Blog" />
                          <SingleMenu href="#" type="subMenu" text="Analytics" />
                          <SingleMenu href="#" type="subMenu" text="Next.js Conf" />
                          <SingleMenu href="#" type="subMenu" text="DX Platform" />
                      </div>
                  </div>
                  <div className="basis-1/2">
                      <h6 className="mb-4">Resources</h6>
                      <div className="flex flex-col gap-y-3">
                          <SingleMenu href="#" type="subMenu" text="Docs" />
                          <SingleMenu href="#" type="subMenu" text="Learn" />
                          <SingleMenu href="#" type="subMenu" text="Showcase" />
                          <SingleMenu href="#" type="subMenu" text="Blog" />
                          <SingleMenu href="#" type="subMenu" text="Analytics" />
                          <SingleMenu href="#" type="subMenu" text="Next.js Conf" />
                          <SingleMenu href="#" type="subMenu" text="DX Platform" />
                      </div>
                  </div>
              </div>
              <div className="col-span-12 lg:col-span-3 pt-12 lg:pt-0">
                  <h6 className="mb-3">Subscribe to our newsletter</h6>
                  <p className="mb-3 text-zinc-400 text-sm">Stay updated on new releases and features, guides, and case studies.</p>
                  <form className="relative">
                      <input type="text" name="" id="" className="w-full ps-4 pe-28 py-1.5 bg-black text-white ring-1 ring-zinc-800 focus:ring-blue-800 outline-none rounded placeholder:text-sm duration-200" placeholder="you@gmail.com" />
                      <button type="submit" className="absolute top-1/2 -translate-y-1/2 end-1 bg-zinc-800 hover:bg-zinc-900 duration-200 rounded px-4 py-1.5 text-xs"><i className="fa fa-fw fa-paper-plane" /> Subcribe</button>
                  </form>
              </div>
          </div>
          <div className="py-4 text-center border-t border-zinc-800">
              <p className="text-zinc-400 text-sm">© Copyright Cylare Next {new Date().getFullYear()}</p>
          </div>
      </footer>
  )
}

export default Footer