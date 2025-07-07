import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faPaperclip, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
// Importamos la nueva y única definición de CaseState desde el slice
import type { CaseState } from '../../../features/dashboard/dashboardSlice';

type CaseCardProps = {
  caseData: CaseState;
};

// Mapeo de estados a colores para el badge.
const statusStyles: { [key: string]: string } = {
  Activo: 'bg-green-100 text-green-800',
  'En proceso': 'bg-yellow-100 text-yellow-800', // Ajustado para coincidir con el nuevo slice
  Pendiente: 'bg-blue-100 text-blue-800', // Ajustado
  Urgente: 'bg-red-100 text-red-800',
  Archivado: 'bg-gray-100 text-gray-800',
};

export function CaseCard({ caseData }: CaseCardProps) {
  // Desestructuramos las propiedades del nuevo CaseState
  const { title, caseType, status, lastUpdated, deadline, client } = caseData;

  return (
    <div className="bg-white border border-secondary-200 rounded-lg p-4 transition duration-300 hover:shadow-md hover:-translate-y-px">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-secondary-800">{title}</h3>
          {/* Usamos caseType en lugar de la descripción anterior */}
          <p className="text-sm text-secondary-600 mt-1">{caseType}</p>
        </div>
        <span className={clsx('px-2 py-1 text-xs rounded-full font-medium', statusStyles[status])}>
          {status}
        </span>
      </div>
      <div className="mt-3 flex items-center text-xs text-secondary-500">
        <span className="mr-4"><FontAwesomeIcon icon={faCalendar} className="mr-1" /> Actualizado: {lastUpdated}</span>
        {/* Usamos la nueva propiedad 'deadline' */}
        <span><FontAwesomeIcon icon={faClock} className="mr-1" /> Próximo plazo: {deadline}</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        {/* Usamos la nueva propiedad 'client' para el avatar */}
        <div className="flex -space-x-2">
          {client.avatarUrl ? (
            <img
              src={client.avatarUrl}
              alt={`Avatar de ${client.name}`}
              title={client.name}
              className="h-6 w-6 rounded-full border-2 border-white"
            />
          ) : (
            <div className="h-6 w-6 rounded-full bg-secondary-200 border-2 border-white flex items-center justify-center">
              <span className="text-xs font-bold text-secondary-500">{client.name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div>
          <button className="text-secondary-500 hover:text-secondary-700 mr-3" aria-label="Adjuntos">
            <FontAwesomeIcon icon={faPaperclip} />
          </button>
          <button className="text-secondary-500 hover:text-secondary-700" aria-label="Más opciones">
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>
      </div>
    </div>
  );
}
