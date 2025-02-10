import { motion } from "framer-motion";
import { Gallery } from "@/components/Gallery";
import { Message } from "@/components/Message";
import { SpecialButton } from "@/components/SpecialButton";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] to-[#FFB6C1]">
      {/* Header with floating hearts */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-4 relative"
      >
        <div className="flex items-center justify-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Heart className="h-8 w-8 text-[#FF1493]" />
          </motion.div>
          <h1 className="font-dancing text-5xl md:text-6xl lg:text-7xl text-[#FF1493] mb-4">
            Happy Birthday
          </h1>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Heart className="h-8 w-8 text-[#FF1493]" />
          </motion.div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-[#FF1493]" fill="#FF1493" />
          <h2 className="font-dancing text-3xl text-[#FF1493]">Neha</h2>
          <Heart className="h-6 w-6 text-[#FF1493]" fill="#FF1493" />
        </div>
        <p className="font-quicksand text-xl text-[#333333] mt-6">
          Every moment with you is magical...
        </p>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Love Messages Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-dancing text-3xl text-[#FF1493] mb-8 text-center">
            Sweet Messages
          </h2>
          <Message />
        </motion.section>

        {/* Photo Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="py-16 bg-white/30 backdrop-blur-sm rounded-lg"
        >
          <h2 className="font-dancing text-3xl text-[#FF1493] mb-8 text-center">
            Our Beautiful Memories
          </h2>
          <Gallery />
        </motion.section>

        {/* Special Button Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-16 pb-12"
        >
          <SpecialButton />
        </motion.section>
      </main>
    </div>
  );
}