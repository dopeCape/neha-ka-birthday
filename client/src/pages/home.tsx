import { motion } from "framer-motion";
import { Gallery } from "@/components/Gallery";
import { Message } from "@/components/Message";
import { SpecialButton } from "@/components/SpecialButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF0F5]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 px-4"
      >
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#FF1493] mb-4">
          Happy Birthday Neha!
        </h1>
        <p className="font-lato text-lg text-[#333333]">
          A collection of our special moments together...
        </p>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-playfair text-3xl text-[#FF69B4] mb-6 text-center">
            Our Memories
          </h2>
          <Gallery />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="my-12"
        >
          <h2 className="font-playfair text-3xl text-[#FF69B4] mb-6 text-center">
            Special Messages
          </h2>
          <Message />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-12 pb-12"
        >
          <SpecialButton />
        </motion.section>
      </main>
    </div>
  );
}
