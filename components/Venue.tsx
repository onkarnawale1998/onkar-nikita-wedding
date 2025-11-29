import React from 'react';
import { ACCOMMODATIONS } from '../constants';
import { MapPin, Navigation, Car, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-20 bg-gradient-to-t from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-marathi text-4xl md:text-5xl text-maroon mb-4">ठिकाण आणि निवास</h2>
          <p className="font-heading text-2xl text-gold italic">Venue & Accommodations</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Venue Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gold/20"
          >
             <div className="h-64 overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.156545759755!2d74.4754!3d19.7695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ2JzEwLjIiTiA3NMKwMjgnMzEuNCJF!5e0!3m2!1sen!2sin!4v1625637282020!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Venue Map"
                  className="w-full h-full object-cover"
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold text-xl">Sai Silver Oak Lawns</h3>
                </div>
             </div>
             
             <div className="p-8">
                <div className="flex items-start mb-6">
                   <MapPin className="text-maroon w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                   <div>
                       <h4 className="font-marathi text-xl font-bold text-gray-800">साई सिल्वर ओक लॉन्स</h4>
                       <p className="text-gray-600">वॉटर पार्क समोर, शिर्डी, ता. राहाता, जि. अहिल्यानगर</p>
                   </div>
                </div>
                
                <div className="flex gap-4">
                    <a 
                      href="https://share.google/IeuHosBFAgim1Sv0S" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-maroon text-white text-center py-3 rounded-md font-medium hover:bg-maroon-dark transition-colors flex items-center justify-center"
                    >
                       <Navigation size={18} className="mr-2" />
                       Get Directions
                    </a>
                </div>
             </div>
          </motion.div>

          {/* Accommodation & Travel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
             {/* Accommodation List */}
             <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                <h3 className="font-marathi text-2xl text-maroon mb-6 flex items-center">
                    <span className="text-2xl mr-2">🏨</span>
                    निवास व्यवस्था
                </h3>
                <div className="space-y-6">
                    {ACCOMMODATIONS.map((hotel, idx) => (
                        <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                            <h4 className="font-bold text-gray-800">{hotel.name}</h4>
                            <div className="flex justify-between text-sm text-gray-600 mt-1">
                                <span>{hotel.distance}</span>
                                <span className="text-maroon font-medium">{hotel.priceRange}</span>
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gold-dark">
                                <Phone size={14} className="mr-1" />
                                <a href={`tel:${hotel.contact}`}>{hotel.contact}</a>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* Travel Tips */}
             <div className="bg-cream p-6 rounded-xl shadow-inner">
                <h3 className="font-marathi text-xl text-maroon mb-4 flex items-center">
                   <Car size={20} className="mr-2" />
                   प्रवास माहिती (Travel Info)
                </h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                    <li>The venue is located conveniently near the Shirdi Water Park.</li>
                    <li>Nearest Airport: Shirdi International Airport (14km).</li>
                    <li>Nearest Railway Station: Sainagar Shirdi Terminus (3km).</li>
                    <li>Ample parking space is available at the venue.</li>
                </ul>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;