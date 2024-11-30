import { Todo } from '@/components/app-components/TodoContainer';

const defaultTodos: Record<string, Todo[]> = {
  God: [
    {
      id: '1',
      task: 'Pray',
      completed: false,
    },
  ],
  Health: [
    {
      id: '1',
      task: 'Eat',
      completed: false,
    },
  ],
  Career: [
    {
      id: '1',
      task: 'Get UEI number',
      completed: false,
    },
  ],
  Home: [],
};

export { defaultTodos };
