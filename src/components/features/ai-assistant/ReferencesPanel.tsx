import { useState } from 'react';
import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGavel, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { ReferenceItemState } from '../../../features/dashboard/dashboardSlice';

// Sub-componente para una tarjeta de referencia
const ReferenceCard = ({ item }: { item: ReferenceItemState }) => (
  <div className="bg-white border border-secondary-200 rounded-md p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-300">
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full mr-2">
        <FontAwesomeIcon icon={faBook} className="text-blue-600 text-xs" />
      </div>
      <div>
        <p className="text-sm font-medium text-secondary-900">{item.title}</p>
        <p className="text-xs text-secondary-600 mb-1">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-secondary-500">Relevancia: {item.relevance}</span>
          <button className="text-xs text-accent-600 hover:text-accent-700 font-medium">Ver</button>
        </div>
      </div>
    </div>
  </div>
);

export function ReferencesPanel() {
  const references = useAppSelector((state) => state.dashboard.references);
  const [activeTab, setActiveTab] = useState<'normativa' | 'jurisprudencia' | 'casos'>('normativa');

  const activeReferences = references[activeTab];

  return (
    <div className="w-72 bg-white border-l border-secondary-200 flex-shrink-0 overflow-y-auto hidden lg:block">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-secondary-900">Referencias</h2>
        
        <div className="mb-4 border-b border-secondary-200">
          <div className="flex">
            <button onClick={() => setActiveTab('normativa')} className={clsx('py-2 px-3 text-sm font-medium', { 'tab-active': activeTab === 'normativa', 'tab-inactive': activeTab !== 'normativa' })}>Normativa</button>
            <button onClick={() => setActiveTab('jurisprudencia')} className={clsx('py-2 px-3 text-sm font-medium', { 'tab-active': activeTab === 'jurisprudencia', 'tab-inactive': activeTab !== 'jurisprudencia' })}>Jurisprudencia</button>
            <button onClick={() => setActiveTab('casos')} className={clsx('py-2 px-3 text-sm font-medium', { 'tab-active': activeTab === 'casos', 'tab-inactive': activeTab !== 'casos' })}>Casos</button>
          </div>
        </div>

        <div className="space-y-3">
          {activeReferences.length > 0 ? (
            activeReferences.map(item => <ReferenceCard key={item.id} item={item} />)
          ) : (
            <p className="text-sm text-secondary-500 text-center py-4">No hay referencias de este tipo.</p>
          )}
        </div>
      </div>
    </div>
  );
}
