import React, { useState } from "react";
import FurnitureCard from "./FurnitureCard";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function Furniture() {
  const test = [
    {id:"1", name: "Round Chair", price: "$70.00" },
    {id:"2", name: "Bar Chair", price: "$130.00" },
    {id:"3", name: "Wooden Chair", price: "$55.00" },
  ];

  const [state, setState] = useState([...test]);
  const handleNext = () => {
    var array = [...state]
    array.push(array[0])
    array.shift()
    setState(array)
  };
  const handlePrevious = () => {
    var array = [...state]
    array.unshift(array[2])
    array.pop()
    setState(array)
  };


  return (
    <div className="mt-96 flex flex-col h-screen space-y-80 w-full">
      <h4 className="text-4xl text-center">Furniture</h4>
      <div className="w-full flex mx-auto items-center justify-between">
        <button onClick={handlePrevious}>
          <GrFormPreviousLink className="h-20 w-20 hover:-translate-x-2 transition-all duration-200" />
        </button>
        <div className="flex space-x-20">
          {state.map((test, i) => (
            <FurnitureCard key={i} furniture={test} />
          ))}
        </div>
        <button onClick={handleNext}>
          <GrFormNextLink className="h-20 w-20 hover:translate-x-2 transition-all duration-200" />
        </button>
      </div>
      <a href="#home">hey</a>
    </div>
  );
}

export default Furniture;
