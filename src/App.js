import ContactUs from "./ContactUs";
import Furniture from "./Furniture";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <main className="px-2 w-full bg-gradient-to-b from-white to-yellow-100 h-full">
      <div className="flex justify-center">
        <Header />
      </div>
      <div className="w-full h-full transition-all duration-200">
        <section
          id="home"
          className="flex justify-between w-full h-screen items-center snap-start"
        >
          <Home />
        </section>
        <section id="furniture" className="snap-start h-screen w-full pt-2 lg:pt-20">
          <Furniture />
        </section>
        <section id="contactUs" className="snap-start  h-screen w-full pt-2 lg:pt-20">
          <ContactUs />
        </section>
      </div>
    </main>
  );
}
