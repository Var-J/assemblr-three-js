import React from "react";
import Furniture1 from "./Furniture1";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="w-full items-center flex flex-col justify-evenly h-screen z-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl font-extrabold"
          >
            Exotic Minimal <span className="text-blue-600">Furniture</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl mt-10"
          >
            Choose from a wide range of well-crafted premium quality wooden
            furniture online.
          </motion.h2>
        </div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          href="#furniture"
          className="w-fit px-14 py-5 bg-black shadow-lg text-white rounded-xl text-xl"
        >
          Explore
        </motion.a>
      </div>
      <div className="w-full h-full min-h-screen top-0 left-0 absolute mx-auto z-10 opacity-90">
        <Furniture1 />
      </div>
    </>
  );
}

export default Home;
