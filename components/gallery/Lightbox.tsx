import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface LightboxProps {
  images: string[];
  startIndex: number;
}

export default function Lightbox({ images, startIndex }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setCurrentIndex(0);
      }}
    >
      <motion.button
        className="absolute top-4 left-4 z-10"
        onClick={prevImage}
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M15 14l-7-7-7 7" />
        </svg>
      </motion.button>

      <motion.button
        className="absolute bottom-4 right-4 z-10"
        onClick={nextImage}
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M7 14l7-7 7 7" />
        </svg>
      </motion.button>

      <div className="max-w-4xl max-h-[90vh] mx-auto">
        <div className="flex justify-center">
          <motion.img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="rounded-lg"
            whileTap={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="flex justify-between mt-4">
          <motion.button
            className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
            onClick={prevImage}
          >
            Previous
          </motion.button>

          <motion.button
            className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
            onClick={nextImage}
          >
            Next
          </motion.button>
        </div>
      </div>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setCurrentIndex(0);
        }}
      >
        <motion.button
          className="absolute top-4 left-4 z-10"
          onClick={() => setCurrentIndex(0)}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M10 15v-5m-5-5v5m5 5v-5m5-5v-5m-5 5v-5" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}