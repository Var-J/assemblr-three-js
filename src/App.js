import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChatRight } from "react-icons/bs";
import Furniture1 from "./Furniture1";
import FurnitureCard from "./FurnitureCard";

export default function App() {
  return (
    <body className="py-10 px-40 bg-gradient-to-b from-blue-200 to-blue-100 h-screen">
      <header className="flex justify-between text-4xl">
        <h1 className="text-5xl">Wudo</h1>
        <ul className="flex space-x-10 items-center">
          <li>Home</li>
          <li>Furnitures</li>
          <li>Products</li>
          <li>More</li>
          <BsChatRight />
          <AiOutlineShoppingCart className="h-12 w-12" />
        </ul>
      </header>
      <main className="w-full h-1/2 mt-40 ">
        <div className="flex justify-between w-full h-full items-center">
          <div className="w-1/2">
            <h1 className="text-9xl font-extrabold">
              Exotic Minimal Furniture.
            </h1>
            <h2 className="text-4xl mt-10">
              Choose from a wide range of well-crafted premium quality wooden
              furniture online.
            </h2>
            <button className="mt-32 px-14 py-5 bg-black shadow-lg text-white rounded-xl text-xl">
              Explore
            </button>
          </div>
          <div className="w-1/2 h-full">
            <Furniture1 />
          </div>
        </div>
        <div>
          <div className="mt-40 flex w-full space-x-20">
            <h4 className="-rotate-90 text-4xl">Featured</h4>
            <div className="w-full flex items-center justify-between">
              <button>Previous</button>
              <div className="flex space-x-20">
                <FurnitureCard />
                <FurnitureCard />
                <FurnitureCard />
              </div>
              <button>Next</button>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
