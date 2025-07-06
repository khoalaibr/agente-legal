import { useState } from 'react';
import { Button } from '../../ui/Button';
import type { TaskState } from '../../../features/dashboard/dashboardSlice';

type NewTaskFormProps = {
  onCancel: () => void;
  // La función onSubmit ahora pasa los datos del formulario
  onSubmit: (taskData: { text: string; priority: TaskState['priority'] }) => void;
};

export function NewTaskForm({ onCancel, onSubmit }: NewTaskFormProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<TaskState['priority']>('Normal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return; // Evita enviar tareas vacías
    onSubmit({ text, priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* Campo de Título */}
        <div>
          <label htmlFor="task-title" className="block text-sm font-medium text-secondary-700 mb-1">
            Título de la Tarea
          </label>
          <input
            type="text"
            id="task-title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            autoFocus
          />
        </div>
        
        {/* Campo de Prioridad */}
        <div>
          <label htmlFor="task-priority" className="block text-sm font-medium text-secondary-700 mb-1">
            Prioridad
          </label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as TaskState['priority'])}
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-white"
          >
            <option value="Normal">Normal</option>
            <option value="Media">Media</option>
            <option value="Urgente">Urgente</option>
          </select>
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="flex justify-end space-x-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" variant="primary">
          Guardar Tarea
        </Button>
      </div>
    </form>
  );
}
