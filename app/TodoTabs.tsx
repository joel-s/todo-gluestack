import * as React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/react-native-reusables/tabs';
import { Text, View } from 'react-native';
import TodoList from '@/app/TodoList';
import { defaultTodos } from '@/constants/todo';

const Home = () => {
  const [value, setValue] = React.useState(Object.keys(defaultTodos)[0]);
  return (
    <View>
      <Tabs
        value={value}
        onValueChange={setValue}
        className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
      >
        <TabsList className="flex-row w-full bg-gray-100">
          {Object.keys(defaultTodos).map((category) => (
            <TabsTrigger key={category} value={category} className="flex-1">
              <Text>{category}</Text>
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.keys(defaultTodos).map((category) => (
          <TabsContent key={category} value={category}>
            <TodoList list={defaultTodos[category]} />
          </TabsContent>
        ))}
      </Tabs>
    </View>
  );
};

export default Home;
