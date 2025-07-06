import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    // Usamos Fragment para el portal, aunque aquí está simplificado.
    // El div principal actúa como el fondo oscuro (backdrop).
    <div
      className="fixed inset-0 bg-secondary-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose} // Cierra el modal si se hace clic en el fondo
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 m-4"
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
      >
        {/* Encabezado del Modal */}
        <div className="flex justify-between items-center mb-4">
          <h3 id="modal-title" className="text-lg font-semibold text-secondary-900">
            {title}
          </h3>
          <button
            className="text-secondary-500 hover:text-secondary-700"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Contenido del Modal */}
        <div>{children}</div>
      </div>
    </div>
  );
}
