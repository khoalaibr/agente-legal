import { useAppSelector } from '../hooks/useRedux';
import { TemplateCard } from '../components/features/doc-generator/TemplateCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUsers, faStore } from '@fortawesome/free-solid-svg-icons';
import type { CategoryState } from '../features/dashboard/dashboardSlice';
import clsx from 'clsx';

const iconMap = { home: faHome, briefcase: faBriefcase, users: faUsers, store: faStore };

const CategoryCard = ({ category }: { category: CategoryState }) => (
  <a href="#" className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow hover:-translate-y-px">
    <div className={clsx('p-3 rounded-full mb-3', category.bgColor)}>
      <FontAwesomeIcon icon={iconMap[category.icon]} className={clsx(category.iconColor, 'text-xl')} />
    </div>
    <h3 className="text-md font-medium text-secondary-900 mb-1">{category.name}</h3>
    <p className="text-xs text-secondary-500">{category.templateCount} plantillas</p>
  </a>
);

export function DocumentGeneratorPage() {
  const templates = useAppSelector((state) => state.app.templates);
  const categories = useAppSelector((state) => state.app.categories);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-secondary-900">Generador de Escritos</h1>
        <p className="text-secondary-600">Crea documentos legales profesionales a partir de plantillas inteligentes</p>
      </div>
      
      {/* Aquí irían los filtros y pestañas */}

      <section>
        <h2 className="text-lg font-semibold text-secondary-900 mb-4">Plantillas populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map(template => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-secondary-900 mb-4">Explorar por categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
