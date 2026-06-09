import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

interface AnalyzingProps {
  onComplete: () => void;
}

export function Analyzing({ onComplete }: AnalyzingProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-grid-pattern">
      <motion.div 
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="mb-8"
        >
          <div className="relative">
            <Loader2 className="w-24 h-24 text-orange-500" />
            <motion.div 
              className="absolute inset-0 border-4 border-t-pink-500 border-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          מנתח את ה-DNA החטיפי שלך...
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">בודק העדפות טעם, מידת פריכות ושרידי אבקה...</p>
      </motion.div>
    </div>
  );
}
