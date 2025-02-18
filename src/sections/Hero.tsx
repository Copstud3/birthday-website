import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("memory-lane");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="h-screen mx-auto flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 to-pink-200 text-center max-sm:px-3">
      <FloatingHearts />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-pacifico tracking-wide font-medium text-pink-700 mb-6"
      >
        Happy birthday, my love
      </motion.h1>
      <p className="text-center text-[25px] text-pink-600 font-bold font-dancing">
        World Anjiee day 💕
      </p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-pink-600 mb-6 mt-3 font-inter"
      >
        Together since November 30, 2024 but today is all about YOU❤️
      </motion.p>
      <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-pink-500 text-white rounded-full font-inter hover:bg-pink-600 transition-colors"
        >
          Click me
        </motion.button>
    </section>
  );
};

export default Hero;
