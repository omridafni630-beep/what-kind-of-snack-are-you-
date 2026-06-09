import { motion } from 'motion/react';
import { Question } from '../types';

interface QuizProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (mappedTo: string) => void;
}

export function Quiz({ question, currentIndex, totalQuestions, onAnswer }: QuizProps) {
  const progressPercentage = ((currentIndex) / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center pt-12 p-6 bg-grid-pattern">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl bg-gray-800 rounded-full h-3 mb-12 overflow-hidden shadow-inner">
        <motion.div 
          className="bg-gradient-to-l from-orange-400 to-pink-500 h-3 rounded-full"
          initial={{ width: `${((currentIndex - 1) / totalQuestions) * 100}%` }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <motion.div 
        key={question.id} // Re-animate when question changes
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <div className="text-orange-400 font-bold mb-4">שאלה {currentIndex} מתוך {totalQuestions}</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
          {question.text}
        </h2>

        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              onClick={() => onAnswer(answer.mappedTo)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-right bg-gray-800 hover:bg-gray-700 text-lg md:text-xl p-5 md:p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors shadow-sm"
            >
              {answer.text}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
