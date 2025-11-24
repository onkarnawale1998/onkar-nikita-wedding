import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-cream py-12 border-t border-gold/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl mb-6 text-gradient-gold">Onkar & Nikita</h2>
        
        <div className="flex justify-center items-center space-x-2 text-gold/80 mb-8 font-marathi">
            <span>सप्रेम नमस्कार</span>
            <span>•</span>
            <span>धन्यवाद</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 text-sm text-gray-400">
           <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider">Location</h4>
              <p>Sai Silver Oak Lawns,</p>
              <p>Shirdi, Maharashtra</p>
           </div>
           <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider">Contact</h4>
              <p>Navale Family</p>
              <p>+91 98765 43210</p>
           </div>
           <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider">Hashtag</h4>
              <p className="font-script text-xl text-gold">#OmNikKiShadi</p>
           </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col items-center">
          <p className="flex items-center text-sm text-gray-500">
            Made with <Heart size={14} className="mx-1 text-red-500 fill-current" /> for the lovely couple
          </p>
          <p className="text-xs text-gray-600 mt-2">© 2025 Wedding Invitation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;