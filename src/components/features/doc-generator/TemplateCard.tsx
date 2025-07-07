import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faClock, faCopy } from '@fortawesome/free-regular-svg-icons';
import { clsx } from 'clsx';
import type { TemplateState } from '../../../features/dashboard/dashboardSlice';
import { Button } from '../../ui/Button';

type TemplateCardProps = {
  template: TemplateState;
};

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-px flex flex-col h-full">
      {template.isNew && (
        <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full z-10">
          Nuevo
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-md font-semibold text-secondary-900">{template.title}</h3>
            <p className="text-xs text-secondary-500">{template.description}</p>
          </div>
          <button className="text-secondary-400 hover:text-yellow-500">
            <FontAwesomeIcon icon={template.isFavorite ? faStarSolid : faStarRegular} className={clsx({ 'text-yellow-400': template.isFavorite })} />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {template.tags.map(tag => (
            <span key={tag.text} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', tag.color)}>
              {tag.text}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center text-xs text-secondary-500 mb-3">
            <span><FontAwesomeIcon icon={faClock} className="mr-1" /> {template.timeToComplete}</span>
            <span><FontAwesomeIcon icon={faCopy} className="mr-1" /> {template.usageCount} usos</span>
          </div>
          
          <Button variant="primary" size="sm" className="w-full">
            <FontAwesomeIcon icon={faPlus} className="mr-1" /> Crear
          </Button>
        </div>
      </div>
    </div>
  );
}
