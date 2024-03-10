import Container from "./Container";
import Header from "./Header";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import SingleMenu from "./menu/SingleMenu";
import RightSidebar from "./right-sidebar/RightSidebar";

export default function MainLayout(props) {

  const {title, description, children} = props;

  return (
    <div>
      <Header/>
      <Container>
        <div className="mt-4">
          <div className="md:grid md:grid-cols-12">
            <LeftSidebar/>
            <div className="md:col-span-9 lg:col-span-6">
              <div className="p-4">
                <div className="pb-8 mb-8 border-b border-zinc-800">
                  <h1 className="mb-2 text-3xl font-medium">{title}</h1>
                  <p>{description}</p>
                </div>
                {children}
              </div>
            </div>
            <RightSidebar/>
          </div>
        </div>
      </Container>
      <footer className="xl:container xl:mx-auto mt-8 border-t border-zinc-800">
        <div className="xl:mx-32 md:grid md:grid-cols-12 gap-x-12 px-4 py-8">
          <div className="md:col-span-2 flex md:flex-col justify-between md:justify-normal items-center md:items-start gap-y-0 md:gap-y-4 w-full md:w-auto mb-8 md:mb-0">
            <a href="/" className="block">Cylare Next</a>
            <ul className="flex items-center gap-4">
              <li><a href="#"><i className="text-zinc-400 hover:text-white hover:-translate-y-1 duration-200 text-xl fa fa-fw fa-brands fa-whatsapp"/></a></li>
              <li><a href="#"><i className="text-zinc-400 hover:text-white hover:-translate-y-1 duration-200 text-xl fa fa-fw fa-brands fa-instagram"/></a></li>
              <li><a href="#"><i className="text-zinc-400 hover:text-white hover:-translate-y-1 duration-200 text-xl fa fa-fw fa-brands fa-facebook"/></a></li>
            </ul>
          </div>
          <div className="md:col-span-10 lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="basis-1/2">
              <h6 className="mb-4">Resources</h6>
              <div className="flex flex-col gap-y-3">
                <SingleMenu href="#" type="subMenu" text="Docs"/>
                <SingleMenu href="#" type="subMenu" text="Learn"/>
                <SingleMenu href="#" type="subMenu" text="Showcase"/>
                <SingleMenu href="#" type="subMenu" text="Blog"/>
                <SingleMenu href="#" type="subMenu" text="Analytics"/>
                <SingleMenu href="#" type="subMenu" text="Next.js Conf"/>
                <SingleMenu href="#" type="subMenu" text="DX Platform"/>
              </div>
            </div>
            <div className="basis-1/2">
              <h6 className="mb-4">Resources</h6>
              <div className="flex flex-col gap-y-3">
                <SingleMenu href="#" type="subMenu" text="Docs"/>
                <SingleMenu href="#" type="subMenu" text="Learn"/>
                <SingleMenu href="#" type="subMenu" text="Showcase"/>
                <SingleMenu href="#" type="subMenu" text="Blog"/>
                <SingleMenu href="#" type="subMenu" text="Analytics"/>
                <SingleMenu href="#" type="subMenu" text="Next.js Conf"/>
                <SingleMenu href="#" type="subMenu" text="DX Platform"/>
              </div>
            </div>
            <div className="basis-1/2">
              <h6 className="mb-4">Resources</h6>
              <div className="flex flex-col gap-y-3">
                <SingleMenu href="#" type="subMenu" text="Docs"/>
                <SingleMenu href="#" type="subMenu" text="Learn"/>
                <SingleMenu href="#" type="subMenu" text="Showcase"/>
                <SingleMenu href="#" type="subMenu" text="Blog"/>
                <SingleMenu href="#" type="subMenu" text="Analytics"/>
                <SingleMenu href="#" type="subMenu" text="Next.js Conf"/>
                <SingleMenu href="#" type="subMenu" text="DX Platform"/>
              </div>
            </div>
            <div className="basis-1/2">
              <h6 className="mb-4">Resources</h6>
              <div className="flex flex-col gap-y-3">
                <SingleMenu href="#" type="subMenu" text="Docs"/>
                <SingleMenu href="#" type="subMenu" text="Learn"/>
                <SingleMenu href="#" type="subMenu" text="Showcase"/>
                <SingleMenu href="#" type="subMenu" text="Blog"/>
                <SingleMenu href="#" type="subMenu" text="Analytics"/>
                <SingleMenu href="#" type="subMenu" text="Next.js Conf"/>
                <SingleMenu href="#" type="subMenu" text="DX Platform"/>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 pt-12 lg:pt-0">
            <h6 className="mb-3">Subscribe to our newsletter</h6>
            <p className="mb-3 text-zinc-400 text-sm">Stay updated on new releases and features, guides, and case studies.</p>
            <form className="relative">
              <input type="text" name="" id="" className="w-full ps-4 pe-28 py-1.5 bg-black text-white border border-zinc-800 rounded-lg placeholder:text-sm" placeholder="you@gmail.com"/>
              <button type="submit" className="absolute top-1/2 -translate-y-1/2 end-2 bg-zinc-800 hover:bg-zinc-900 duration-200 rounded px-4 py-0.5 text-xs"><i className="fa fa-fw fa-paper-plane"/> Subcribe</button>
            </form>
          </div>
        </div>
        <div className="py-4 text-center border-t border-zinc-800">
          <p className="text-zinc-400 text-sm">© Copyright Cylare Next {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
