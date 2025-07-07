import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faFileAlt, faFileInvoice, faLightbulb, faEye, faDownload, faShareAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { DocumentState } from '../../../features/dashboard/dashboardSlice';

type DocumentCardProps = {
  document: DocumentState;
};

const iconMap = {
  'file-contract': faFileContract,
  'file-alt': faFileAlt,
  'file-invoice': faFileInvoice,
};

const entityTagStyles: { [key: string]: string } = {
  person: 'bg-blue-100 text-blue-800',
  organization: 'bg-yellow-100 text-yellow-800',
  location: 'bg-green-100 text-green-800',
  date: 'bg-purple-100 text-purple-800',
  money: 'bg-red-100 text-red-800',
};

export function DocumentCard({ document }: DocumentCardProps) {
  const { title, caseName, author, tags, contentPreview, entities, lastUpdated, iaSuggestion, icon, iconColor } = document;

  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <FontAwesomeIcon icon={iconMap[icon]} className={clsx(iconColor, 'text-sm')} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-secondary-900 leading-tight">{title}</h3>
            <p className="text-xs text-secondary-500">{caseName}</p>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <img src={author.avatarUrl} alt={`Avatar de ${author.name}`} className="h-6 w-6 rounded-full mr-2" />
          <span className="text-sm text-secondary-800">{author.name}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map(tag => (
            <span key={tag.text} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', tag.color)}>
              {tag.text}
            </span>
          ))}
        </div>

        <div className="mb-3">
          <div className="bg-secondary-50 p-3 rounded text-xs text-secondary-600 h-24 overflow-hidden relative">
            <p className="whitespace-pre-wrap">{contentPreview}</p>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-secondary-50 to-transparent"></div>
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

        <div className="border-t border-secondary-100 pt-3 mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-xs text-secondary-500">Última act.: {lastUpdated}</p>
            <div className="flex space-x-2">
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Ver"><FontAwesomeIcon icon={faEye} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Descargar"><FontAwesomeIcon icon={faDownload} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Compartir"><FontAwesomeIcon icon={faShareAlt} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Más opciones"><FontAwesomeIcon icon={faEllipsisV} /></button>
            </div>
          </div>
        </div>
      </div>

      {iaSuggestion && (
        <div className="p-3 border-t bg-accent-50 border-accent-100">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-2">
              <FontAwesomeIcon icon={faLightbulb} className="text-accent-600 text-sm" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-secondary-700">{iaSuggestion}</p>
              <button className="text-xs text-accent-600 hover:text-accent-800 font-medium mt-1">Ver sugerencia</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
