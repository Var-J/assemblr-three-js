import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col h-screen z-20">
        <div className="absolute top-60 left-10 w-2/3 lg:w-1/2 bg-white/20">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-7xl font-extrabold"
          >
            Exotic Minimal{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-green-400"
            >
              Furniture
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl lg:text-3xl mt-10"
          >
            Choose from a wide range of well-crafted premium quality wooden
            furniture online.
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            href="#furniture"
            className="w-fit mt-20 left-10 px-14 py-5 absolute bg-black shadow-lg text-white
             rounded-xl text-xl hover:bg-green-400 transition duration-200 hover:text-black"
          >
            Explore
          </motion.a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="w-3/4 h-auto top-28 right-0 absolute mx-auto z-10"
      >
        <img
          src="https://wallpaperaccess.com/full/2076086.jpg"
          alt=""
          loading="lazy"
        />
      </motion.div>
    </>
  );
}

export default Home;
