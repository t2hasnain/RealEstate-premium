
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Home, Key, MapPin, Award, Users } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen gradient-blue-purple pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Our Real Estate Business
          </motion.h1>

          <motion.p 
            className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We have over 10 years of experience helping people find their dream homes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="glass-card p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Properties</h3>
                    <p className="text-white/80">
                      We curate the finest properties in the most desirable locations, ensuring our clients have access to the best the market has to offer.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Key className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Guidance</h3>
                    <p className="text-white/80">
                      Our team of experienced real estate professionals provides personalized guidance through every step of the buying or selling process.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Expertise</h3>
                    <p className="text-white/80">
                      With deep knowledge of local markets, we help clients make informed decisions that align with their lifestyle and investment goals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 mix-blend-overlay"></div>
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000')] bg-cover bg-center"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-semibold text-white">Award Winning</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Our commitment to excellence has earned us recognition as a top real estate firm in the region.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Team section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-24 text-center"
          >
            <div className="flex items-center justify-center mb-12">
              <Users className="w-8 h-8 text-white mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Team</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "John Smith", role: "Principal Broker" },
                { name: "Emily Johnson", role: "Senior Agent" },
                { name: "Michael Brown", role: "Property Consultant" }
              ].map((person, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-white mb-1">{person.name}</h3>
                  <p className="text-white/80">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
