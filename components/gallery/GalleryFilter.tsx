import { motion } from 'framer-motion';

interface Category {
  name: string;
  isActive: boolean;
}

interface GalleryFilterProps {
  categories: Category[];
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilter({ categories, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <motion.button
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category.isActive
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          aria-pressed={category.isActive}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}