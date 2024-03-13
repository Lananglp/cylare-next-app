import Container from "./components/layouts/Container";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

export default function Home() {

  return (
    <>
    <Header/>
    <Container>
      <div className="md:grid md:grid-cols-2 gap-4 py-24">
        <div>
          <p className="font-medium mb-4">Cylare high technology UI</p>
          <h1 className="mb-8 font-semibold leading-tight text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Cylare Next is the best choice technology for Website</h1>
          <p className="text-zinc-400 text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro dolorum eaque praesentium. Sequi accusamus cupiditate vitae, consequuntur et, possimus neque libero perferendis quam maxime cumque illo voluptatibus nisi est!</p>
        </div>
        <div className="">
          <div className="relative h-full flex justify-center items-center">

            {/* <div className="absolute top-0 start-24 p-16 border-b border-l border-zinc-800 rounded-bl-lg animate-pulse"/>
            <div className="absolute top-0 end-24 p-16 border-b border-r border-zinc-800 rounded-br-lg animate-pulse"/>
            <div className="absolute bottom-0 start-24 p-16 border-t border-l border-zinc-800 rounded-tl-lg animate-pulse"/>
            <div className="absolute bottom-0 end-24 p-16 border-t border-r border-zinc-800 rounded-tr-lg animate-pulse"/>

            <div className="absolute top-1/2 end-0 px-32 py-16 border-t border-r border-zinc-800 rounded-tr-lg animate-pulse"/>
            <div className="absolute top-1/2 start-0 px-32 py-16 border-t border-l border-zinc-800 rounded-tl-lg animate-pulse"/>

            <div className="absolute top-1/2 start-12 px-16 py-32 border-b border-l border-zinc-800 rounded-bl-lg animate-pulse"/>
            <div className="absolute top-1/2 end-12 px-16 py-32 border-b border-r border-zinc-800 rounded-br-lg animate-pulse"/> */}
            
            <div className="absolute top-0 end-24 p-16 border-b border-r border-zinc-800 animate-pulse"/>
            <div className="absolute top-32 end-0 py-8 px-16 border-b border-l border-zinc-800 animate-pulse"/>
            <div className="absolute top-48 end-0 py-24 px-8 border-b border-l border-zinc-800 animate-pulse"/>
            <div className="absolute -bottom-16 end-32 py-24 px-8 border-t border-r border-zinc-800 animate-pulse"/>
            <div className="absolute -bottom-8 end-32 py-4 px-12 border-b border-l border-zinc-800 animate-pulse"/>
            <div className="absolute bottom-0 end-64 py-12 px-4 border-l border-zinc-800 animate-pulse"/>
            <div className="absolute bottom-0 start-72 py-12 px-4 border-l border-zinc-800 animate-pulse"/>
            <div className="absolute -bottom-20 start-32 py-24 px-12 border-b border-r border-zinc-800 animate-pulse"/>
            <div className="absolute bottom-0 start-0 py-12 px-12 border-b border-r border-zinc-800 animate-pulse"/>
            <div className="absolute bottom-24 start-0 py-12 px-32 border-b border-l border-zinc-800 animate-pulse"/>
            <div className="absolute bottom-48 start-24 py-12 px-12 border-b border-l border-zinc-800 animate-pulse"/>
            <div className="absolute top-8 -start-16 py-12 px-20 border-b border-l border-zinc-800 animate-pulse"/>
            <div className="absolute top-0 start-24 py-12 px-24 border-t border-r border-zinc-800 animate-pulse"/>
            <div className="absolute -top-12 end-8 py-24 px-32 border-t border-l border-zinc-800 animate-pulse"/>

            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black border border-zinc-800">
              <div className="h-full flex justify-center items-center">
                <i className="text-zinc-400 fa fa-fw fa-2xl fa-bolt-lightning animate-pulse"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Footer/>
    </>
  );
}