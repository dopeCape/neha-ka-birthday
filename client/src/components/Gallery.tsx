import { motion } from "framer-motion";
import { useState } from "react";
import { PHOTOS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {PHOTOS.map((photo) => (
        <motion.div
          key={photo.id}
          layoutId={`card-${photo.id}`}
          onClick={() => setSelectedId(photo.id)}
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white/90">
                <p className="text-gray-700 font-lato">{photo.caption}</p>
                <p className="text-sm text-gray-500 mt-1">Photo by {photo.credit}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {selectedId && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedId(null)}
        >
          <motion.div
            layoutId={`card-${selectedId}`}
            className="bg-white rounded-lg max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Card>
              <CardContent className="p-0">
                <img
                  src={PHOTOS.find(p => p.id === selectedId)?.url}
                  alt="Selected photo"
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <p className="text-lg font-playfair">
                    {PHOTOS.find(p => p.id === selectedId)?.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
