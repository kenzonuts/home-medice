import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tag } from '@/components/ui/tag';

interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
}

interface GalleryCardProps {
  item: GalleryItem;
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 100 } }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <Tag className="text-sm bg-gray-100 text-gray-700 rounded-full px-2 py-1">
          {item.category}
        </Tag>
        <h3 className="text-lg font-semibold mt-2 text-gray-800">{item.title}</h3>
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-500"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M10 15v-5m-5 5v-5M10 10v-5m5-5v-5M10 5v5m-5 5v5M15 10H5" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}