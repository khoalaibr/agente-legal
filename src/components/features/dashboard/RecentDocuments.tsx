import { Card } from '../../ui/Card';
import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFilePdf, faFileExcel, faDownload, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Mapeo de nombres de icono a los objetos de icono reales
const documentIconMap: { [key: string]: IconDefinition } = {
  'file-alt': faFileAlt,
  'file-pdf': faFilePdf,
  'file-excel': faFileExcel,
};

// Mapeo de nombres de icono a colores
const documentIconColorMap: { [key: string]: string } = {
    'file-alt': 'text-accent-600',
    'file-pdf': 'text-red-600',
    'file-excel': 'text-green-600',
}

export function RecentDocuments() {
  const documents = useAppSelector((state) => state.dashboard.recentDocuments);

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-secondary-900">Documentos Recientes</h2>
        <a href="#" className="text-sm text-accent-600 hover:text-accent-800 font-medium">
          Ver todos
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-secondary-50 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Caso</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-200">
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={documentIconMap[doc.icon]}
                      className={clsx('mr-3', documentIconColorMap[doc.icon])}
                    />
                    <span className="text-sm font-medium text-secondary-800">{doc.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-secondary-600">{doc.case}</td>
                <td className="px-4 py-3 text-sm text-secondary-600">{doc.date}</td>
                <td className="px-4 py-3">
                  <span className={clsx('px-2 py-1 text-xs rounded-full font-medium', doc.typeColor)}>
                    {doc.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-secondary-500 hover:text-secondary-700 mr-3" aria-label="Descargar">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                  <button className="text-secondary-500 hover:text-secondary-700 mr-3" aria-label="Editar">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="text-secondary-500 hover:text-secondary-700" aria-label="Más opciones">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
