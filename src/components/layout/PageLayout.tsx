import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const handleToggleSidebarExpand = () => setIsSidebarExpanded(prev => !prev);

  return (
    <div className="h-screen flex bg-secondary-50">
      <Sidebar
        isMobileOpen={isMobileMenuOpen}
        isExpanded={isSidebarExpanded}
        onToggleExpand={handleToggleSidebarExpand}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuButtonClick={handleToggleMobileMenu} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
