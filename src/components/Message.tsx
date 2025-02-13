import React from "react"
import { motion } from "framer-motion";
import { useState } from "react";
import { MESSAGES } from "../lib/constants";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";

export function Message() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showNextMessage = () => {
    if (currentIndex < MESSAGES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    setIsVisible(true);
  };

  return (
    <div className="relative min-h-[200px] flex flex-col items-center justify-center p-4">
      <motion.div
        animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-[#FFB6C1]/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <p className="text-center font-playfair text-xl text-[#333333]">
              {MESSAGES[currentIndex]}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <Button
        onClick={showNextMessage}
        className="mt-4 bg-[#FF69B4] hover:bg-[#FF1493]"
      >
        <Heart className="mr-2 h-4 w-4" />
        Next Message
      </Button>

      {/* Floating hearts */}
      {isVisible && (
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: "100%",
                scale: 0
              }}
              animate={{
                y: "-100%",
                scale: [0, 1, 0],
                x: Math.random() * 100 - 50 + "%"
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: 0
              }}
            >
              <Heart className="text-[#FF1493] h-6 w-6" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
