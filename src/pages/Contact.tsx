
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FloatingLabelInput from '../components/FloatingLabelInput';
import FloatingLabelTextarea from '../components/FloatingLabelTextarea';
import { Button } from '../components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen gradient-green-blue pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>

          <motion.p 
            className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reach out to our team for assistance with your real estate needs.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <FloatingLabelInput
                    id="name"
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <FloatingLabelInput
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <FloatingLabelTextarea
                    id="message"
                    name="message"
                    label="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-white py-3 font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div className="space-y-8 mb-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-white/90">(123) 456-7890</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-white/90">info@luxeestates.com</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Our Office</h3>
                      <p className="text-white/90">123 Luxury Lane, Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="h-[300px] rounded-xl overflow-hidden glass-card"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209306869622!3d34.08346349443671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1682232183151!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
