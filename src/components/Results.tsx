import { motion } from 'motion/react';
import { SnackProfile } from '../types';
import { Share2, RefreshCw, Facebook } from 'lucide-react';

interface ResultsProps {
  profile: SnackProfile;
  runnerUps: SnackProfile[];
  onRetake: () => void;
}

export function Results({ profile, runnerUps, onRetake }: ResultsProps) {
  const shareText = `עשיתי את מבחן החטיפים וגיליתי שאני ${profile.title.replace('אתה ', '').replace('!', '')}! איזה חטיף אתה?`;
  const shareUrl = window.location.href;

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-grid-pattern py-12">
      <motion.div 
        className="w-full max-w-2xl bg-gray-900/90 backdrop-blur-2xl border border-gray-800 rounded-[2rem] overflow-hidden shadow-2xl relative"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        <div 
          className="h-2 w-full absolute top-0 left-0 right-0" 
          style={{ backgroundColor: profile.color }}
        />
        
        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-gray-800 shadow-2xl mb-8 object-cover z-10 relative"
            style={{ borderColor: profile.color }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.2 }}
          >
            <img 
              src={profile.imageUrl} 
              alt={profile.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ color: profile.color }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {profile.title}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {profile.description}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              onClick={handleWhatsAppShare}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold text-lg transition-colors"
            >
              <Share2 size={24} />
              שתף ב-WhatsApp
            </button>
            <button 
              onClick={handleFacebookShare}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white py-4 px-6 rounded-2xl font-bold text-lg transition-colors"
            >
              <Facebook size={24} />
              שתף ב-Facebook
            </button>
          </motion.div>

          {runnerUps && runnerUps.length > 0 && (
            <motion.div 
              className="mt-12 w-full pt-8 border-t border-gray-800 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white text-center">חטיפים נוספים שכמעט היית:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {runnerUps.map((runnerUp, idx) => (
                  <motion.div 
                    key={runnerUp.id}
                    className="bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center border border-gray-700 hover:border-gray-500 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2"
                      style={{ borderColor: runnerUp.color }}
                    >
                      <img src={runnerUp.imageUrl} alt={runnerUp.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-sm text-gray-200" style={{ color: runnerUp.color }}>
                      {runnerUp.title.replace('אתה ', '').replace('!', '')}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.button 
            onClick={onRetake}
            className="mt-12 flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <RefreshCw size={20} />
            נסה שוב
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
