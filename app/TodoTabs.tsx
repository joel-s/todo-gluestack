import * as React from 'react';
import * as TabsPrimitive from '@rn-primitives/tabs';
import { Text } from 'react-native';
import TodoList from '@/app/TodoList';

const categoryNames = ['God', 'Health', 'Career', 'Home'];

const Home = () => {
  const [value, setValue] = React.useState(categoryNames[0]);
  return (
    <TabsPrimitive.Root value={value} onValueChange={setValue}>
      <TabsPrimitive.List>
        {categoryNames.map((name) => (
          <TabsPrimitive.Trigger key={name} value={name}>
            <Text>{name}</Text>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {categoryNames.map((name) => (
        <TabsPrimitive.Content key={name} value={name}>
          <TodoList />
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default Home;
