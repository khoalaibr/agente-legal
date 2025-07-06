import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

// Las props del Header incluirán una función para manejar el clic del botón de menú en móviles.
type HeaderProps = {
  onMenuButtonClick: () => void;
};

export function Header({ onMenuButtonClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Lado Izquierdo: Botón de Menú y Logo */}
          <div className="flex items-center">
            {/* Este botón solo será visible en pantallas pequeñas (md:hidden) */}
            <button
              onClick={onMenuButtonClick}
              className="mr-4 text-secondary-500 hover:text-secondary-700 md:hidden"
              aria-label="Abrir menú"
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
            <a href="#" className="text-xl font-bold text-primary-800">
              Asesor Legal <span className="text-accent-600">IA</span>
            </a>
          </div>

          {/* Lado Derecho: Búsqueda y Perfil */}
          <div className="flex items-center">
            {/* Barra de Búsqueda */}
            <div className="relative mr-4 hidden sm:block">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-40 md:w-64 px-4 py-2 rounded-full border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {/* Iconos y Perfil de Usuario */}
            <div className="flex items-center space-x-4">
              <button className="text-secondary-500 hover:text-secondary-700 relative" aria-label="Notificaciones">
                <FontAwesomeIcon icon={faBell} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Foto de perfil del Dr. Martínez"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span className="hidden md:inline text-sm font-medium text-secondary-800">Dr. Martínez</span>
                <button className="ml-1 text-secondary-500 hover:text-secondary-700" aria-label="Opciones de perfil">
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
