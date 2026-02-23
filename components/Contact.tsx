import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-4">
          <h2 className="text-4xl font-bold animate-gradient-text">Get In Touch</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
          />
        </div>
        <p className="text-gray-400">Have a question or want to work together?</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <motion.a 
                href="mailto:ksriram170@gmail.com" 
                whileHover={{ x: 5, color: '#3b82f6' }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 transition-all group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-bold">ksriram170@gmail.com</p>
                </div>
              </motion.a>
              <motion.a 
                href="tel:9025874993" 
                whileHover={{ x: 5, color: '#3b82f6' }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 transition-all group-hover:text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="font-bold">+91 90258 74993</p>
                </div>
              </motion.a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 transition-all group-hover:text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="font-bold">Trichy, Tamil Nadu</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 text-center">Follow Me</p>
              <div className="flex justify-center gap-4">
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5, color: '#3b82f6' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-2xl transition-all"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/sriram-k-099a7a33a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5, color: '#3b82f6' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-2xl transition-all"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-3">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 glass rounded-3xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 px-1">Your Name</label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-6 py-4 glass rounded-2xl border border-transparent outline-none transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 px-1">Your Email</label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 glass rounded-2xl border border-transparent outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 px-1">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hi Sriram, I'd like to talk about..."
                className="w-full px-6 py-4 glass rounded-2xl border border-transparent outline-none transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={submitted}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                submitted ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {submitted ? (
                'Message Sent Successfully!'
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;