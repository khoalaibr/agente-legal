import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faPaperclip, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { CaseState } from '../../../features/dashboard/dashboardSlice';

type CaseCardProps = {
  caseData: CaseState;
};

// Mapeo de estados a colores para el badge.
const statusStyles: { [key: string]: string } = {
  Activo: 'bg-green-100 text-green-800',
  'En proceso': 'bg-blue-100 text-blue-800',
  Pendiente: 'bg-yellow-100 text-yellow-800',
};

export function CaseCard({ caseData }: CaseCardProps) {
  const { title, description, status, lastUpdated, nextDeadline, assignedUsers } = caseData;

  return (
    <div className="bg-white border border-secondary-200 rounded-lg p-4 transition duration-300 hover:shadow-md hover:-translate-y-px">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-secondary-800">{title}</h3>
          <p className="text-sm text-secondary-600 mt-1">{description}</p>
        </div>
        <span className={clsx('px-2 py-1 text-xs rounded-full font-medium', statusStyles[status])}>
          {status}
        </span>
      </div>
      <div className="mt-3 flex items-center text-xs text-secondary-500">
        <span className="mr-4"><FontAwesomeIcon icon={faCalendar} className="mr-1" /> Actualizado: {lastUpdated}</span>
        <span><FontAwesomeIcon icon={faClock} className="mr-1" /> Próximo plazo: {nextDeadline}</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex -space-x-2">
          {assignedUsers.map(user => (
            <img
              key={user.name}
              src={user.avatarUrl}
              alt={`Avatar de ${user.name}`}
              title={user.name}
              className="h-6 w-6 rounded-full border-2 border-white"
            />
          ))}
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
