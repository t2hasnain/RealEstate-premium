
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const menuVariants = {
    hidden: {
      x: '100%',
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: 'afterChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute right-0 top-0 h-full w-full sm:w-80 bg-gradient-to-b from-purple-600 to-blue-700 p-6"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-8">
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex flex-col space-y-6">
  {menuItems.map((item, i) => (
    <motion.div
      key={i}
      variants={itemVariants}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={item.to}
        className="text-white text-2xl font-medium hover:text-white/80 transition-colors"
        onClick={onClose}
      >
        {item.label}
      </Link>
    </motion.div>
  ))}

  {/* GitHub Button */}
  <motion.div variants={itemVariants} transition={{ duration: 0.3 }}>
    <Button className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition-all">
      <i className="fab fa-github text-xl"></i>
      <a
        href="https://github.com/t2hasnain/RealEstate-premium"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        Open Source
      </a>
    </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
