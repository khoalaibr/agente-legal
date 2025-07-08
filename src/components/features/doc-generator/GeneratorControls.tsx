import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';

// Definimos los tipos para los filtros y las pestañas
export type TemplateFilters = {
  searchTerm: string;
  category: string;
  type: string;
};

type GeneratorControlsProps = {
  filters: TemplateFilters;
  activeTab: string;
  onFilterChange: (filters: TemplateFilters) => void;
  onTabChange: (tabName: string) => void;
};

export function GeneratorControls({ filters, activeTab, onFilterChange, onTabChange }: GeneratorControlsProps) {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
          <div className="relative">
            <input 
              type="text" 
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleInputChange}
              placeholder="Buscar plantilla..." 
              className="w-full md:w-64 px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm" 
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <select name="category" value={filters.category} onChange={handleInputChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
              <option value="">Todas las categorías</option>
              <option value="Civil">Civil</option>
              <option value="Laboral">Laboral</option>
              <option value="Familia">Familia</option>
              <option value="Comercial">Comercial</option>
              <option value="Penal">Penal</option>
            </select>
            <select name="type" value={filters.type} onChange={handleInputChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
              <option value="">Todos los tipos</option>
              <option value="Contrato">Contratos</option>
              <option value="Demanda">Demandas</option>
              <option value="Recurso">Recursos</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* La lógica de ordenamiento se puede añadir aquí en el futuro */}
          <select className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
            <option value="populares">Más populares</option>
            <option value="recientes">Más recientes</option>
            <option value="alfabetico">Alfabético</option>
          </select>
        </div>
      </div>
      <div className="border-b border-secondary-200">
        <div className="flex overflow-x-auto">
          {['Plantillas', 'Recientes', 'Guardados', 'Compartidos'].map(tab => (
            <button 
              key={tab} 
              onClick={() => onTabChange(tab)}
              className={clsx('py-2 px-4 text-sm font-medium', {
                'border-b-2 border-accent-600 text-accent-600': activeTab === tab,
                'border-b-2 border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300': activeTab !== tab
              })}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
