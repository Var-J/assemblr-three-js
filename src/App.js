import Furniture from "./Furniture";
import Furniture1 from "./Furniture1";
import Header from "./Header";

export default function App() {
  return (
    <main className="p-10 px-40 w-full bg-gradient-to-b from-blue-200 scroll-smooth to-blue-100 h-full">
      <Header />
      <div className="w-full h-1/2 mt-20">
        <section className="flex justify-between w-full h-full items-center snap-start">
          <div className="w-1/2 flex flex-col justify-between h-96 z-20">
            <div>
              <h1 className="text-7xl font-extrabold">
                Exotic Minimal Furniture.
              </h1>
              <h2 className="text-2xl mt-10">
                Choose from a wide range of well-crafted premium quality wooden
                furniture online.
              </h2>
            </div>
            <a
              href="#furnitures"
              className="w-fit px-14 py-5 bg-black shadow-lg text-white rounded-xl text-xl"
            >
              Explore
            </a>
          </div>
          <div className="w-1/2 h-full max-h-96 right-20 absolute mx-auto z-10">
            <Furniture1 />
          </div>
        </section>
        <section id="furnitures" className="snap-start">
          <Furniture />
        </section>
      </div>
    </main>
  );
}
