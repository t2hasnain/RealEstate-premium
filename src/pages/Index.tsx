
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { Button } from '../components/ui/button';
import { Home, Building, Key, Award, Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="scroll-container">
        {/* Section 1 */}
        <Section
          id="hero"
          background="gradient-blue-purple"
          title="Find Your Dream Home"
          description="We help you discover the perfect property that matches your lifestyle and preferences."
        >
          <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-white text-purple-700 hover:bg-white/90">
              View Properties
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white/10">
              Learn More
            </Button>
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <div className="text-white text-sm font-light">Scroll Down</div>
            <div className="w-0.5 h-8 bg-white/30 mx-auto mt-2"></div>
          </motion.div>
        </Section>

        {/* Section 2 */}
        <Section
          id="properties"
          background="gradient-purple-pink"
          title="Luxury Properties"
          description="Explore our collection of high-end properties in the most desirable locations."
        >
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: false }}
              >
                <Building className="w-10 h-10 mb-4 mx-auto md:mx-0" />
                <h3 className="text-xl font-semibold mb-2">Premium Housing</h3>
                <p className="text-sm opacity-80">Discover our exclusive properties designed for luxury living.</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Section 3 */}
        <Section
          id="services"
          background="gradient-green-blue"
          title="Our Services"
          description="We provide comprehensive real estate services to help you buy, sell, or rent properties."
        >
          <div className="flex justify-center md:justify-start mt-8">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
              {[
                { icon: Search, title: "Property Search" },
                { icon: Key, title: "Buying & Selling" },
                { icon: Award, title: "Expert Advice" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex flex-col items-center text-center w-40"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="bg-white/20 p-4 rounded-full mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 4 */}
        <Section
          id="testimonials"
          background="gradient-orange-pink"
          title="Client Testimonials"
          description="Hear what our satisfied clients have to say about their experience with us."
        >
          <motion.div 
            className="glass-card p-8 max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <p className="italic text-lg mb-6">"Working with Luxe Estates was a fantastic experience. They made finding our dream home easy and stress-free!"</p>
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-white/30 mr-4"></div>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm opacity-80">New Homeowner</p>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Section 5 */}
        <Section
          id="contact-cta"
          background="gradient-blue-cyan"
          title="Ready to Find Your Dream Home?"
          description="Contact our team of expert real estate agents to start your journey today."
        >
          <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4 mt-8">
            <Button className="bg-white text-blue-600 hover:bg-white/10">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white/10">
              View Properties
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Index;
