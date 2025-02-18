import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const memories = [
  {
    title: "The warmth in your eyes",
    description: "The day our eyes met and hearts connected",
    imageUrl: "../src/assets/video.mp4",
  },
  {
    title: "You make everything feel better",
    description: "Making memories under the mistletoe",
    imageUrl: "../src/assets/video_1.mov",
  },
  {
    title: "I love my life with you in it",
    description: "A magical evening filled with love",
    imageUrl: "https://source.unsplash.com/random/400x300?valentine",
  },
];


export default function Reasons() {
  return (
    <section id="memory-lane" className="py-20 bg-gradient-to-b from-pink-200 to-pink-100 lg:px-20">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-12 font-pacifico">
          You
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
        <video
          src={memory.imageUrl}
          loop
          className="rounded-lg shadow-lg w-full xl:h-[500px] h-[300px] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        
        <h3 className="text-2xl font-bold text-pink-700 mb-4">{memory.title}</h3>
        <p className="text-pink-600">{memory.description}</p>
      </div>
    </motion.div>
  );
}
