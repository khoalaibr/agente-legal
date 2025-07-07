import { useState } from 'react';
import { Button } from '../../ui/Button';
import { useAppSelector } from '../../../hooks/useRedux';
import type { TaskState } from '../../../features/dashboard/dashboardSlice';

// El tipo de los datos que el formulario enviará
type TaskFormData = Omit<TaskState, 'id' | 'completed'>;

type NewTaskFormProps = {
  onCancel: () => void;
  onSubmit: (taskData: TaskFormData) => void;
};

export function NewTaskForm({ onCancel, onSubmit }: NewTaskFormProps) {
  // Obtenemos la lista de casos desde Redux para poblar el dropdown
  const cases = useAppSelector((state) => state.dashboard.recentCases);
  
  const [formData, setFormData] = useState<TaskFormData>({
    text: '',
    priority: 'Normal',
    relatedCaseId: '',
    deadline: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.text.trim()) return;
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-secondary-700 mb-1">Título</label>
          <input
            type="text"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
            required
            autoFocus
          />
        </div>
        
        <div>
          <label htmlFor="relatedCaseId" className="block text-sm font-medium text-secondary-700 mb-1">Caso relacionado</label>
          <select
            id="relatedCaseId"
            name="relatedCaseId"
            value={formData.relatedCaseId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Seleccionar caso</option>
            {cases.map(c => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-secondary-700 mb-1">Fecha límite</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-secondary-700 mb-1">Prioridad</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="Normal">Normal</option>
            <option value="Media">Media</option>
            <option value="Urgente">Urgente</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">Descripción</label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
          ></textarea>
        </div>
      </div>

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
