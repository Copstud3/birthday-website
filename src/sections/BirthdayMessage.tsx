import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BirthdayMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex items-center justify-center py-20 w-screen mx-auto">
      <div ref={ref} className="mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-pink-700 mb-8 font-pacifico">
            ...another beautiful year round the sun!
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-pink-700 font-inter text-[18px]">
              Hi baby, I don&apos;t know how to start so I&apos;ll just keep
              typing until it comes together to make some sense. Your beauty
              erases the pain in me. Your heart cancels out the cruelty in me In
              one form or another, you complete me and make me a better human. I
              want to give you the world and so help me God, I will. I love you
              today, tomorrow and forever Happy Birthday my princess
            </p>
            <p className="text-pink-700 font-medium text-[18px]">
              Forever Yours,
              <br />
              Your Love
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-pink-500 text-white font-inter px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
          >
         <a href="https://wa.link/2canqt" target="_blank">  Make a Birthday Wish </a> 
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
