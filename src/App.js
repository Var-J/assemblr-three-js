import ContactUs from "./ContactUs";
import Furniture from "./Furniture";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <main className="px-2 lg:px-40 w-full bg-gradient-to-b from-blue-200 to-blue-100 h-full">
      <Header />
      <div className="w-full h-full \transition-all duration-200">
        <section
          id="home"
          className="flex justify-between w-full h-full items-center snap-start"
        >
          <Home />
        </section>
        <section id="furniture" className="snap-start h-screen w-full pt-20">
          <Furniture />
        </section>
        <section id="contactUs" className="snap-start  h-screen w-full pt-20">
          <ContactUs />
        </section>
      </div>
    </main>
  );
}
