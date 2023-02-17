import React, { useState } from "react";
import FurnitureCard from "./FurnitureCard";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { motion } from "framer-motion";

function Furniture() {
  const catalog = [
    { id: "1", name: "Round Chair", price: "$70.00" },
    { id: "2", name: "Bar Chair", price: "$130.00" },
    { id: "3", name: "Wooden Chair", price: "$55.00" },
  ];

  const [dummy, setDummy] = useState([...catalog]);
  const [nav, setNav] = useState("")

  const handleNext = () => {
    var array = [...dummy];
    array.push(array[0]);
    array.shift();
    setDummy(array);
    setNav("left")
  };
  const handlePrevious = () => {
    var array = [...dummy];
    array.unshift(array[2]);
    array.pop();
    setDummy(array);
    setNav("right")
  };

  return (
    <div className=" flex flex-col h-full justify-between pb-10 w-full overflow-x-hidden">
      <motion.h1 initial={{opacity:0, y:-50}} animate={{opacity: 1, y:0}} className="text-5xl text-center">Furniture</motion.h1>
      <div className="w-full flex mx-auto items-center justify-between">
        <button onClick={handlePrevious}>
          <GrFormPreviousLink className="lg:h-20 lg:w-20 h-12 w-12 lg:hover:-translate-x-2 transition-all duration-200" />
        </button>
        <div className="flex lg:space-x-20 justify-center">
          {window.innerWidth < 1920 ? (
            <>
              {dummy.slice(0, 1).map((set, i) => (
                <FurnitureCard key={i} furniture={set} nav={nav}  />
              ))}
            </>
          ) : (
            <>
              {dummy.map((set, i) => (
                <FurnitureCard key={i} furniture={set} nav={nav} />
              ))}
            </>
          )}
        </div>
        <button onClick={handleNext}>
          <GrFormNextLink className="lg:h-20 lg:w-20 h-12 w-12 hover:translate-x-2 transition-all duration-200" />
        </button>
      </div>
    </div>
  );
}

export default Furniture;
