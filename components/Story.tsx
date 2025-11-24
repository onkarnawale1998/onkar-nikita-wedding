import React from 'react';
import { STORY_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-marathi text-4xl md:text-5xl text-maroon mb-2">आमची गोष्ट</h2>
          <p className="font-heading text-2xl text-gold italic">Our Beautiful Journey</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 transform md:-translate-x-1/2"></div>

          {STORY_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-maroon border-4 border-white rounded-full shadow-md transform -translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4 text-left md:text-right group">
                 {index % 2 !== 0 && (
                   <div className="md:text-right">
                      <span className="inline-block px-3 py-1 bg-cream text-maroon font-bold rounded-full text-sm mb-2 border border-gold/20">{item.year}</span>
                      <h3 className="font-heading text-2xl text-maroon font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                      <p className="font-body text-gray-600 leading-relaxed">{item.description}</p>
                   </div>
                 )}
                 {index % 2 === 0 && (
                   <div className="md:text-left">
                       <span className="inline-block px-3 py-1 bg-cream text-maroon font-bold rounded-full text-sm mb-2 border border-gold/20 md:hidden">{item.year}</span>
                       <div className="md:hidden">
                          <h3 className="font-heading text-2xl text-maroon font-bold mb-2">{item.title}</h3>
                          <p className="font-body text-gray-600 leading-relaxed">{item.description}</p>
                       </div>
                       
                        {/* Image for Desktop (when right aligned logic applies) */}
                       <div className="hidden md:block overflow-hidden rounded-lg shadow-lg border-2 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                       </div>
                   </div>
                 )}
              </div>

               {/* Image Side / Content Side swap for layout */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                  {index % 2 !== 0 && (
                    <div className="overflow-hidden rounded-lg shadow-lg border-2 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                       <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                    </div>
                  )}
                  {index % 2 === 0 && (
                    <div className="hidden md:block md:text-left">
                       <span className="inline-block px-3 py-1 bg-cream text-maroon font-bold rounded-full text-sm mb-2 border border-gold/20">{item.year}</span>
                       <h3 className="font-heading text-2xl text-maroon font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                       <p className="font-body text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  )}
                  {/* Mobile image was already shown above for layout balance in single col, actually simple stack is better for mobile */}
                  {index % 2 === 0 && (
                     <div className="md:hidden overflow-hidden rounded-lg shadow-lg border-2 border-white mt-4">
                        <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                     </div>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;