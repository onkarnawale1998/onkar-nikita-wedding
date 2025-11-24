import React from 'react';
import { EVENTS } from '../constants';
import { MapPin, Calendar, Clock, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-pattern-motif bg-fixed relative">
      <div className="absolute inset-0 bg-white/95"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-marathi text-4xl md:text-5xl text-maroon mb-4">समारंभ</h2>
          <p className="font-heading text-2xl text-gold italic">Wedding Celebrations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {EVENTS.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl shadow-xl overflow-hidden border border-gray-100 group bg-white hover:shadow-2xl transition-all duration-300`}
            >
              {/* Colored Header Stripe */}
              <div className={`h-2 w-full ${event.icon === 'haldi' ? 'bg-yellow-400' : 'bg-maroon'}`}></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                         <h3 className="font-marathi text-2xl md:text-3xl text-maroon font-bold mb-1">{event.titleMr}</h3>
                         <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-gray-500">{event.titleEn}</h4>
                    </div>
                </div>

                <div className="space-y-4 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-gray-700">
                    <Calendar className={`w-5 h-5 mr-3 ${event.icon === 'haldi' ? 'text-yellow-600' : 'text-maroon'}`} />
                    <span className="font-body font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className={`w-5 h-5 mr-3 ${event.icon === 'haldi' ? 'text-yellow-600' : 'text-maroon'}`} />
                    <span className="font-body font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <MapPin className={`w-5 h-5 mr-3 flex-shrink-0 mt-1 ${event.icon === 'haldi' ? 'text-yellow-600' : 'text-maroon'}`} />
                    <span className="font-body">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 font-body text-sm leading-relaxed">
                    {event.description}
                </p>

                <div className="flex gap-2">
                   <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center py-3 px-4 text-white font-medium uppercase tracking-wider text-xs md:text-sm transition-colors rounded-md shadow-md
                        ${event.icon === 'haldi' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-maroon hover:bg-maroon-dark'}
                    `}
                    >
                    <Map size={16} className="mr-2" /> Google Maps
                  </a>
                  {/* Dummy Add to Calendar */}
                  <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-600">
                     <Calendar size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;