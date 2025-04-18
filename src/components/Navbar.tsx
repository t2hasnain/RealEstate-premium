
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { Button } from './ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <motion.nav 
          className="flex items-center justify-between px-6 py-4 glass-card mx-auto my-4 max-w-7xl" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-bold text-white">
            Luxe Estates
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
  <NavLinks />
  
  <Button className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition-all">
    <i className="fab fa-github text-xl"></i>
    <a href="https://github.com/t2hasnain/RealEstate-premium"> Open Source </a>
  </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      </AnimatePresence>
    </>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="text-white hover:text-white/80 transition-colors font-medium">
        Home
      </Link>
      <Link to="/about" className="text-white hover:text-white/80 transition-colors font-medium">
        About
      </Link>
      <Link to="/contact" className="text-white hover:text-white/80 transition-colors font-medium">
        Contact
      </Link>
    </>
  );
};

export default Navbar;
