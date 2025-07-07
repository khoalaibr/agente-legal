import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faLightbulb, faEye, faEdit, faEllipsisV, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { CaseState } from '../../../features/dashboard/dashboardSlice';

type CaseCardProps = {
  caseData: CaseState;
};

const entityTagStyles: { [key: string]: string } = {
  person: 'bg-blue-100 text-blue-800',
  organization: 'bg-yellow-100 text-yellow-800',
  location: 'bg-green-100 text-green-800',
  date: 'bg-purple-100 text-purple-800',
  money: 'bg-red-100 text-red-800',
};

export function CaseCard({ caseData }: CaseCardProps) {
  const { title, caseNumber, caseType, status, statusColor, deadline, deadlineInDays, client, entities, iaSuggestion } = caseData;
  const isUrgent = status === 'Urgente' || deadlineInDays <= 3;

  return (
    // 1. El contenedor principal es una columna flexible que ocupa toda la altura disponible
    <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      
      {/* 2. Este div es el "cuerpo" que se expandirá para ocupar el espacio sobrante */}
      <div className="p-4 flex-1">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <FontAwesomeIcon icon={faFolder} className="text-blue-600 text-sm" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-secondary-900 leading-tight">{title}</h3>
            <p className="text-xs text-secondary-500">{caseType} • {caseNumber}</p>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center mb-2">
            {client.avatarUrl ? (
              <img src={client.avatarUrl} alt={`Avatar de ${client.name}`} className="h-6 w-6 rounded-full mr-2" />
            ) : (
              <div className="h-6 w-6 rounded-full bg-secondary-200 flex items-center justify-center mr-2">
                <span className="text-xs font-bold text-secondary-500">{client.name.charAt(0)}</span>
              </div>
            )}
            <span className="text-sm text-secondary-800">{client.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', statusColor)}>
              {status}
            </span>
            <span className={clsx('text-sm font-medium', { 'text-red-600': isUrgent })}>
              Plazo: {deadline} ({deadlineInDays} días)
            </span>
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs text-secondary-500 mb-1">Entidades detectadas:</p>
          <div className="flex flex-wrap gap-1">
            {entities.map(entity => (
              <span key={entity.value} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', entityTagStyles[entity.type] || 'bg-gray-100 text-gray-800')}>
                {entity.value}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Este div es el "pie de página" que ahora está fuera del div que crece */}
      <div className="p-4 pt-0">
        <div className="border-t border-secondary-100 pt-3">
          <div className="flex justify-between items-center">
            <p className="text-xs text-secondary-500">Última act 7777.: {caseData.lastUpdated}</p>
            <div className="flex space-x-2">
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Ver"><FontAwesomeIcon icon={faEye} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Editar"><FontAwesomeIcon icon={faEdit} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Más opciones"><FontAwesomeIcon icon={faEllipsisV} /></button>
            </div>
          </div>
        </div>
      </div>
      
      {iaSuggestion && (
        <div className={clsx('p-3 border-t', { 'bg-red-50 border-red-100': isUrgent, 'bg-accent-50 border-accent-100': !isUrgent })}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-2">
              <FontAwesomeIcon icon={isUrgent ? faExclamationCircle : faLightbulb} className={clsx('text-sm', { 'text-red-600': isUrgent, 'text-accent-600': !isUrgent })} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-secondary-700">{iaSuggestion}</p>
              <button className="text-xs text-accent-600 hover:text-accent-800 font-medium mt-1">Ver detalles</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
