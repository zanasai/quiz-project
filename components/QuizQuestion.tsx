'use client';

import { useState, useEffect } from 'react';
import { Question, CoffeeType } from '@/lib/coffeeData';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (type: CoffeeType) => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setVisible(false);
    setSelected(null);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [question.id]);

  const progress = (questionNumber / totalQuestions) * 100;

  const handleSelect = (index: number, type: CoffeeType) => {
    setSelected(index);
    setTimeout(() => onAnswer(type), 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Прогресс */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Вопрос {questionNumber} из {totalQuestions}</span>
            <span className="font-semibold text-amber-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-amber-400 to-orange-500 h-2.5 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Вопрос */}
        <h2 className="text-2xl font-black text-gray-800 mb-8 text-center leading-snug">
          {question.text}
        </h2>

        {/* Ответы */}
        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index, answer.type)}
              disabled={selected !== null}
              className={`w-full text-left p-4 rounded-2xl border-2 font-medium transition-all duration-200 ${
                selected === index
                  ? 'border-amber-500 bg-amber-50 scale-98 shadow-md text-amber-800'
                  : selected !== null
                  ? 'border-gray-100 text-gray-400 cursor-not-allowed'
                  : 'border-gray-200 text-gray-700 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
