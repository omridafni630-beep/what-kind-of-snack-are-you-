import { useState } from 'react';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { Analyzing } from './components/Analyzing';
import { Results } from './components/Results';
import { questions, snackProfiles } from './data';
import { SnackId } from './types';

type GameState = 'landing' | 'quiz' | 'analyzing' | 'results';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [topSnacks, setTopSnacks] = useState<SnackId[]>([]);

  const handleStart = () => {
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setScores({});
  };

  const handleAnswer = (mappedTo: string) => {
    const newScores = { ...scores, [mappedTo]: (scores[mappedTo] || 0) + 1 };
    setScores(newScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate top 5 snacks
      const sortedSnacks = Object.keys(snackProfiles).sort((a, b) => {
        const scoreA = newScores[a] || 0;
        const scoreB = newScores[b] || 0;
        return scoreB - scoreA;
      }).slice(0, 5) as SnackId[];
      
      setTopSnacks(sortedSnacks);
      setGameState('analyzing');
    }
  };

  const handleRetake = () => {
    setGameState('landing');
    setCurrentQuestionIndex(0);
    setScores({});
    setTopSnacks([]);
  };

  return (
    <div className="min-h-screen text-white bg-gray-900">
      {gameState === 'landing' && <Landing onStart={handleStart} />}
      {gameState === 'quiz' && (
        <Quiz 
          question={questions[currentQuestionIndex]} 
          currentIndex={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer} 
        />
      )}
      {gameState === 'analyzing' && (
        <Analyzing onComplete={() => setGameState('results')} />
      )}
      {gameState === 'results' && topSnacks.length > 0 && (
        <Results 
          profile={snackProfiles[topSnacks[0]]} 
          runnerUps={topSnacks.slice(1).map(id => snackProfiles[id])}
          onRetake={handleRetake} 
        />
      )}
    </div>
  );
}

