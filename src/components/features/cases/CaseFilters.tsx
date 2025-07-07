import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import type { CaseState } from '../../../features/dashboard/dashboardSlice';

// Definimos el tipo para los filtros
export type Filters = {
  searchTerm: string;
  caseType: string;
  status: string;
};

// El componente ahora recibe los valores de los filtros y las funciones para actualizarlos
type CaseFiltersProps = {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
};

export function CaseFilters({ filters, onFilterChange }: CaseFiltersProps) {
  
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
        {/* Búsqueda por texto */}
        <div>
          <label htmlFor="searchTerm" className="block text-xs font-medium text-secondary-700 mb-1">
            Buscar
          </label>
          <div className="relative">
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleChange}
              placeholder="Buscar por nombre, número..."
              className="w-full border border-secondary-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-secondary-400" />
            </div>
          </div>
        </div>

        {/* Filtro por Tipo de Caso */}
        <div>
          <label htmlFor="caseType" className="block text-xs font-medium text-secondary-700 mb-1">
            Tipo de Caso
          </label>
          <select
            id="caseType"
            name="caseType"
            value={filters.caseType}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los tipos</option>
            <option value="Civil">Civil</option>
            <option value="Comercial">Comercial</option>
            <option value="Laboral">Laboral</option>
            <option value="Familia">Familia</option>
            <option value="Penal">Penal</option>
          </select>
        </div>

        {/* Filtro por Estado */}
        <div>
          <label htmlFor="status" className="block text-xs font-medium text-secondary-700 mb-1">
            Estado
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los estados</option>
            <option value="Activo">Activo</option>
            <option value="En proceso">En proceso</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Urgente">Urgente</option>
            <option value="Archivado">Archivado</option>
          </select>
        </div>
        
        {/* Podríamos añadir más filtros aquí, como el de fecha */}
        <div>
          <label className="block text-xs font-medium text-secondary-700 mb-1 opacity-0">
            Resetear
          </label>
          <button 
            onClick={() => onFilterChange({ searchTerm: '', caseType: '', status: '' })}
            className="w-full bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
