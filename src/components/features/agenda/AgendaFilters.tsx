import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks/useRedux';

// Definimos el tipo para los filtros de la agenda
export type AgendaFiltersState = {
  eventType: string;
  caseName: string;
  searchTerm: string;
};

type AgendaFiltersProps = {
  filters: AgendaFiltersState;
  onFilterChange: (filters: AgendaFiltersState) => void;
};

export function AgendaFilters({ filters, onFilterChange }: AgendaFiltersProps) {
  const cases = useAppSelector((state) => state.dashboard.recentCases);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-custom mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="eventType" className="block text-xs font-medium text-secondary-700 mb-1">Tipo de Evento</label>
          <select id="eventType" name="eventType" value={filters.eventType} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
            <option value="">Todos los tipos</option>
            <option value="audiencia">Audiencia</option>
            <option value="reunion">Reunión</option>
            <option value="plazo">Plazo</option>
            <option value="recordatorio">Recordatorio</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="caseName" className="block text-xs font-medium text-secondary-700 mb-1">Caso Relacionado</label>
          <select id="caseName" name="caseName" value={filters.caseName} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
            <option value="">Todos los casos</option>
            {cases.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
          </select>
        </div>
        
        <div>
          <label htmlFor="searchTerm" className="block text-xs font-medium text-secondary-700 mb-1">Buscar</label>
          <div className="relative">
            <input type="text" id="searchTerm" name="searchTerm" value={filters.searchTerm} onChange={handleChange} placeholder="Buscar evento..." className="w-full border border-secondary-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-secondary-400" />
            </div>
          </div>
        </div>

        <div>
           <label className="block text-xs font-medium text-secondary-700 mb-1 opacity-0">Acción</label>
          <button onClick={() => onFilterChange({ eventType: '', caseName: '', searchTerm: ''})} className="w-full bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium">
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
