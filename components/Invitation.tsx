import React from 'react';
import SectionDivider from './SectionDivider';
import { motion } from 'framer-motion';

const Invitation: React.FC = () => {
  return (
    <section id="invitation" className="py-20 bg-cream relative overflow-hidden">
       {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-maroon/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 md:p-12 shadow-2xl rounded-lg border border-gold/30 text-center relative"
        >
            {/* Border Design */}
            <div className="absolute inset-2 md:inset-4 border-2 border-dashed border-maroon/30 rounded-lg pointer-events-none"></div>
            <div className="absolute inset-0 border-8 border-double border-gold/20 rounded-lg pointer-events-none"></div>

            {/* Traditional Header */}
            <div className="mb-10 relative">
               <span className="text-4xl absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-gold">🕉️</span>
               <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 absolute bottom-0"></div>
            </div>

            <p className="font-marathi text-maroon text-2xl font-bold mb-6">॥ श्री गणेश प्रसन्न ॥ 🙏✨</p>

            <div className="grid md:grid-cols-2 gap-12 items-start mt-8 mb-12">
                <div className="text-center relative">
                    <div className="mb-2">
                        <span className="font-marathi text-3xl text-maroon font-extrabold block mb-2">चि. ओंकार</span>
                        <span className="text-sm text-gold uppercase tracking-widest font-heading">Groom</span>
                    </div>
                    <div className="font-marathi text-base md:text-lg text-gray-700 space-y-2 leading-relaxed">
                        <p>कै. शांताबाई व कै. वैजीनाथ बाबुराव नवले यांचे नातू,</p>
                        <p>श्रीमती संगीता व कै. प्रकाश वैजीनाथ नवले,</p>
                        <p className="font-semibold text-maroon">रा. बीड, ता. व जि. बीड यांचे चिरंजीव</p>
                    </div>
                </div>

                <div className="flex items-center justify-center md:hidden">
                    <span className="font-script text-4xl text-gold">&</span>
                </div>

                <div className="text-center relative">
                     <div className="mb-2">
                        <span className="font-marathi text-3xl text-maroon font-extrabold block mb-2">चि. सौ. का. निकिता</span>
                        <span className="text-sm text-gold uppercase tracking-widest font-heading">Bride</span>
                    </div>
                    <div className="font-marathi text-base md:text-lg text-gray-700 space-y-2 leading-relaxed">
                        <p>कै. शांताबाई व कै. मनोहर बापुराव देसाई यांची नात,</p>
                        <p>सौ. रंजना व श्री. दिनकर मनोहर देसाई,</p>
                        <p className="font-semibold text-maroon">रा. शिर्डी, ता. राहाता, जि. अहिल्यानगर यांची कन्या</p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            <div className="my-10 space-y-6">
                <p className="font-marathi text-xl md:text-2xl text-gray-800 leading-relaxed">
                    मिती <span className="text-maroon font-bold">मार्गशीर्ष कृ. १ शके १९४७</span>,<br/>
                    <span className="text-maroon font-bold text-2xl md:text-3xl block my-3">शुक्रवार दि. ०५/१२/२०२५, रोजी</span>
                    दुपारी <span className="text-maroon font-bold">१२:३० वा.</span> या शुभमुहूर्तावर 💫<br/>
                    विवाह सोहळा करण्याचे योजिले आहे.
                </p>
                <p className="font-marathi text-lg md:text-xl text-gray-600 italic">
                    तरी या मंगल कार्यांस सहकुटुंब सहपरिवार उपस्थित राहून<br/>
                    नववधू-वरास शुभाशिर्वाद द्यावेत,<br/>
                    ही नम्र विनंती. 🙏❤
                </p>
            </div>

            <div className="bg-maroon/5 py-6 px-4 rounded-lg border border-maroon/10 mt-8">
                <h4 className="font-marathi font-bold text-maroon text-xl mb-2">✦ यासाठी आग्रहाचे आमंत्रण ✦</h4>
                <div className="flex flex-col md:flex-row justify-center gap-8 text-left max-w-2xl mx-auto mt-4">
                    <div className="flex-1">
                        <p className="font-bold text-maroon font-marathi">■ निमंत्रक 👨‍👩‍👧‍👦</p>
                        <p className="font-marathi text-lg">समस्त नवले परिवार</p>
                    </div>
                    <div className="flex-1">
                         <p className="font-bold text-maroon font-marathi">■ स्थळ 📍</p>
                         <p className="font-marathi">साई सिल्वर ओक लॉन्स,<br/>वॉटर पार्क समोर, शिर्डी</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <p className="font-marathi text-sm text-gray-500">
                   टिप – आपली उपस्थिती हाच अनमोल आहेर 🎁✨
                </p>
            </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;