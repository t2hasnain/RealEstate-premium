
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  id: string;
  background: string;
  title: string;
  description: string;
  children?: ReactNode;
}

const Section = ({ id, background, title, description, children }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section 
      id={id} 
      className={`${background} scroll-section h-screen flex items-center justify-center relative`}
    >
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-white text-center md:text-left mx-auto md:mx-0 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">{description}</p>
          
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
