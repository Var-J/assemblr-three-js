import React, { useState } from "react";
import FurnitureCard from "./FurnitureCard";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { motion } from "framer-motion";

function Furniture() {
  const catalog = [
    { id: "1", name: "Cotton Chair", price: "$215.00" },
    { id: "2", name: "Round Chair", price: "$70.00" },
    { id: "3", name: "Bar Chair", price: "$130.00" },
    { id: "4", name: "Wooden Chair", price: "$55.00" },
  ];

  const [dummy, setDummy] = useState([...catalog]);
  const [nav, setNav] = useState("");

  const handleNext = () => {
    var array = [...dummy];
    array.push(array[0]);
    array.shift();
    setDummy(array);
    setNav("left");
  };
  const handlePrevious = () => {
    var array = [...dummy];
    array.unshift(array[2]);
    array.pop();
    setDummy(array);
    setNav("right");
  };

  return (
    <div className="relative flex flex-col h-full justify-between pb-10 w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="w-fit h-auto top-40 lg:top-24 left-0 absolute mx-auto z-10"
      >
        <img
          src="https://t4.ftcdn.net/jpg/05/08/17/01/360_F_508170187_4Oonk4IG8u9eyfwSUvTASkT8hl71vRX2.jpg"
          alt=""
        />
      </motion.div>

      <div className="z-30">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl text-center"
        >
          Furniture
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl text-center"
        >
          Drag and Zoom the images to see the details.
        </motion.h3>
      </div>
      <div className="w-full flex mx-auto items-center lg:px-20 justify-between z-30">
        <button onClick={handlePrevious}>
          <GrFormPreviousLink className="lg:h-20 lg:w-20 h-12 w-12 lg:hover:-translate-x-2 transition-all duration-200" />
        </button>
        <div className="relative flex space-x-20 w-4/6 justify-center snap-x snap-mandatory z-20">
          {window.innerWidth < 1920 ? (
            <>
              {dummy.slice(0, 1).map((set, i) => (
                <FurnitureCard key={i} furniture={set} nav={nav} />
              ))}
            </>
          ) : (
            <>
              {dummy.slice(0, 3).map((set, i) => (
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
