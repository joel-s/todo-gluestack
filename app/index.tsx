import * as React from 'react';
import * as TabsPrimitive from '@rn-primitives/tabs';
import { Text } from 'react-native';
import TodoTabs from '@/app/TodoTabs';

const listNames = ['God', 'Health', 'Career', 'Home'];

const Home = () => {
  return <TodoTabs />;
};

export default Home;
