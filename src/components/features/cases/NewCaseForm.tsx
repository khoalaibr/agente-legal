import { useState } from 'react';
import { Button } from '../../ui/Button';
import type { CaseState } from '../../../features/dashboard/dashboardSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

// El tipo de los datos que el formulario enviará. Omitimos las propiedades que se generan automáticamente.
type CaseFormData = Omit<CaseState, 'id' | 'deadlineInDays' | 'lastUpdated' | 'entities' | 'iaSuggestion' | 'activeCollaborators' | 'statusColor'>;

type NewCaseFormProps = {
  onCancel: () => void;
  onSubmit: (caseData: CaseFormData) => void;
};

export function NewCaseForm({ onCancel, onSubmit }: NewCaseFormProps) {
  const [formData, setFormData] = useState<Partial<CaseFormData>>({
    title: '',
    caseNumber: '',
    caseType: 'Civil',
    status: 'Activo',
    deadline: '',
    client: { name: '' },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'clientName') {
        setFormData(prev => ({ ...prev, client: { ...prev.client, name: value } }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.client?.name) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }
    onSubmit(formData as CaseFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-1 md:p-6 max-h-[80vh] overflow-y-auto">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-secondary-700 mb-1">Título del Caso *</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
          </div>
          <div>
            <label htmlFor="caseType" className="block text-sm font-medium text-secondary-700 mb-1">Tipo de Caso *</label>
            <select id="caseType" name="caseType" value={formData.caseType} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
              <option>Civil</option>
              <option>Comercial</option>
              <option>Laboral</option>
              <option>Familia</option>
              <option>Penal</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-secondary-700 mb-1">Cliente *</label>
          <input type="text" id="clientName" name="clientName" value={formData.client?.name} onChange={handleChange} placeholder="Buscar o crear cliente..." className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">Descripción</label>
          <textarea id="description" name="description" rows={4} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-secondary-700 mb-1">Estado *</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
                    <option>Activo</option>
                    <option>En proceso</option>
                    <option>Pendiente</option>
                    <option>Urgente</option>
                    <option>Archivado</option>
                </select>
            </div>
            <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-secondary-700 mb-1">Próximo Plazo</label>
                <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" />
            </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">Documentos Iniciales</label>
          <div className="border-2 border-dashed border-secondary-300 rounded-md p-6 text-center">
            <FontAwesomeIcon icon={faCloudUploadAlt} className="text-secondary-400 text-3xl mb-3" />
            <p className="text-sm text-secondary-500 mb-2">Arrastra y suelta archivos aquí</p>
            <Button type="button" variant="secondary">Seleccionar Archivos</Button>
            <p className="text-xs text-secondary-400 mt-2">PDF, DOCX, etc. (máx. 10MB)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" variant="primary">Crear Caso</Button>
      </div>
    </form>
  );
}
