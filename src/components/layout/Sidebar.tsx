import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faFolderOpen, faCalendarAlt, faFileAlt, faUsers,
  faSearch, faRobot, faFileSignature, faCalculator,
  faUserCog, faCog, faQuestionCircle,
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';

type SidebarItemProps = {
  icon: IconDefinition;
  label: string;
  to: string;
  isExpanded: boolean;
};

function SidebarItem({ icon, label, to, isExpanded }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'flex items-center py-2 px-3 rounded-md mb-1 transition-colors duration-200',
          'hover:bg-white/20',
          { 'bg-white/20 border-l-4 border-white': isActive },
          { 'justify-center': !isExpanded }
        )
      }
    >
      <FontAwesomeIcon icon={icon} className={clsx('w-5', { 'mr-3': isExpanded })} />
      <span className={clsx({ 'hidden': !isExpanded })}>{label}</span>
    </NavLink>
  );
}

type SidebarProps = {
  isMobileOpen: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

export function Sidebar({ isMobileOpen, isExpanded, onToggleExpand }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'gradient-bg text-white flex-shrink-0 overflow-y-auto transition-all duration-300 flex flex-col',
        'md:relative md:translate-x-0',
        { 'w-64': isExpanded, 'w-20': !isExpanded },
        { 'translate-x-0': isMobileOpen, '-translate-x-full absolute': !isMobileOpen }
      )}
    >
      <div className="flex-1 p-4">
        {/* Sección Principal */}
        <div className="mb-8">
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Principal</p>
          <nav>
            <SidebarItem to="/dashboard" icon={faTachometerAlt} label="Dashboard" isExpanded={isExpanded} />
            <SidebarItem to="/cases" icon={faFolderOpen} label="Casos" isExpanded={isExpanded} />
            <SidebarItem to="/agenda" icon={faCalendarAlt} label="Agenda" isExpanded={isExpanded} />
            <SidebarItem to="/documents" icon={faFileAlt} label="Documentos" isExpanded={isExpanded} />
            <SidebarItem to="/clients" icon={faUsers} label="Clientes" isExpanded={isExpanded} />
          </nav>
        </div>

        {/* Sección Herramientas */}
        <div className="mb-8">
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Herramientas</p>
          <nav>
            <SidebarItem to="/legal-search" icon={faSearch} label="Búsqueda Legal" isExpanded={isExpanded} />
            <SidebarItem to="/asistente-ia" icon={faRobot} label="Asistente IA" isExpanded={isExpanded} />
            {/* CORRECCIÓN: Este es un NavLink, no un botón que abre un modal */}
            <SidebarItem to="/generador-escritos" icon={faFileSignature} label="Generador de Escritos" isExpanded={isExpanded} />
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
