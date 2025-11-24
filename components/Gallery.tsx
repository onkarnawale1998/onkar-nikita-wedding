import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-maroon mb-4">Sweet Memories</h2>
          <p className="font-script text-3xl text-gold">Captured Moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg shadow-md group ${index % 3 === 1 ? 'md:row-span-2' : ''} ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-heading text-2xl tracking-wide border-b-2 border-gold pb-1">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;