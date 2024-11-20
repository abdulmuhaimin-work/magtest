import { Todo } from '../types/todo';

export const TodoService = {
  getTodos(): Todo[] {
    const savedTodos = localStorage.getItem('todos');
    const todos = savedTodos ? JSON.parse(savedTodos) : [];
    return todos.map((todo: Todo) => ({
      ...todo,
      completed: todo.completed ?? false
    }));
  },

  saveTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  },
}; 