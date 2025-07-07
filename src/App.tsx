import { Routes, Route, Navigate } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { DashboardPage } from './pages/DashboardPage';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { CasesPage } from './pages/CasesPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { AgendaPage } from './pages/AgendaPage';
function App() {
  return (
    <Routes>
      <Route path="/style-guide" element={<StyleGuidePage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<PageLayout><DashboardPage /></PageLayout>} />
      <Route path="/cases" element={<PageLayout><CasesPage /></PageLayout>} />
      <Route path="/documents" element={<PageLayout><DocumentsPage /></PageLayout>} />

      {/* Nueva Ruta para la Agenda */}
      <Route path="/agenda" element={<PageLayout><AgendaPage /></PageLayout>} />
    </Routes>
  );
}

export default App;
