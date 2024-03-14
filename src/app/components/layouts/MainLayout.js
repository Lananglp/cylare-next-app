import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import SingleMenu from "./menu/SingleMenu";
import RightSidebar from "./right-sidebar/RightSidebar";

export default function MainLayout(props) {

  const {title, description, children} = props;

  return (
    <div>
      <Header/>
      <Container className="mb-4">
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
      <Footer/>
    </div>
  );
}
