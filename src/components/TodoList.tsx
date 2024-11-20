import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onUpdate: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onUpdate, onDelete }) => {
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="space-y-8">
      {/* Incomplete Tasks Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks To Do ({incompleteTodos.length})</h2>
        <div className="divide-y divide-gray-200">
          {incompleteTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>

      {/* Completed Tasks Section */}
      {completedTodos.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Completed Tasks ({completedTodos.length})</h2>
          <div className="divide-y divide-gray-200">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default TodoList; 