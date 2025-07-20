import { useAppSelector } from '../hooks/useRedux';
import { ClientCard } from '../components/features/clients/ClientCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileExport } from '@fortawesome/free-solid-svg-icons';

export function ClientsPage() {
  const clients = useAppSelector((state) => state.dashboard.clients);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900 mb-1">Clientes</h1>
          <p className="text-secondary-600">Gestiona tu cartera de clientes y sus casos asociados</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            <span>Nuevo Cliente</span>
          </button>
          <button className="bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
            <FontAwesomeIcon icon={faFileExport} className="mr-2" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* Aquí irían los filtros y pestañas */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>

      {/* Aquí iría la paginación y el análisis */}
    </div>
  );
}
