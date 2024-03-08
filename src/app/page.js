import Container from "./components/layouts/Container";
import Header from "./components/layouts/Header";
import LeftSidebar from "./components/layouts/left-sidebar/LeftSidebar";

export default function Home() {

  return (
    <div>
      <Header/>  
      <Container>
        <div className="mt-12">
          <div className="flex flex-row">
            <LeftSidebar/>
            <div className="basis-1/2 py-32 bg-green-500/50">

            </div>
            <div className="basis-1/4 py-32 bg-yellow-500/50">
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
