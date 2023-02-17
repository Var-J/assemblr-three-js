import React from "react";
import Furniture2 from "./Furniture2";
import Furniture3 from "./Furniture3";
import Furniture4 from "./Furniture4";
import { motion } from "framer-motion";

function FurnitureCard({ furniture, }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x:-200 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      layout
      className="h-60 w-60 lg:w-96 relative bg-white rounded-xl shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        layout
        className="absolute bg-black/0 w-full -top-60 h-96"
      >
        {furniture.id === "1" ? (
          <Furniture2 />
        ) : furniture.id === "2" ? (
          <Furniture3 />
        ) : (
          <Furniture4 />
        )}
      </motion.div>
      <div className="absolute bottom-0 text-center w-full text-4xl p-5 flex flex-col space-y-4">
        <h3>{furniture.name}</h3>
        <h4>{furniture.price}</h4>
      </div>
    </motion.div>
  );
}

export default FurnitureCard;
