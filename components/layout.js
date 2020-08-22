import Header from "./header";
import Footer from "./footer";
import SimpleMap from "../js/SimpleMap";
function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className=" ">{props.children}</main>
      <Footer />
    </div>
  );
}
//10:50 %100
export default Layout;
