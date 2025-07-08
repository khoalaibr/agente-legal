import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faExclamationTriangle, faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import type { TemplateState } from '../../../features/dashboard/dashboardSlice';

// --- Tipos ---
type DocumentGeneratorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  template: TemplateState | null;
};

// --- Sub-componentes para mantener el código organizado ---

// Panel Izquierdo: Parámetros del Documento
const DocumentParameters = () => {
  const cases = useAppSelector((state) => state.dashboard.recentCases);
  return (
    <div>
      <div className="form-group">
        <label className="form-label" htmlFor="document-title">Título del documento</label>
        <input type="text" id="document-title" className="form-input" placeholder="Contrato de Arrendamiento - [Nombre]" defaultValue="Contrato de Arrendamiento - Pérez" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="document-case">Caso relacionado</label>
        <select id="document-case" className="form-select">
          <option value="">Seleccionar caso</option>
          {cases.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Partes del contrato</label>
        <div className="mb-3">
          <label className="form-label text-sm" htmlFor="arrendador">Arrendador</label>
          <input type="text" id="arrendador" className="form-input" placeholder="Nombre completo" defaultValue="Juan Pérez Rodríguez" />
        </div>
        <div>
          <label className="form-label text-sm" htmlFor="arrendatario">Arrendatario</label>
          <input type="text" id="arrendatario" className="form-input" placeholder="Nombre completo" defaultValue="María González López" />
        </div>
      </div>
       <div className="bg-accent-50 p-3 rounded-md mb-4">
          <div className="flex items-start">
              <div className="flex-shrink-0 bg-accent-100 p-1 rounded-full mr-2">
                  <FontAwesomeIcon icon={faLightbulb} className="text-accent-600 text-xs" />
              </div>
              <div>
                  <p className="text-sm font-medium mb-1">Sugerencia proactiva:</p>
                  <p className="text-sm text-secondary-700">Se recomienda incluir cláusula sobre depósito de garantía.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

// Panel Derecho: Vista Previa del Documento
const DocumentPreview = () => (
    <div className="document-preview relative bg-secondary-50 p-4 border border-secondary-200 rounded-md">
        <div className="watermark">BORRADOR</div>
        <div className="header text-right mb-4">
            <p>Montevideo, <span className="entity entity-date">15 de julio de 2025</span></p>
        </div>
        <h1 className="text-center font-bold text-lg mb-4">CONTRATO DE ARRENDAMIENTO</h1>
        <p>En la ciudad de <span className="entity entity-location">Montevideo</span>, a los <span className="entity entity-date">15 días del mes de julio de 2025</span>...</p>
        <p>Entre <span className="entity entity-person">Juan Pérez Rodríguez</span>... y <span className="entity entity-person">María González López</span>...</p>
    </div>
);


// --- Componente Principal del Modal ---
export function DocumentGeneratorModal({ isOpen, onClose, template }: DocumentGeneratorModalProps) {
  if (!isOpen || !template) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-secondary-900 bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-secondary-900">Crear: {template.title}</h2>
                <button onClick={onClose} className="text-secondary-500 hover:text-secondary-700">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DocumentParameters />
                    <div>
                        <h3 className="text-md font-medium text-secondary-900 mb-3">Vista previa</h3>
                        <DocumentPreview />
                    </div>
                </div>
            </div>
            <div className="flex justify-end space-x-3 p-4 border-t bg-secondary-50">
                <Button variant="secondary" onClick={onClose}>Cancelar</Button>
                <Button variant="primary">Generar documento</Button>
            </div>
        </div>
    </div>
  );
}
