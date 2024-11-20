import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { TodoService } from '../services/todoService';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => TodoService.getTodos());

  useEffect(() => {
    TodoService.saveTodos(todos);
  }, [todos]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTodo: Todo) => {
    setTodos(todos.map(todo => 
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo
  };
}; 