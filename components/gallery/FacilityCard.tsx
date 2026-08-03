import { motion } from 'framer-motion';
import Image from 'next/image';

interface Facility {
  id: string;
  image: string;
  name: string;
  description: string;
}

interface FacilityCardProps {
  item: Facility;
}

export default function FacilityCard({ item }: FacilityCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 100 } }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
}