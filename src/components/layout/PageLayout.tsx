import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { clsx } from 'clsx';

// Este componente recibe 'children', que será el contenido de la página a mostrar.
type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  // Estado para controlar la visibilidad del sidebar en pantallas móviles.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para controlar si el sidebar está expandido o colapsado en desktop.
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  // Funciones para cambiar los estados. Se las pasaremos a los componentes hijos.
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleToggleSidebarExpand = () => {
    setIsSidebarExpanded(prev => !prev);
  };

  return (
    <div className="h-screen flex bg-secondary-50">
      {/* El Sidebar recibe los estados y la función para manejar su expansión */}
      <Sidebar
        isMobileOpen={isMobileMenuOpen}
        isExpanded={isSidebarExpanded}
        onToggleExpand={handleToggleSidebarExpand}
      />

      {/* Contenedor principal que se ajusta al tamaño del sidebar */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* El Header recibe la función para abrir el menú en móvil */}
        <Header onMenuButtonClick={handleToggleMobileMenu} />
        
        {/* El contenido principal de la página */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
