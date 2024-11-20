import React, { useState } from 'react';
import { Todo } from '../types/todo';
import ConfirmationModal from './ConfirmationModal';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onUpdate({
      ...todo,
      title,
      description
    });
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    onUpdate({
      ...todo,
      completed: !todo.completed
    });
  };

  if (isEditing) {
    return (
      <div className="py-3 px-4">
        <form onSubmit={handleSubmit} className="flex gap-4 items-start">
          <div className="flex-1">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
              placeholder="Title"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Description"
              rows={2}
            />
          </div>
          <div className="flex gap-2 whitespace-nowrap">
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600 text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1.5 rounded-md hover:bg-gray-600 text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="py-3 px-4 flex items-center gap-4 hover:bg-blue-50 bg-white border-l-4 border-l-blue-500 transition-colors duration-200">
        <div className="flex-none">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {todo.title}
          </h3>
          {todo.description && (
            <p className={`text-sm mt-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
              {todo.description}
            </p>
          )}
        </div>

        <div className="flex gap-3 flex-none">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600 text-sm font-medium"
          >
            Edit
          </button>
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="text-red-500 hover:text-red-600 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => onDelete(todo.id)}
        title="Delete Todo"
        message="Are you sure you want to delete this todo? This action cannot be undone."
      />
    </>
  );
};

export default TodoItem; 