import React, { useState } from 'react';
import { VStack } from '@/components/ui/vstack';
import { FormControl } from '@/components/ui/form-control';
import { Input, InputField, InputIcon } from '@/components/ui/input';
import { AddIcon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import TodoContainer, { Todo } from '@/components/app-components/TodoContainer';
import shortid from 'shortid';

const TodoList = ({ list }: { list: Todo[] }) => {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState<Todo[]>(list);

  const addTodo = (task: string) => {
    const lastTodo = todos[todos?.length - 1];
    if (lastTodo?.task !== '' && task !== '') {
      setTodos([
        ...todos,
        {
          id: shortid.generate(),
          task: task,
          completed: false,
        },
      ]);
      setItem('');
    }
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos?.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <VStack className="flex-1 md:items-center md:justify-center ">
      <VStack className="rounded-md w-full md:h-[500px] min-h-24 pb-2">
        <FormControl className="my-4">
          <Input variant="underlined" size="lg" className="mx-6 my-1">
            <InputField
              placeholder="What is your next task?"
              value={item}
              onChangeText={(value) => setItem(value)}
              onSubmitEditing={() => addTodo(item)}
            />
            <Pressable onPress={() => addTodo(item)}>
              <InputIcon as={AddIcon} className="cursor-pointer h-4 w-4" />
            </Pressable>
          </Input>
        </FormControl>
        {todos?.map((todo: Todo, index: number) => (
          <TodoContainer
            key={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default TodoList;
