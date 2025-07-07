import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks/useRedux';

// Definimos el tipo para los filtros de documentos
export type DocumentFiltersState = {
  searchTerm: string;
  documentType: string;
  caseId: string;
};

type DocumentFiltersProps = {
  filters: DocumentFiltersState;
  onFilterChange: (filters: DocumentFiltersState) => void;
};

export function DocumentFilters({ filters, onFilterChange }: DocumentFiltersProps) {
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
              placeholder="Buscar por título, contenido..."
              className="w-full border border-secondary-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-secondary-400" />
            </div>
          </div>
        </div>

        {/* Filtro por Tipo de Documento */}
        <div>
          <label htmlFor="documentType" className="block text-xs font-medium text-secondary-700 mb-1">
            Tipo de Documento
          </label>
          <select
            id="documentType"
            name="documentType"
            value={filters.documentType}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los tipos</option>
            <option value="Contrato">Contrato</option>
            <option value="Escrito judicial">Escrito judicial</option>
            <option value="Informe">Informe</option>
            <option value="Demanda">Demanda</option>
          </select>
        </div>

        {/* Filtro por Caso Relacionado */}
        <div>
          <label htmlFor="caseId" className="block text-xs font-medium text-secondary-700 mb-1">
            Caso Relacionado
          </label>
          <select
            id="caseId"
            name="caseId"
            value={filters.caseId}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los casos</option>
            {/* CORRECCIÓN: Usamos c.title en lugar de c.caseName */}
            {cases.map(c => (
              <option key={c.id} value={c.title}>{c.title}</option>
            ))}
          </select>
        </div>

        {/* Botón para limpiar filtros */}
        <div>
          <label className="block text-xs font-medium text-secondary-700 mb-1 opacity-0">
            Acción
          </label>
          <button 
            onClick={() => onFilterChange({ searchTerm: '', documentType: '', caseId: '' })}
            className="w-full bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
