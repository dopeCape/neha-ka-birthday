import React from "react"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { SPECIAL_MESSAGE } from "../lib/constants";
import { Card, CardContent } from "../components/ui/card";
import { Heart } from "lucide-react";

export function SpecialButton() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Button
        onClick={() => setIsRevealed(true)}
        className="bg-[#FF1493] hover:bg-[#FF69B4] transition-all duration-300"
        size="lg"
      >
        <Heart className="mr-2 h-5 w-5" />
        Click for a Special Message
      </Button>

      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsRevealed(false)}
          >
            <motion.div
              className="max-w-md w-full"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-center font-playfair text-xl text-[#333333] leading-relaxed">
                    {SPECIAL_MESSAGE}
                  </p>
                  <div className="flex justify-center mt-4">
                    <Heart className="text-[#FF1493] h-8 w-8" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
