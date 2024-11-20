import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { useTodos } from './hooks/useTodos';

const App: React.FC = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Todo List
        </h1>
        <div className="mb-8">
          <AddTodoForm onAdd={addTodo} />
        </div>
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App; 