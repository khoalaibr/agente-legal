import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faFolderOpen, faCalendarAlt, faFileAlt, faUsers,
  faSearch, faRobot, faFileSignature, faCalculator,
  faUserCog, faCog, faQuestionCircle,
  faChevronLeft, faChevronRight // <-- Nuevos iconos para el botón de toggle
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';

// Props para cada item del menú
type SidebarItemProps = {
  icon: IconDefinition;
  label: string;
  to: string;
  isExpanded: boolean; // <-- Prop para saber si el sidebar está expandido
};

// Sub-componente para cada enlace del menú
function SidebarItem({ icon, label, to, isExpanded }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'flex items-center py-2 px-3 rounded-md mb-1 transition-colors duration-200',
          'hover:bg-white/20',
          { 'bg-white/20 border-l-4 border-white': isActive },
          { 'justify-center': !isExpanded } // <-- Centra el icono cuando está colapsado
        )
      }
    >
      <FontAwesomeIcon icon={icon} className={clsx('w-5', { 'mr-3': isExpanded })} />
      {/* El label solo se muestra si el sidebar está expandido */}
      <span className={clsx({ 'hidden': !isExpanded })}>{label}</span>
    </NavLink>
  );
}

// Props para el componente Sidebar principal
type SidebarProps = {
  isMobileOpen: boolean; // Para controlar su visibilidad en móviles
  isExpanded: boolean;   // Para controlar si está expandido o colapsado
  onToggleExpand: () => void; // Función para cambiar el estado de expansión
};

export function Sidebar({ isMobileOpen, isExpanded, onToggleExpand }: SidebarProps) {
  return (
    // El contenedor <aside> ahora tiene una clase de ancho dinámica
    <aside
      className={clsx(
        'gradient-bg text-white flex-shrink-0 overflow-y-auto transition-all duration-300 flex flex-col',
        'md:relative md:translate-x-0', // Estilos para desktop
        { 'w-64': isExpanded, 'w-20': !isExpanded }, // <-- Lógica de ancho
        // Lógica para mostrar/ocultar en móvil
        { 'translate-x-0': isMobileOpen, '-translate-x-full absolute': !isMobileOpen }
      )}
    >
      <div className="flex-1 p-4">
        {/* Pasamos la prop isExpanded a cada SidebarItem */}
        {/* Sección Principal */}
        <div className="mb-8">
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Principal</p>
          <nav>
            <SidebarItem to="/dashboard" icon={faTachometerAlt} label="Dashboard" isExpanded={isExpanded} />
            <SidebarItem to="/cases" icon={faFolderOpen} label="Casos" isExpanded={isExpanded} />
            {/* ... resto de los items ... */}
            <SidebarItem to="/schedule" icon={faCalendarAlt} label="Agenda" isExpanded={isExpanded} />
            <SidebarItem to="/documents" icon={faFileAlt} label="Documentos" isExpanded={isExpanded} />
            <SidebarItem to="/clients" icon={faUsers} label="Clientes" isExpanded={isExpanded} />
          </nav>
        </div>

        {/* Sección Herramientas */}
        <div className="mb-8">
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Herramientas</p>
          <nav>
            <SidebarItem to="/legal-search" icon={faSearch} label="Búsqueda Legal" isExpanded={isExpanded} />
            <SidebarItem to="/ai-assistant" icon={faRobot} label="Asistente IA" isExpanded={isExpanded} />
            <SidebarItem to="/doc-generator" icon={faFileSignature} label="Generador de Escritos" isExpanded={isExpanded} />
            <SidebarItem to="/calculator" icon={faCalculator} label="Calculadora de Plazos" isExpanded={isExpanded} />
          </nav>
        </div>

        {/* Sección Configuración */}
        <div>
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Configuración</p>
          <nav>
            <SidebarItem to="/profile" icon={faUserCog} label="Perfil" isExpanded={isExpanded} />
            <SidebarItem to="/settings" icon={faCog} label="Ajustes" isExpanded={isExpanded} />
            <SidebarItem to="/help" icon={faQuestionCircle} label="Ayuda" isExpanded={isExpanded} />
          </nav>
        </div>
      </div>
      
      {/* Botón para colapsar/expandir el sidebar (solo en desktop) */}
      <div className="p-4 border-t border-white/20 hidden md:block">
        <button 
          onClick={onToggleExpand} 
          className="w-full flex items-center justify-center p-2 rounded-md hover:bg-white/20 transition-colors"
          aria-label={isExpanded ? "Colapsar menú" : "Expandir menú"}
        >
          <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
