'use client';

import { useState } from 'react';
import { questions, coffeeResults, CoffeeType } from '@/lib/coffeeData';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';

type Screen = 'start' | 'quiz' | 'result';

export default function Home() {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<CoffeeType, number>>({
    espresso: 0,
    latte: 0,
    cappuccino: 0,
    americano: 0,
  });

  const handleAnswer = (type: CoffeeType) => {
    const newScores = { ...scores, [type]: scores[type] + 10 };
    setScores(newScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen('result');
    }
  };

  const getResult = (): CoffeeType => {
    return (Object.keys(scores) as CoffeeType[]).reduce((a, b) =>
      scores[a] >= scores[b] ? a : b
    );
  };

  const handleRestart = () => {
    setScreen('start');
    setCurrentQuestion(0);
    setScores({ espresso: 0, latte: 0, cappuccino: 0, americano: 0 });
  };

  if (screen === 'quiz') {
    return (
      <QuizQuestion
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  if (screen === 'result') {
    return (
      <QuizResult
        result={coffeeResults[getResult()]}
        onRestart={handleRestart}
      />
    );
  }

  // Стартовый экран
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-10 text-center">
        <div className="text-6xl mb-4">☕</div>
        <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">
          Кофейня «Берёзка»
        </p>
        <h1 className="text-3xl font-black text-gray-800 mb-4">
          Какая ты кофейная личность?
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Ответь на 7 вопросов и узнай, какой напиток отражает твой характер.
        </p>
        <button
          onClick={() => setScreen('quiz')}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Начать квиз →
        </button>
        <p className="text-xs text-gray-400 mt-6">7 вопросов · 4 результата</p>
      </div>
    </div>
  );
}
