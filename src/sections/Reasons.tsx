import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../public/assets/IMG_5112.jpeg"
import img2 from "../public/assets/imgggg.jpeg"
import img3 from "../public/assets/img3.jpg"


const memories = [
  {
    title: "The warmth in your eyes",
    description: "I find myself still captivated by the gentle glow that lives within your gaze. ",
    imageUrl: img1,
  },
  {
    title: "You make everything feel better",
    description: "Life sparkles differently with you around. Whether I'm having the best or worst day, your presence turns everything softer, warmer, more vibrant.",
    imageUrl: img2,
  },
  {
    title: "I love my life with you in it",
    description: " Thank you for being the comfort in my chaos and the joy in my calm.",
    imageUrl: img3,
  },
];


export default function Reasons() {
  return (
    <section id="memory-lane" className="py-20 bg-gradient-to-b from-pink-200 to-pink-100 lg:px-20  mx-auto">
      <div className="max-sm:mx-10">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-12 font-pacifico">
          Beautiful moments
        </h2>
        
        <div className="space-y-16">
          {memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemoryCard({ memory, index }: { memory: typeof memories[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 items-center`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={memory.imageUrl}
          alt={memory.title}
          className="rounded-lg shadow-lg w-full xl:h-[500px] h-[300px] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        
        <h3 className="text-2xl font-bold text-pink-700 mb-4 font-inter">{memory.title}</h3>
        <p className="text-pink-600 font-inter">{memory.description}</p>
      </div>
    </motion.div>
  );
}
