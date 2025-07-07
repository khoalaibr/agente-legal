import { useState, useMemo, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { CaseCard } from '../components/features/cases/CaseCard';
import { CaseFilters, type Filters } from '../components/features/cases/CaseFilters';
import { CaseTabs } from '../components/features/cases/CaseTabs';
import { Modal } from '../components/ui/Modal';
import { NewCaseForm } from '../components/features/cases/NewCaseForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { addCase, type CaseState } from '../features/dashboard/dashboardSlice';

const ITEMS_PER_PAGE = 6;
type CaseFormData = Omit<CaseState, 'id' | 'deadlineInDays' | 'lastUpdated' | 'entities' | 'iaSuggestion' | 'activeCollaborators' | 'statusColor'>;

export function CasesPage() {
  const allCases = useAppSelector((state) => state.dashboard.recentCases);
  const dispatch = useAppDispatch();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('Todos');
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    caseType: '',
    status: '',
  });

  const filteredCases = useMemo(() => {
    let cases = allCases;
    if (activeTab !== 'Todos') {
      cases = cases.filter(c => c.status === activeTab);
    }
    return cases.filter(c => {
      const searchTermMatch = c.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) || c.caseNumber.toLowerCase().includes(filters.searchTerm.toLowerCase()) || c.client.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const caseTypeMatch = filters.caseType ? c.caseType === filters.caseType : true;
      const statusMatch = filters.status ? c.status === filters.status : true;
      return searchTermMatch && caseTypeMatch && statusMatch;
    });
  }, [allCases, filters, activeTab]);

  const tabs = useMemo(() => {
    const statusCounts = allCases.reduce((acc, c) => {
      acc[c.status] = (acc[c.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return [
      { name: 'Todos', count: allCases.length },
      { name: 'Activo', count: statusCounts['Activo'] || 0 },
      { name: 'En proceso', count: statusCounts['En proceso'] || 0 },
      { name: 'Pendiente', count: statusCounts['Pendiente'] || 0 },
      { name: 'Urgente', count: statusCounts['Urgente'] || 0 },
      { name: 'Archivado', count: statusCounts['Archivado'] || 0 },
    ].filter(tab => tab.count > 0 || tab.name === 'Todos');
  }, [allCases]);

  const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
  const paginatedCases = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCases.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCases, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, activeTab]);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddCase = (caseData: CaseFormData) => {
    dispatch(addCase(caseData));
    handleCloseModal();
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-1">Gestión de Casos</h1>
            <p className="text-secondary-600">Administre todos sus casos legales en un solo lugar.</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button onClick={handleOpenModal} className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              <span>Nuevo Caso</span>
            </button>
            <button className="bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <FontAwesomeIcon icon={faFilter} className="mr-2" />
              <span>Filtros</span>
            </button>
          </div>
        </div>

        <CaseFilters filters={filters} onFilterChange={setFilters} />
        <CaseTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCases.length > 0 ? (
            paginatedCases.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))
          ) : (
            <div className="lg:col-span-3 text-center py-12">
              <p className="text-secondary-500">No se encontraron casos que coincidan con la selección.</p>
            </div>
          )}
        </div>

        {totalPages > 0 && (
          <div className="flex justify-between items-center">
            <div className="text-sm text-secondary-500">
              Mostrando <strong>{paginatedCases.length}</strong> de <strong>{filteredCases.length}</strong> casos
            </div>
            <div className="flex space-x-1">
              <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-3 py-1 rounded-md text-secondary-500 hover:bg-secondary-100 disabled:opacity-50">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-accent-600 text-white' : 'text-secondary-500 hover:bg-secondary-100'}`}
                >
                  {page}
                </button>
              ))}
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md text-secondary-500 hover:bg-secondary-100 disabled:opacity-50">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Crear Nuevo Caso">
        <NewCaseForm onCancel={handleCloseModal} onSubmit={handleAddCase} />
      </Modal>
    </>
  );
}
