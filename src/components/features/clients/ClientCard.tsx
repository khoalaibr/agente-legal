import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faBuilding, faUser, faPhoneAlt, faEnvelope, faMapMarkerAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { clsx } from 'clsx';
import type { ClientState } from '../../../features/dashboard/dashboardSlice';

type ClientCardProps = {
  client: ClientState;
};

const statusStyles: { [key: string]: string } = {
  Activo: 'bg-green-500',
  Inactivo: 'bg-secondary-400',
  Pendiente: 'bg-yellow-500',
  Conflicto: 'bg-red-500',
};

const riskStyles: { [key: string]: string } = {
  Bajo: 'bg-green-100 text-green-800',
  Medio: 'bg-yellow-100 text-yellow-800',
  Alto: 'bg-red-100 text-red-800',
};

const valueStyles: { [key: string]: string } = {
  Bajo: 'bg-secondary-100 text-secondary-800',
  Medio: 'bg-blue-100 text-blue-800',
  Alto: 'bg-green-100 text-green-800',
};

export function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-4 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="absolute top-4 right-4 flex space-x-1">
        <button className="text-secondary-400 hover:text-yellow-500"><FontAwesomeIcon icon={client.isFavorite ? faStarSolid : faStarRegular} className={clsx({ 'text-yellow-400': client.isFavorite })} /></button>
        <button className="text-secondary-400 hover:text-secondary-600"><FontAwesomeIcon icon={faEllipsisV} /></button>
      </div>

      <div className="flex items-start mb-3">
        <div className={clsx('w-12 h-12 rounded-full flex items-center justify-center mr-3', client.type === 'Persona' ? 'bg-blue-100' : 'bg-yellow-100')}>
          <FontAwesomeIcon icon={client.type === 'Persona' ? faUser : faBuilding} className={clsx('text-2xl', client.type === 'Persona' ? 'text-blue-600' : 'text-yellow-600')} />
        </div>
        <div>
          <h3 className="text-md font-semibold text-secondary-900">{client.name}</h3>
          <div className="flex items-center">
            <span className={clsx('w-2 h-2 rounded-full mr-2', statusStyles[client.status])}></span>
            <span className="text-xs text-secondary-500">{client.status}</span>
          </div>
        </div>
      </div>

      <div className="mb-3 space-y-1">
        <p className="text-xs text-secondary-500 flex items-center"><FontAwesomeIcon icon={faEnvelope} className="w-4 mr-2" /> {client.contact.email}</p>
        <p className="text-xs text-secondary-500 flex items-center"><FontAwesomeIcon icon={faPhoneAlt} className="w-4 mr-2" /> {client.contact.phone}</p>
      </div>

      <div className="mb-3">
        <div className="flex flex-wrap gap-1">
          {client.tags.map(tag => (
            <span key={tag.text} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', tag.color)}>{tag.text}</span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs text-secondary-700 mb-1">Casos activos: {client.activeCasesCount}</p>
      </div>

      <div className="mb-3 flex justify-between items-center text-xs">
        <span className={clsx('px-2 py-1 rounded-full', riskStyles[client.riskLevel])}>Riesgo {client.riskLevel}</span>
        <span className={clsx('px-2 py-1 rounded-full', valueStyles[client.valueLevel])}>Valor {client.valueLevel}</span>
      </div>

      <div className="text-xs text-secondary-500">
        <p>Última actividad: {client.lastActivity}</p>
        <p>{client.lastActivityDate}</p>
      </div>
    </div>
  );
}
