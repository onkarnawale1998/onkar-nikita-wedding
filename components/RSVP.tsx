import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const RSVP: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="rsvp" className="py-20 bg-maroon relative">
        {/* Decorative pattern overlay */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl text-maroon mb-2">Are You Attending?</h2>
              <p className="font-body text-gray-500">Please confirm your presence by Nov 20th, 2025</p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-heading text-maroon mb-2">Thank You!</h3>
                <p className="text-gray-600">Your RSVP has been received. We look forward to seeing you!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                    <select
                      id="guests"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent outline-none"
                      value={formState.guests}
                      onChange={(e) => setFormState({...formState, guests: parseInt(e.target.value)})}
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="attending" className="block text-sm font-medium text-gray-700 mb-1">Attending?</label>
                    <select
                      id="attending"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent outline-none"
                      value={formState.attending}
                      onChange={(e) => setFormState({...formState, attending: e.target.value})}
                    >
                      <option value="yes">Yes, Joyfully</option>
                      <option value="no">Regretfully No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message for the Couple (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent outline-none transition-all"
                    placeholder="Write your wishes here..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-maroon to-maroon-dark text-white font-bold py-4 rounded-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
                >
                  Send RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;