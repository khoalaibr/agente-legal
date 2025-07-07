import { useState } from 'react';
import { Button } from '../../ui/Button';
import { useAppSelector } from '../../../hooks/useRedux';
import type { CalendarEventState } from '../../../features/dashboard/dashboardSlice';

// El tipo de los datos que el formulario enviará
type EventFormData = Omit<CalendarEventState, 'id'>;

type NewEventFormProps = {
  onCancel: () => void;
  onSubmit: (eventData: EventFormData) => void;
};

export function NewEventForm({ onCancel, onSubmit }: NewEventFormProps) {
  const cases = useAppSelector((state) => state.dashboard.recentCases);
  
  const [formData, setFormData] = useState<Partial<EventFormData>>({
    title: '',
    type: 'reunion',
    caseName: '',
    date: '',
    duration: '',
    location: '',
    participants: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.type) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }
    // Casteamos a EventFormData asumiendo que los campos requeridos están presentes
    onSubmit(formData as EventFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-secondary-700 mb-1">Título del Evento *</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-secondary-700 mb-1">Tipo de Evento *</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
              <option value="reunion">Reunión</option>
              <option value="audiencia">Audiencia</option>
              <option value="plazo">Plazo</option>
              <option value="recordatorio">Recordatorio</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="caseName" className="block text-sm font-medium text-secondary-700 mb-1">Caso Relacionado</label>
          <select id="caseName" name="caseName" value={formData.caseName} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
            <option value="">Ninguno</option>
            {cases.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-secondary-700 mb-1">Fecha *</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-secondary-700 mb-1">Hora</label>
            <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} placeholder="ej: 10:00 a 11:30" className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" variant="primary">Crear Evento</Button>
      </div>
    </form>
  );
}
