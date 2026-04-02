'use client';

import { useState, useEffect } from 'react';
import { CoffeeResult } from '@/lib/coffeeData';

interface QuizResultProps {
  result: CoffeeResult;
  onRestart: () => void;
}

export default function QuizResult({ result, onRestart }: QuizResultProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 transition-colors duration-700"
      style={{ backgroundColor: result.bgColor }}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transition-all duration-700 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Верхняя часть */}
        <div
          className="p-10 text-center relative overflow-hidden"
          style={{ backgroundColor: result.bgColor }}
        >
          {/* Декоративные круги */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 bg-white" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full opacity-10 bg-white" />

          <div
            className={`text-8xl mb-4 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            {result.emoji}
          </div>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: result.color, opacity: 0.6 }}
          >
            Твоя кофейная личность
          </p>
          <h1
            className="text-5xl font-black mb-2"
            style={{ color: result.color }}
          >
            {result.name}
          </h1>
          <p
            className="text-sm italic"
            style={{ color: result.color, opacity: 0.75 }}
          >
            {result.personality}
          </p>
        </div>

        {/* Нижняя часть */}
        <div className="p-8">
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            {result.description}
          </p>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 mb-5 font-medium tracking-wide uppercase">
              Кофейня «Берёзка»
            </p>
            <button
              onClick={onRestart}
              className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold py-3.5 px-10 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              Пройти ещё раз ↩
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
