import React, { useEffect, useState } from 'react';
import { WEDDING_DATE } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/60 via-maroon/30 to-cream z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1920"
          alt="Wedding Background"
          className="w-full h-full object-cover animate-pulse-slow scale-110"
        />
      </motion.div>

      {/* Decorative Particles (Simulated with CSS for performance) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/498px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg" alt="Ganesh" className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full border-2 border-gold/50 shadow-lg mb-4 opacity-90" />
            <p className="font-marathi text-gold text-2xl md:text-3xl drop-shadow-lg">॥ श्री गणेश प्रसन्न ॥</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <h1 className="font-marathi text-6xl md:text-8xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              ओंकार
            </h1>
            <span className="font-script text-5xl md:text-7xl text-gold drop-shadow-lg">&</span>
            <h1 className="font-marathi text-6xl md:text-8xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              निकिता
            </h1>
          </div>
           <div className="mt-2 text-gold/80 font-heading tracking-widest uppercase text-sm md:text-lg">
              Onkar & Nikita
           </div>
        </motion.div>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="font-marathi text-cream text-xl md:text-2xl mb-12 drop-shadow-md bg-maroon/30 inline-block px-6 py-2 rounded-full backdrop-blur-sm border border-gold/30"
        >
          ✨ शुभविवाह सोहळा ✨
        </motion.p>

        {/* Countdown */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1.5 }}
           className="flex flex-wrap justify-center gap-4 md:gap-8 text-cream"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center bg-black/20 backdrop-blur-sm rounded-lg p-3 min-w-[80px] border border-gold/20">
              <span className="text-3xl md:text-4xl font-heading font-bold text-gold">{item.value}</span>
              <span className="text-xs md:text-sm uppercase tracking-wider text-white/80">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold/80"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;