import { useState, useMemo, useEffect } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { DocumentCard } from '../components/features/documents/DocumentCard';
import { DocumentFilters, type DocumentFiltersState } from '../components/features/documents/DocumentFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUpload, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ITEMS_PER_PAGE = 6;

export function DocumentsPage() {
  const allDocuments = useAppSelector((state) => state.dashboard.recentDocuments);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<DocumentFiltersState>({
    searchTerm: '',
    documentType: '',
    caseId: '',
  });

  const filteredDocuments = useMemo(() => {
    return allDocuments.filter(doc => {
      const searchTermMatch = doc.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                              doc.contentPreview.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      const documentTypeMatch = filters.documentType 
        ? doc.tags.some(tag => tag.text === filters.documentType) 
        : true;
      
      const caseMatch = filters.caseId ? doc.caseName === filters.caseId : true;

      return searchTermMatch && documentTypeMatch && caseMatch;
    });
  }, [allDocuments, filters]);

  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
  const paginatedDocuments = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredDocuments, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900 mb-1">Gestión de Documentos</h1>
          <p className="text-secondary-600">Administre todos sus documentos legales en un solo lugar.</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            <span>Nuevo Documento</span>
          </button>
          <button className="bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            <span>Importar</span>
          </button>
        </div>
      </div>

      <DocumentFilters filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedDocuments.length > 0 ? (
          paginatedDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))
        ) : (
          <div className="lg:col-span-3 text-center py-12">
            <p className="text-secondary-500">No se encontraron documentos que coincidan con los filtros.</p>
          </div>
        )}
      </div>

      {totalPages > 0 && (
        <div className="flex justify-between items-center">
          <div className="text-sm text-secondary-500">
            Mostrando <strong>{paginatedDocuments.length}</strong> de <strong>{filteredDocuments.length}</strong> documentos
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
  );
}
