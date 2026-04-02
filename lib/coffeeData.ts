export type CoffeeType = 'espresso' | 'latte' | 'cappuccino' | 'americano';

export interface CoffeeResult {
  id: CoffeeType;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  personality: string;
  description: string;
  image: string;
}

export interface Answer {
  text: string;
  type: CoffeeType;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const coffeeResults: Record<CoffeeType, CoffeeResult> = {
  espresso: {
    id: 'espresso',
    name: 'Эспрессо',
    emoji: '☕',
    color: '#ffffff',
    bgColor: '#1a1a1a',
    personality: 'Быстрый, энергичный, целеустремлённый',
    description: 'Ты как эспрессо — коротко, резко, мощно. Ты не теряешь время на лишние слова и действия. Энергия твоя неистощима. Люди видят в тебе источник вдохновения и мотивации.',
    image: '/coffee/espresso.jpg',
  },
  latte: {
    id: 'latte',
    name: 'Латте',
    emoji: '🤍',
    color: '#3d2c1e',
    bgColor: '#d4a574',
    personality: 'Мягкий, дружелюбный, заботливый',
    description: 'Ты как латте — мягкий и согревающий. Твоя сила в способности слушать, понимать и поддерживать. Ты создаёшь место, куда хочет вернуться каждый. В твоём присутствии люди расслабляются.',
    image: '/coffee/latte.jpg',
  },
  cappuccino: {
    id: 'cappuccino',
    name: 'Капучино',
    emoji: '☁️',
    color: '#ffffff',
    bgColor: '#8b6f47',
    personality: 'Уверенный, внимательный к деталям, стратег',
    description: 'Ты как капучино — идеальный баланс. Ты видишь детали, которые другие упускают. Твоя уверенность спокойная и глубокая. Ты умеешь воплощать идеи в жизнь благодаря внимательности и стратегическому мышлению.',
    image: '/coffee/cappuccino.jpg',
  },
  americano: {
    id: 'americano',
    name: 'Американо',
    emoji: '🔌',
    color: '#ffffff',
    bgColor: '#6f4e37',
    personality: 'Практичный, честный, надёжный, минималист',
    description: 'Ты как американо — никаких излишеств, только суть. Ты ценишь простоту и эффективность. На тебя можно положиться, ты говоришь то, что думаешь, и делаешь то, что говоришь. Ты — скала, на которой строят здания.',
    image: '/coffee/americano.jpg',
  },
};

export const questions: Question[] = [
  {
    id: 1,
    text: 'Твой идеальный день — это...?',
    answers: [
      { text: '🚀 Полный событий и новых вызовов', type: 'espresso' },
      { text: '😌 Спокойный, с людьми, которых ты любишь', type: 'latte' },
      { text: '🎯 Хорошо спланированный и продуктивный', type: 'cappuccino' },
      { text: '✅ Простой, когда всё идёт по плану', type: 'americano' },
    ],
  },
  {
    id: 2,
    text: 'Как ты справляешься со стрессом?',
    answers: [
      { text: '💨 Спешу и действую быстро', type: 'espresso' },
      { text: '🫂 Ищу поддержку у близких', type: 'latte' },
      { text: '🧠 Анализирую ситуацию и ищу решение', type: 'cappuccino' },
      { text: '💪 Остаюсь спокойным и хладнокровным', type: 'americano' },
    ],
  },
  {
    id: 3,
    text: 'В группе друзей ты обычно...?',
    answers: [
      { text: '🔥 Инициатор, развлекаю всех', type: 'espresso' },
      { text: '💕 Слушаю и поддерживаю каждого', type: 'latte' },
      { text: '🎬 Организую события и разговоры', type: 'cappuccino' },
      { text: '👥 Просто наслаждаюсь компанией', type: 'americano' },
    ],
  },
  {
    id: 4,
    text: 'Какая работа тебе нравится больше?',
    answers: [
      { text: '🏃 Динамичная, с постоянными изменениями', type: 'espresso' },
      { text: '🤝 Связанная с людьми и помощью', type: 'latte' },
      { text: '📊 Требующая стратегии и планирования', type: 'cappuccino' },
      { text: '🔧 Практичная, видишь конкретный результат', type: 'americano' },
    ],
  },
  {
    id: 5,
    text: 'Твой стиль обучения...?',
    answers: [
      { text: '⚡ Быстрые курсы, сразу в дело', type: 'espresso' },
      { text: '📚 Подробные объяснения, много примеров', type: 'latte' },
      { text: '🎓 Структурированные программы, глубокое изучение', type: 'cappuccino' },
      { text: '🛠️ Обучение на практике, делая проекты', type: 'americano' },
    ],
  },
  {
    id: 6,
    text: 'В отношениях с людьми ты...?',
    answers: [
      { text: '💫 Яркий, заражаешь энтузиазмом', type: 'espresso' },
      { text: '🌸 Нежный, создаёшь безопасность', type: 'latte' },
      { text: '⚖️ Честный, ценишь взаимопонимание', type: 'cappuccino' },
      { text: '🤐 Верный и надёжный', type: 'americano' },
    ],
  },
  {
    id: 7,
    text: 'Если бы ты был напитком, то...?',
    answers: [
      { text: '⚡ Быстро дающим энергию', type: 'espresso' },
      { text: '🍶 Согревающим и приятным', type: 'latte' },
      { text: '🎨 Красивым и сбалансированным', type: 'cappuccino' },
      { text: '🚗 Практичным и надёжным', type: 'americano' },
    ],
  },
];
